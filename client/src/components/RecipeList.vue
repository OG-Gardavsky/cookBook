<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Dificulty</th>
      <th scope="col">time to prepare</th>
    </tr>
    </thead>
    <tbody>

      <RecipeRow v-for="recipe in recipes" :recipe="recipe" />

    </tbody>
  </table>
</template>

<script>

import RecipeRow from "@/components/RecipeRow";
export default {
  name: "RecipeList",
  components: {RecipeRow},
  props: {
    recipes: Array,
  },
}
</script>

<style scoped>

</style>