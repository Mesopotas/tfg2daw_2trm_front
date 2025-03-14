import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import SedesView from '../views/SedesView.vue';
import UserInfoView from '../views/UserInfoView.vue';
import SalasView from '../views/SalasView.vue';
import SalaView from '../views/SalaView.vue';
import DisponibilidadView from '../views/DisponibilidadView.vue';
import InfoPedido from '../components/InfoPedido.vue';
import CoockiesView from '../views/CoockiesView.vue';
import ResponsabilidadView from '../views/ResponsabilidadView.vue';
import PrivacidadView from '../views/PrivacidadView.vue';
import DeclaracionView from '../views/DeclaracionView.vue';
import NoEncontrado from '../components/NoEncontrado.vue';
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
      path: '/sala',
      name: 'sala',
      component: SalaView,
    },
    {
      path: '/disponibilidades',
      name: 'disponibilidades',
      component: DisponibilidadView,
    },
    {
      path: '/info-pedido',
      name: 'info-pedido',
      component: InfoPedido,
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
    },
    {
      path: '/:pathMatch(.*)*', // si la ruta no es ninguna de las definidar aqui, se activará este componente
      name: 'NotFound',
      component: NoEncontrado,
    }
  ],
});

export default router;