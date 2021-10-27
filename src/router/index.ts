import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Landing from '../pages/landing/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Landing,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
