<template>
  <div>
    <b-navbar class="navBar" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <font-awesome-icon icon="fa-solid fa-utensils" />
        CookBook
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>
  .navBar {
    background-color: #f6ac30;
  }

  .navBar > * {
    margin-left: 20px;
  }
</style>