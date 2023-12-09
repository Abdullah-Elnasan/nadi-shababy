import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAddressCard, faBars, faHouse, faLocationDot, faListCheck, faBookOpen, faFilm, faUserGraduate, faPrint, faBook, faPhone, faCalendarDays, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faHouse, faAddressCard, faBars, faLocationDot, faListCheck, faBookOpen, faFilm, faUserGraduate, faPrint, faBook, faFacebook, faYoutube, faTelegram, faPhone, faCalendarDays, faEnvelope)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
