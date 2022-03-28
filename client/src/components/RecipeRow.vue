<template>
  <tr @click="goToDetail">
    <td class="col-4">
        <img class="img-fluid col-5 w-25" :src="photoUrl"/>
    </td>
    <td>italian</td>
    <td class="col-4">{{recipe.attributes.title}}</td>
    <td >{{recipe.attributes.difficulty}}</td>
    <td class="col-4">{{recipe.attributes.timeToPrepare}} min.</td>
  </tr>
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
    goToDetail() {
      this.$router.push(`/recipeDetail?id=${this.recipe.id}`)
    },
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