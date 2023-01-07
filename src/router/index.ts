import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { applyPureReactInVue } from 'veaury'
import MobileEditor from '../views/TestBI/BI-src/mobile-editor/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TestBI',
    component: () => import('../views/TestBI/index.vue')
  },
  {
    path: '/mobile-editor',
    name: 'mobile-editor',
    component: applyPureReactInVue(MobileEditor)
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
