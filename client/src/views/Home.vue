<template>
  <div class="home d-flex flex-column">
    <TopBar />
    <h1 class="m-5 border-bottom  p-2">Cook book for 42nd century</h1>

    <div>
      <b-button @click="getRecipes">Button</b-button>
    </div>

    <div class="">
      <b-form-select class="custom-select" v-model="selectedCategories" :options="categories" @change="console.log('je to tam')"/>
    </div>



    <b-overlay :show="busy" opacity="0.6" spinner-variant="secondary">
      <RecipeList :recipes="recipes"/>
    </b-overlay>

  </div>
</template>

<script>
import TopBar from "@/components/Topbar";
import axios from "axios";
import RecipeRow from "@/components/RecipeRow";
import RecipeList from "@/components/RecipeList";
export default {
  name: 'Home',
  components: {
    RecipeList,
    RecipeRow,
    TopBar
  },
  data() {
    return {
      recipes: [],
      busy: false,
      categories: ['asia', 'italian'],
      selectedCategories: []
    }
  },
  methods: {
    async getRecipes() {
      try {
        this.busy = true
        const res = await axios.get('/api/recipes?populate=*')
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
            value: category.id}
        })

        this.busy = false

      } catch (err) {
        this.categories = null;
        this.busy = false;
      }
    }
  },
  created() {
    this.getRecipes()
    this.getCategories()
  }
}
</script>
