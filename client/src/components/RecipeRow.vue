<template>
  <tr @click="goToDetail">
    <td class="col-2">
        <img class="img-fluid" :src="photoUrl"/>
    </td>
    <td>{{recipe.attributes.title}}</td>
    <td>{{ recipe.attributes.category.data.attributes.name }}</td>
    <td>{{recipe.attributes.difficulty}}</td>
    <td>{{recipe.attributes.timeToPrepare}} min.</td>
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