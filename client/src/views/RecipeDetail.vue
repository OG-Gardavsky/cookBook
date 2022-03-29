<template>
  <div>
    <top-bar />

    <b-overlay :show="busy" opacity="0.6" spinner-variant="secondary">

      <recipe-header :title="recipe.attributes.title" />



    </b-overlay>

  </div>
</template>

<script>
import axios from "axios";
import TopBar from "@/components/Topbar";
import RecipeHeader from "@/components/RecipeDetail/RecipeHeader";

export default {
  name: "RecipeDetail",
  components: {RecipeHeader, TopBar},
  data() {
    return{
      busy: false,
      id: null,
      recipe: null
    }
  },
  methods: {
    async getRecipe() {
      try {
        this.busy = true
        const res = await axios.get(`/api/recipes/${this.id}`)
        this.recipe = res.data.data
        this.busy = false

      } catch(err) {
        console.log(err)
      }
    }
  },
  async created() {
    this.id = this.$route.query.id
    await this.getRecipe()
    console.log('recipe', this.recipe)
  }
}
</script>

<style scoped>

</style>