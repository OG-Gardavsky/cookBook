<template>
  <router-link
    class="recipe container d-flex flex-row border-bottom justify-content-between col-sm text-decoration-none"
    :to="`/recipeDetail?id=${recipe.id}`">

    <img class="img-fluid w-25" :src="'http://localhost:1337/uploads/full_v_recept733_b3d8cb05d7.jpg'"/>
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
  }
}
</script>

<style scoped>
  .recipe > * {
    padding: 5px;
  }
</style>