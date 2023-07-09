import { createRouter, createWebHistory } from 'vue-router'
import ListingView from '../views/ListingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListingView
    },
    {
      path: '/user/:id',
      name: 'user', 
      component: () => import('../views/UserView.vue')
    }
  ]
})

export default router
