import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import MyVuex from '../components/myvuex.vue'
import Hello from '../components/Hello'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/App',
      component: App
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MyVuex',
      component: MyVuex
    },
    {
      path: '/Hello',
      component: Hello
    },
    {
      path:'*',
      component:MyVuex
    }
  ]
})