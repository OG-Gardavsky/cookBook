import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RecipeDetail from "@/views/RecipeDetail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipeDetail',
    name: 'Recipe detail',
    component: RecipeDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
