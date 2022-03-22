<template>
  <div class="home">
    <TopBar />
    <h1>Homepage</h1>
    <b-button>Button</b-button>
    <p>filters</p>

  </div>
</template>

<script>
import TopBar from "@/components/Topbar";
export default {
  name: 'Home',
  components: {
    TopBar
  },
  data() {
    return {

    }
  },
  methods: {

  },
  async created() {

  }
}
</script>
