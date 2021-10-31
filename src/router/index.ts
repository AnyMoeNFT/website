import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Landing from '../pages/landing/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Landing,
  },
];

if (import.meta.env.VITE_START_UP === 'local') {
  routes.push({
    path: '/ui-test',
    component: () => import('@/pages/test/index.vue'),
  });
}

export default createRouter({
  history: createWebHistory(),
  routes,
});
