import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faBowlRice, faUtensils, faArrowLeft, faGlobe, faClock, faHeart, faPlateWheat, faUser, faPlus, faHandshakeSlash } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add({ faBowlRice, faUtensils, faArrowLeft, faGlobe, faClock, faHeart, faPlateWheat, faUser, faPlus, faHandshakeSlash })
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(library)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
