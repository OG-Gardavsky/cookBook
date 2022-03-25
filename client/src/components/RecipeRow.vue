<template>
  <router-link
    class="recipe container d-flex flex-row border-bottom justify-content-between col-sm text-decoration-none"
    :to="`/recipeDetail?id=${recipe.id}`"
  >

    <img class="img-fluid w-25" :src="photoUrl"/>
    <div>{{recipe.attributes.title}} </div>
    <div>{{recipe.attributes.difficulty}}</div>
    <div>{{recipe.attributes.timeToPrepare}} min.</div>
    <div>{{recipe.attributes.difficulty}}</div>

  </router-link>
</template>

<script>
import * as placeholderImg from '@/assets/placeholder-image.png'

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
  methods: {
    renderImage() {
      try {
        const imagePath = this.recipe.attributes.photo.data[0].attributes.url
        this.photoUrl =  `http://localhost:1337${imagePath}`
      } catch {
        this.photoUrl = placeholderImg
      }
    }
  },
  created() {
    this.renderImage()
  }
}
</script>

<style scoped>
  .recipe > * {
    padding: 5px;
  }
</style>