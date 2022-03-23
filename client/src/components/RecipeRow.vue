<template>
  <router-link
    class="recipe container d-flex flex-row border-bottom justify-content-between col-sm text-decoration-none"
    :to="`/recipeDetail?id=${recipe.id}`">

<!--    need to be rewrited for final implementation-->
    <img class="img-fluid w-25" :src="`http://localhost:1337${this.photoUrl}`"/>
    <div>{{recipe.attributes.title}} </div>
    <div>{{recipe.attributes.difficulty}}</div>
    <div>{{recipe.attributes.timeToPrepare}} min.</div>
    <div>{{recipe.attributes.difficulty}}</div>

  </router-link>
</template>

<script>
export default {
  name: "RecipeRow",
  props: {
    recipe: Object,
  },
  data() {
    return {
      photoUrl: null
    }
  },
  created() {
    try {
      this.photoUrl = this.recipe.attributes.photo.data[0].attributes.url
    } catch {
      // this.photoUrl = 'default'
    }

  }
}
</script>

<style scoped>
  .recipe > * {
    padding: 5px;
  }
</style>