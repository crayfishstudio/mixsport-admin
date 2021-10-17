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
    path: '/marketplace/sellers',
    name: 'Seller List',
    component: () => import('../views/marketplace/SellerList.vue')
  },
  {
    path: '/marketplace/sellers/:id',
    name: 'Seller Edit',
    component: () => import('../views/marketplace/SellerEdit.vue')
  },
  {
    path: '/marketplace/orders',
    name: 'Orders List',
    component: () => import('../views/marketplace/OrdersList.vue')
  },
  {
    path: '/marketplace/deals',
    name: 'Deals List',
    component: () => import('../views/marketplace/DealsList.vue')
  },
  {
    path: '/sales',
    name: 'Sales List',
    component: () => import('../views/sales/List.vue')
  },
  {
    path: '/sales/:id',
    name: 'Sales Edit',
    component: () => import('../views/sales/Edit.vue')
  },
  {
    path: '/customers',
    name: 'Customers List',
    component: () => import('../views/customers/List.vue')
  },
  {
    path: '/customers/:id',
    name: 'Client Edit',
    component: () => import('../views/customers/Edit.vue')
  },
  {
    path: '/users',
    name: 'Users List',
    component: () => import('../views/users/List.vue')
  },
  {
    path: '/users/:id',
    name: 'Users Edit',
    component: () => import('../views/users/Edit.vue')
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
