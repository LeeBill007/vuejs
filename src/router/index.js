import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import content from '../components/content.vue'
import pageList from '../components/pageList.vue'

import App from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/App',
      component: App
    },
    {
      path: '/pageList',
      component: pageList
    },
    {
      path: '/content',
      component: content
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
  ]
})