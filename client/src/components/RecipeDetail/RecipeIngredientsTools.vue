<template>
  <div class="container d-flex flex-row my-2 border-bottom">

    <div class="w-50 my-2">
      <h2 class="h2">Ingredients</h2>
      <ul>
        <li v-for="ingredient in ingredients">{{ingredient}}</li>
      </ul>

    </div>

    <div class="w-50 border-start my-2">
      <h2 class="h2">Special tools</h2>
      <ul>
        <li v-for="tool in tools">{{tool}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    ingredients: null,
    tools: null
  },
  name: "RecipeIngredientsTools"
}
</script>