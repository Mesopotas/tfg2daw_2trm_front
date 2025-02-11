import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import UsersView from '@/views/UsersView.vue'
//import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Card.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/Card.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../components/Card.vue'),
    }
  ],
});
export default router