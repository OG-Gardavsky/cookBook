<template>
  <div>
    <top-bar />

    <b-overlay :show="busy" opacity="0.6" spinner-variant="secondary">

      <recipe-header :title="recipe.attributes.title" />

      <div class="container d-flex flex-column">

        <recipe-base-info :recipe="recipe" :number-of-likes="numberOfLikes" :photo-url="photoUrl" />
        <recipe-ingredients-tools />
        <recipe-directions />

      </div>


    </b-overlay>

  </div>
</template>

<script>
import axios from "axios";
import TopBar from "@/components/Topbar";
import RecipeHeader from "@/components/RecipeDetail/RecipeHeader";
import * as placeholderImg from "@/assets/placeholder-image.png";
import RecipeBaseInfo from "@/components/RecipeDetail/RecipeBaseInfo";
import RecipeIngredientsTools from "@/components/RecipeDetail/RecipeIngredientsTools";
import RecipeDirections from "@/components/RecipeDetail/RecipeDirections";

export default {
  name: "RecipeDetail",
  components: {RecipeDirections, RecipeIngredientsTools, RecipeBaseInfo, RecipeHeader, TopBar},
  data() {
    return{
      busy: false,
      id: null,
      recipe: null,
      photoUrl: null,
      numberOfLikes: 0,
    }
  },
  methods: {
    async getRecipe() {
      try {
        this.busy = true
        const res = await axios.get(`/api/recipes/${this.id}?populate=*`)
        this.recipe = res.data.data
        this.busy = false

      } catch(err) {
        //TODO display Blank message that recipe cannot be loaded
        console.log(err)
        this.busy = false
      }
    },
    getImageUrl() {
      try {
        const imagePath = this.recipe.attributes.photo.data[0].attributes.url
        this.photoUrl =  `http://localhost:1337${imagePath}`
      } catch {
        this.photoUrl = placeholderImg
      }
    },
    getNumberOfLikes() {
      try {
        this.numberOfLikes = this.recipe.attributes.likes.data.length
      } catch {
        this.numberOfLikes = 0
      }


    }
  },
  async created() {
    this.id = this.$route.query.id
    await this.getRecipe()
    this.getImageUrl()
    this.getNumberOfLikes()

  }
}
</script>

<style scoped>

</style>