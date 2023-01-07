import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TestBI',
    component: () => import('../views/TestBI/index.vue')
  },
  {
    path: '/mobile-editor',
    name: 'mobile-editor',
    component: () => import('../views/TestBI/BI-src/mobile-editor/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
