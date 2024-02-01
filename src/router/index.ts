import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RadixView from '../views/RadixView.vue'
import DaisyView from '@/views/DaisyView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/radix',
      name: 'radix',
      component: RadixView
    },
    {
      path: '/daisy',
      name: 'daisy',
      component: DaisyView
    },
  ]
})

export default router
