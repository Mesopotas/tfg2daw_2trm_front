<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Login from './views/LoginView.vue';

export default {
  components: {
    Header,
    Footer,
    Login,
  },
};
</script>

<template>
  <div class="layout">
    <Header />
    <Footer />
  </div>
</template>

