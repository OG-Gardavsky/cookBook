<template>
  <div class="container d-flex flex-column mb-5">
    <h2 class="my-2 h2">Directions</h2>
    <div>{{directions}}</div>
  </div>
</template>

<script>
export default {
  props: {
    directions: null
  },
  name: "RecipeDirections"
}
</script>