import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rocket/:id',
      name: 'rocket',
      component: () => import('../views/RocketView.vue')
    },
    {
      path: '/rockets',
      name: 'rockets',
      component: () => import('../views/RocketsView.vue')
    }
  ]
})

export default router
