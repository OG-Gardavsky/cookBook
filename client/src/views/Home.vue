<template>
  <div class="home d-flex flex-column">
    <TopBar />
    <h1 class="m-5 border-bottom  p-2">Cook book for 42nd century</h1>



    <b-overlay :show="busy" opacity="0.6" spinner-variant="secondary">

      <div v-if="!displayNoDataError">
        <h2>Filters</h2>
        <div class="container d-flex flex-row">
          <b-form-select class="form-select m-2" v-model="selectedCategory" :options="categories" @change="getRecipes"/>
          <b-form-select class="form-select m-2" v-model="selectedDifficulty" :options="difficulties" @change="getRecipes"/>
          <b-button class="m-2" @click="resetFilter">reset</b-button>
        </div>
        <RecipeList :recipes="recipes" />
      </div>


      <NoData v-if="displayNoDataError"/>

    </b-overlay>

  </div>
</template>

<script>
import TopBar from "@/components/Topbar";
import axios from "axios";
import RecipeRow from "@/components/RecipeRow";
import RecipeList from "@/components/RecipeList";
import qs from "qs";
import NoData from "@/components/NoData";
export default {
  name: 'Home',
  components: {
    NoData,
    RecipeList,
    RecipeRow,
    TopBar
  },
  data() {
    return {
      recipes: [],
      busy: false,
      categories: [],
      selectedCategory: null,
      selectedDifficulty: null,
      difficulties: [
        {text: 'All difficulties', value: null},
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4},
        {text: 5, value: 5},
      ],
      displayNoDataError: false
    }
  },
  methods: {
    resetFilter() {
      this.selectedDifficulty = null
      this.selectedCategory = null
      this.getRecipes()
    },
    async getRecipes() {
      try {
        this.busy = true

        const query = this.getQuery()
        const res = await axios.get(`/api/recipes?&${query}` )
        this.recipes = res.data.data
        this.busy = false

      } catch(err) {
        console.log(err)
        this.busy = false
      }
    },
    async getCategories(){
      try {
        this.busy = true

        const res = await axios.get('/api/categories')
        this.categories = res.data.data.map(category => {
          return {
            text: category.attributes.name,
            value: category.attributes.name
          }
        })

        this.categories.unshift({text: 'All categories', value: null})

        this.busy = false

      } catch (err) {
        this.categories = null;
        this.busy = false;
      }
    },
    getQuery() {
      const filters = {
        category: {
          name: {
            $eq: this.selectedCategory,
          }
        },
        difficulty: {
          $eq: this.selectedDifficulty,
        },
      }

      if (!this.selectedCategory) {
        delete filters['category']
      }

      if (!this.selectedDifficulty) {
        delete filters['difficulty']
      }

      const query = qs.stringify({
        populate: '*',
        filters
      }, {
        encodeValuesOnly: true,
      })

      return query
    },
    setDisplayNoDataError() {
      this.displayNoDataError = !this.recipes || !this.categories
    }
  },
  async created() {
    await this.getRecipes()
    await this.getCategories()
    this.setDisplayNoDataError()
  }
}
</script>
