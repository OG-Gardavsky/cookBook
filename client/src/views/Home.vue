<template>
  <div class="home d-flex flex-column">
    <TopBar />
    <h1 class="m-5 border-bottom  p-2">Cook book for 42nd century</h1>

    <div>
      <b-button @click="getRecipes">Button</b-button>
    </div>


    <b-overlay
        :show="busy"
        opacity="0.6"
        spinner-variant="secondary"
    >
      <recipe-row v-for="recipe in recipes" :recipe="recipe"/>

    </b-overlay>

  </div>
</template>

<script>
import TopBar from "@/components/Topbar";
import axios from "axios";
import RecipeRow from "@/components/RecipeRow";
export default {
  name: 'Home',
  components: {
    RecipeRow,
    TopBar
  },
  data() {
    return {
      recipes: [],
      busy: false
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
      }
    }
  },
  created() {
    this.getRecipes()
  }
}
</script>
