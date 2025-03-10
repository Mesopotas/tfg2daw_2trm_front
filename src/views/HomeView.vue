<script lang="ts">
import SobreNosotros from '../components/SobreNosotros.vue';
import salasInfo from '../components/salasInfo.vue';
import Oficina from '../components/Oficina.vue';

export default {
  components: {
    Oficina,
    SobreNosotros,
    salasInfo,
  },
};
</script>

<template>
  <div class="layout">
    <Oficina />
    <SobreNosotros />
    <salasInfo />
  </div>
</template>

