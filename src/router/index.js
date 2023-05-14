import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import defaultLayout from '../layouts/TheDefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
      component: defaultLayout,
      children: [
        { path: 'home', name: 'home', component: HomeView },
        { path: '/rockets', name: 'rockets', component: () => import('../views/RocketsView.vue')},
        { path: 'rocket/:id', name: 'rocket', component: () => import('../views/RocketView.vue')}
      ]
    },
  ]
})

export default router
