import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/herodetails/:id/comics',
    name: 'herodetails',
    component: () => import(/* webpackChunkName: "herodetails" */ '../views/HeroDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
