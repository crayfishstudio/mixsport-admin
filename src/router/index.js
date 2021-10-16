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
    path: '/places',
    name: 'Places List',
    component: () => import('../views/places/List.vue')
  },
  {
    path: '/places/:id',
    name: 'Place Edit',
    component: () => import('../views/places/Edit.vue')
  },
  {
    path: '/articles',
    name: 'Articles List',
    component: () => import('../views/articles/List.vue')
  },
  {
    path: '/articles/:id',
    name: 'Article Edit',
    component: () => import('../views/articles/Edit.vue')
  },
  {
    path: '/events',
    name: 'Events List',
    component: () => import('../views/events/List.vue')
  },
  {
    path: '/events/:id',
    name: 'Event Edit',
    component: () => import('../views/events/Edit.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
