import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import MesasView from '../views/MesasView.vue';
import SedesView from '../views/SedesView.vue';
import UserInfoView from '../views/UserInfoView.vue';
import SalasView from '../views/SalasView.vue';
import CoockiesView from '../views/CoockiesView.vue';
import ResponsabilidadView from '../views/ResponsabilidadView.vue';
import PrivacidadView from '../views/PrivacidadView.vue';
import DeclaracionView from '../views/DeclaracionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/elegir-mesa',
      name: 'elegir-mesa',
      component: MesasView,
    },
    {
      path: '/sedes',
      name: 'sedes',
      component: SedesView,
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfoView,
    },
    {
      path: '/salas',
      name: 'salas',
      component: SalasView,
    },
    {
      path: '/coockies',
      name: 'coockies',
      component: CoockiesView,
    },
    {
      path: '/responsabilidad',
      name: 'responsabilidad',
      component: ResponsabilidadView,
    },
    {
      path: '/privacidad',
      name: 'privacidad',
      component: PrivacidadView,
    },
    {
      path: '/declaracion',
      name: 'declaracion',
      component: DeclaracionView,
    }
  ],
});
export default router