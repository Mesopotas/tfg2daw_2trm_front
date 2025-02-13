<script lang="ts">
import SobreNosotros from '../components/SobreNosotros.vue';
import Tarifas from '../components/Tarifas.vue';
import Oficina from '../components/Oficina.vue';

export default {
  components: {
    Oficina,
    SobreNosotros,
    Tarifas,
  },
};
</script>

<template>
  <div class="layout">
    <Oficina />
    <SobreNosotros />
    <Tarifas />
  </div>
</template>

