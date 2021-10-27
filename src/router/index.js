import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
