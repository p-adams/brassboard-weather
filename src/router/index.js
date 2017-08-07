import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Router)
Vue.use(VueFire)
Vue.use(Vuetify)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
