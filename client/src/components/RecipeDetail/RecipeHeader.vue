<template>
  <div class="border-bottom container d-flex flex-row my-4">
    <router-link to="/" class="text-decoration-none">
      <font-awesome-icon icon="fa-solid fa-arrow-left " class="h2 m-2"/>
    </router-link>
    <h1 class="h2 m-2">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "RecipeHeader",
  props: {
    title: null
  }
}
</script>

<style scoped>

</style>