import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login page',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/',
    name: 'Console page',
    component: () => import('../views/console/Console.vue')
  },
  {
    path: '/marketplace/sellers',
    name: 'Seller List',
    component: () => import('../views/marketplace/Sellers.vue')
  },
  {
    path: '/marketplace/sellers/:id',
    name: 'Seller Edit',
    component: () => import('../views/marketplace/SellersEdit.vue')
  },
  {
    path: '/marketplace/orders',
    name: 'Orders List',
    component: () => import('../views/marketplace/Orders.vue')
  },
  {
    path: '/marketplace/deals',
    name: 'Deals List',
    component: () => import('../views/marketplace/Deals.vue')
  },
  {
    path: '/order',
    name: 'Order List',
    component: () => import('../views/order/List.vue')
  },
  {
    path: '/order/:id',
    name: 'Order Edit',
    component: () => import('../views/order/Edit.vue')
  },
  {
    path: '/products',
    name: 'Products List',
    component: () => import('../views/products/List.vue')
  },
  {
    path: '/products/:id',
    name: 'Product Edit',
    component: () => import('../views/products/Edit.vue'),
    children: [
      {
        path: 'overview',
        name: 'Product Overview',
        component: () => import('../components/products/Overview.vue')
      },
      {
        path: 'orders',
        name: 'Product Orders',
        component: () => import('../components/products/Orders.vue')
      },
      {
        path: 'certificates',
        name: 'Product Certificates',
        component: () => import('../components/products/Certificates.vue')
      },
    ],
  },
  {
    path: '/products-attributes',
    name: 'Attributes List',
    component: () => import('../views/products/Attributes.vue')
  },
  {
    path: '/products-attributes/:id',
    name: 'Attributes Edit',
    component: () => import('../views/products/AttributesEdit.vue')
  },
  {
    path: '/products-attribute-family',
    name: 'Attribute family List',
    component: () => import('../views/products/AttributeFamily.vue')
  },
  {
    path: '/products-attribute-family/:id',
    name: 'Attribute family Edit',
    component: () => import('../views/products/AttributeFamilyEdit.vue')
  },
  {
    path: '/products-categories',
    name: 'Categories List',
    component: () => import('../views/products/Categories.vue')
  },
  {
    path: '/products-categories/:id',
    name: 'Categories Edit',
    component: () => import('../views/products/CategoriesEdit.vue')
  },
  {
    path: '/customers',
    name: 'Customers List',
    component: () => import('../views/customers/List.vue')
  },
  {
    path: '/customers/:id',
    name: 'Client Edit',
    component: () => import('../views/customers/Edit.vue'),
    children: [
      {
        path: 'overview',
        name: 'Client Overview',
        component: () => import('../components/customers/Overview.vue')
      },
      {
        path: 'adress',
        name: 'Client Adress',
        component: () => import('../components/customers/Adress.vue')
      },
      {
        path: 'settings',
        name: 'Client Settings',
        component: () => import('../components/customers/Settings.vue')
      },
    ],
  },
  {
    path: '/customers-client-group',
    name: 'Client Group List',
    component: () => import('../views/customers/ClientGroup.vue')
  },
  {
    path: '/users',
    name: 'Users List',
    component: () => import('../views/users/List.vue')
  },
  {
    path: '/users/:id',
    name: 'Users Edit',
    component: () => import('../views/users/Edit.vue'),
    children: [
      {
        path: 'overview',
        name: 'Users Overview',
        component: () => import('../components/users/Overview.vue')
      },
      {
        path: 'adress',
        name: 'Users Adress',
        component: () => import('../components/users/Adress.vue')
      },
      {
        path: 'settings',
        name: 'Users Settings',
        component: () => import('../components/users/Settings.vue')
      },
    ],
  },
  {
    path: '/events',
    name: 'Events List',
    component: () => import('../views/events/List.vue')
  },
  {
    path: '/events/:id',
    name: 'Events Edit',
    component: () => import('../views/events/Edit.vue'),
    children: [
      {
        path: 'overview',
        name: 'Events Overview',
        component: () => import('../components/events/Overview.vue')
      },
      {
        path: 'tickets',
        name: 'Events Tickets',
        component: () => import('../components/events/Tickets.vue')
      },
      {
        path: 'sales',
        name: 'Events Sales',
        component: () => import('../components/events/Sales.vue')
      },
    ],
  },
  {
    path: '/events-tickets',
    name: 'Tickets List',
    component: () => import('../views/events/Tickets.vue')
  },
  {
    path: '/events-qrreading',
    name: 'QR Reading List',
    component: () => import('../views/events/Qrreading.vue')
  },
  {
    path: '/events-transactions',
    name: 'Transactions Logs List',
    component: () => import('../views/events/Transactions.vue')
  },
  {
    path: '/events-tags',
    name: 'Tags List',
    component: () => import('../views/events/Tags.vue')
  },
  {
    path: '/places',
    name: 'Places List',
    component: () => import('../views/places/List.vue')
  },
  {
    path: '/places/:id',
    name: 'Place Edit',
    component: () => import('../views/places/Edit.vue'),
    children: [
      {
        path: 'overview',
        name: 'Places Overview',
        component: () => import('../components/places/Overview.vue')
      },
      {
        path: 'photo',
        name: 'Places Photo',
        component: () => import('../components/places/Photo.vue')
      },
      {
        path: 'services',
        name: 'Places Services',
        component: () => import('../components/places/Services.vue')
      },
      {
        path: 'affiche',
        name: 'Places Affiche',
        component: () => import('../components/places/Affiche.vue')
      },
      {
        path: 'reviews',
        name: 'Places Reviews',
        component: () => import('../components/places/Reviews.vue')
      },
      {
        path: 'tours',
        name: 'Places Tours',
        component: () => import('../components/places/Tours.vue')
      },
      {
        path: 'pelatedplaces',
        name: 'Places Pelatedplaces',
        component: () => import('../components/places/Pelatedplaces.vue')
      },
      {
        path: 'files',
        name: 'Places Files',
        component: () => import('../components/places/Files.vue')
      },
    ],
  },
  {
    path: '/articles',
    name: 'Articles List',
    component: () => import('../views/articles/List.vue')
  },
  {
    path: '/articles/:id',
    name: 'Article Edit',
    component: () => import('../views/articles/Edit.vue'),
    children: [
      {
        path: 'overview',
        name: 'Article Overview',
        component: () => import('../components/articles/Overview.vue')
      },
      {
        path: 'photo',
        name: 'Article Photo',
        component: () => import('../components/articles/Photo.vue')
      },
      {
        path: 'file',
        name: 'Article File',
        component: () => import('../components/articles/File.vue')
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
