<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Login from './views/LoginView.vue';
import SobreNosotros from './views/SobreNosotrosView.vue';
import Tarifas from './views/TarifasView.vue';
import Oficina from './views/Oficina.vue';

export default {
  components: {
    Header,
    Login,
    Oficina,
    SobreNosotros,
    Tarifas,
    Footer,
  },
};
</script>

<template>
  <div class="layout">
    <Header />
    <Oficina />
    <SobreNosotros />
    <Tarifas />
    <Footer />
  </div>
</template>

