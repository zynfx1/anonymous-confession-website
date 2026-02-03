import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Admin from '@/views/Admin.vue';
import Countdown from '@/views/Countdown.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Homepage },
  { path: '/admin', component: Admin },
  { path: '/count', component: Countdown },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
