<template>
  <div class="d-flex flex-row">
    <div>{{recipe.attributes.title}} </div>
    <div>{{recipe.attributes.difficulty}}</div>
  </div>
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

</style>