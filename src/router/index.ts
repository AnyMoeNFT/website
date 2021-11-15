import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Landing from '../pages/landing/index.vue';
import Waiting from '../pages/waiting/index.vue';

const routes: RouteRecordRaw[] =
  import.meta.env.VITE_START_UP === 'prod'
    ? [
        {
          path: '/',
          component: Waiting,
          meta: {
            useDefaultHeader: false,
            useDefaultFooter: false,
          },
        },
      ]
    : [
        {
          path: '/',
          component: Landing,
        },
      ];

export default createRouter({
  history: createWebHistory(),
  routes,
});
