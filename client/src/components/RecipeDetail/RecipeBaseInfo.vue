<template>
  <div class="d-flex flex-row">
    <b-img rounded class="img-fluid w-50" :src="photoUrl"/>

    <div class=" d-flex flex-column ms-3 border-start ">

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
        <font-awesome-icon icon="fa-solid fa-heart" />
        {{ numberOfLikes }}
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
  props: {
    numberOfLikes: 0,
    recipe: null,
    photoUrl: null
  },
  name: "RecipeBaseInfo"
}
</script>