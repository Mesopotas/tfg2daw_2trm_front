<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/UserStore';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    const userStore = useUserStore();
    userStore.checkAndFetchUserData(); // cargar siempre la info del usuario, para evitar q este el token de JWT pero no la info en el store
  },
};
</script>

<template>
  <div class="layout">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
