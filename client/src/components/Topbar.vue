<template>
  <div>
    <b-navbar class="navBar" toggleable="lg" type="dark">
      <router-link to="/" class="text-decoration-none">
        <b-navbar-brand>
          <font-awesome-icon icon="fa-solid fa-utensils" />
          CookBook
        </b-navbar-brand>
      </router-link>
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