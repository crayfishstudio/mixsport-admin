import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/places/list',
    name: 'Places List',
    component: () => import('../views/places/List.vue')
  },
  {
    path: '/places/create',
    name: 'Places Create',
    component: () => import('../views/places/Create.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
