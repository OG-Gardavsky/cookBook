<template>
  <div class="home">
    <TopBar />
    <h1>Cook book for 42nd century</h1>
    <b-button @click="getRecipes">Button</b-button>

    <b-overlay
        :show="busy"
        rounded
        opacity="0.6"
        spinner-variant="primary"
        class="d-inline-block"
    >
      <p>{{ recipes }}</p>

    </b-overlay>

  </div>
</template>

<script>
import TopBar from "@/components/Topbar";
import axios from "axios";
export default {
  name: 'Home',
  components: {
    TopBar
  },
  data() {
    return {
      recipes: [],
      busy: false
    }
  },
  methods: {
    async getRecipes() {
      try {
        this.busy = true
        const res = await axios.get('/api/recipes?populate=*')
        this.recipes = res.data
        this.busy = false

      } catch(err) {
        console.log(err)
      }

    }
  },
  created() {
  }
}
</script>
