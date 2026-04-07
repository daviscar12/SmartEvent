import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs',
    component: () => import('../views/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'eventos',
        component: () => import('../views/EventosPage.vue')
      },
      {
        path: 'favoritos',
        component: () => import('../views/FavoritoPage.vue')
      },
      {
        path: 'perfil',
        component: () => import('../views/PerfilPage.vue')
      }
    ]
  },
  {
    path: '/detalhes/:id', 
    name: 'detalhes',
    component: () => import('../views/EventoDetalhePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router