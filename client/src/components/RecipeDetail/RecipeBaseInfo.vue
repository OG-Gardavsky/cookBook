<template>
  <div class="d-flex flex-row border-bottom">
    <b-img rounded class="img-fluid w-50 m-2" :src="photoUrl"/>

    <div class=" d-flex flex-column ms-3 my-2 border-start ">

      <div class="m-2  justify-content-start justify-content-start">
        <font-awesome-icon icon="fa-solid fa-globe" />
        {{recipe.attributes.category.data.attributes.name}}
      </div>

      <div class="m-2">
        <font-awesome-icon icon="fa-solid fa-clock" />
        {{recipe.attributes.timeToPrepare}} min.
      </div>

      <div class="m-2">
        <font-awesome-icon icon="fa-solid fa-plate-wheat" />
        difficulty(1 - 5): {{ recipe.attributes.difficulty }}
      </div>

      <div class="m-2">
        <font-awesome-icon icon="fa-solid fa-heart" @click="addLike" />
        {{ numberOfLikes }}
        <b-button v-if="isLikeActive" class="mx-2" @click="addLike">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </b-button>

      </div>

      <div class="m-2">
        <font-awesome-icon icon="fa-solid fa-user" />
        <!--              TODO fill author from db-->
        testing user
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeBaseInfo",
  props: {
    numberOfLikes: 0,
    recipe: null,
    photoUrl: null,
    isLikeActive: Boolean
  },
  methods: {
    addLike() {
      this.$emit('on-heartPress');
    }
  }
}
</script>