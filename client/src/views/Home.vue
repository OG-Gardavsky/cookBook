<template>
  <div class="home d-flex flex-column">
    <TopBar />
    <h1>Cook book for 42nd century</h1>
    <b-button @click="getRecipes">Button</b-button>

    <b-overlay
        :show="busy"
        rounded
        opacity="0.6"
        spinner-variant="primary"
        class="d-inline-block"
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
        console.log(this.recipes)

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
