import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/eventos',
    component: () => import('@/views/EventosPage.vue')
  },
  {
    path: '/detalhes',
    component: () => import('@/views/EventoDetalhePage.vue'),
    name: 'detalhes',
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
