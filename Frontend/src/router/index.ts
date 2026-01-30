import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Homepage from '@/views/Homepage.vue'

const routes: RouteRecordRaw[] = [{ path: '/', component: Homepage }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
