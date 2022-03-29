<template>
  <div>
    <top-bar />

    <b-overlay :show="busy" opacity="0.6" spinner-variant="secondary">

      <recipe-header  v-if="recipe" :title="recipe.attributes.title" />
      <div v-if="recipe" class="container d-flex flex-column">
        <recipe-base-info
            :recipe="recipe" :number-of-likes="numberOfLikes" :photo-url="photoUrl" :is-like-active="isLikeActive"
            @on-heartPress="addLike"
        />
        <recipe-ingredients-tools :ingredients="ingredients" :tools="tools"/>
        <recipe-directions :directions="recipe.attributes.directions" />
      </div>

      <NoData v-if="!recipe" />

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
import NoData from "@/components/NoData";

export default {
  name: "RecipeDetail",
  components: {NoData, RecipeDirections, RecipeIngredientsTools, RecipeBaseInfo, RecipeHeader, TopBar},
  data() {
    return{
      busy: false,
      id: null,
      recipe: null,
      photoUrl: null,
      numberOfLikes: 0,
      localStorageLikeKey: 'LIKES',
      isLikeActive: false,
      ingredients: null,
      tools: null
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
    },
    parseIngrediets() {
      this.ingredients = this.recipe.attributes.ingredients.data.map(ingredient => ingredient.attributes.name)
    },
    parseTools() {
      this.tools = this.recipe.attributes.tools.data.map(tool => tool.attributes.name)
    },
    async addLike() {
      try {
        await axios.post('/api/likes', {
          data: {
            recipe: this.recipe.id
          }
        })

        this.saveLikeToLocalStorage()

        await this.getRecipe()
        this.getNumberOfLikes()
        this.setIsLikeActive()

      } catch {}
    },
    saveLikeToLocalStorage() {
      const savedLikesVal = localStorage.getItem(this.localStorageLikeKey)
      const savedLikes = savedLikesVal ?  JSON.parse(savedLikesVal) : []
      savedLikes.push(this.recipe.id)
      localStorage.setItem(this.localStorageLikeKey, JSON.stringify(savedLikes));
    },
    setIsLikeActive() {
      const savedLikesVal = localStorage.getItem(this.localStorageLikeKey)
      if (!savedLikesVal) {
        this.isLikeActive = true
        return
      }

      const isAlreadyLiked =  JSON.parse(savedLikesVal).find(like => like === this.recipe.id)
      this.isLikeActive = !isAlreadyLiked
    }
  },
  async created() {
    this.id = this.$route.query.id
    await this.getRecipe()
    this.getImageUrl()
    this.getNumberOfLikes()
    this.parseIngrediets()
    this.parseTools()
    this.setIsLikeActive()

  }
}
</script>