import { createRouter, createWebHistory } from 'vue-router'
import ListingView from '../views/ListingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListingView,
      meta: {
        title: "Usuários | Intellya"
      }
    },
    {
      path: '/user/:id',
      name: 'user', 
      component: () => import('../views/UserView.vue'),
      meta: { 
        title: "Usuario"
      }
    }
  ]
})

router.beforeEach((to, from, next) =>{
  document.title = `${
    to.params.id ? `Usuário ${to.params.id}` : to.meta.title
  } | Intellya`

  next();
})

export default router
