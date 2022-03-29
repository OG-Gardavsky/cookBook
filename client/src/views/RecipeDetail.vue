<template>
  <div>
    <top-bar />
    <h1>{{recipe.attributes.title}}</h1>
  </div>
</template>

<script>
import axios from "axios";
import TopBar from "@/components/Topbar";

export default {
  name: "RecipeDetail",
  components: {TopBar},
  data() {
    return{
      id: null,
      recipe: null
    }
  },
  methods: {
    async getRecipe() {
      try {
        const res = await axios.get(`/api/recipes/${this.id}`)
        this.recipe = res.data.data

      } catch(err) {
        console.log(err)
      }
    }
  },
  created() {
    this.id = this.$route.query.id
    this.getRecipe()
  }
}
</script>

<style scoped>

</style>