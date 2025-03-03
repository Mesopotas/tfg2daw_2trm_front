<script setup lang="ts">
import { onMounted } from 'vue';
import { useSedesStore } from '../stores/SedesStore';
import TargetCenter from '../components/TargetCenter.vue';

const sedesStore = useSedesStore();

onMounted(async () => {
  await sedesStore.fetchSedes();
});
</script>

<template>
  <div class="centros">
    <h2 class="centros__titulo">Centros</h2>
    <div class="centros__linea"></div>

    <div v-if="sedesStore.sedes.length > 0" class="fila_tarjetas">
      <TargetCenter
        v-for="sede in sedesStore.sedes"
        :key="sede.idSede"
        v-bind="sede"
      />
    </div>
    <p v-else>Cargando sedes...</p>
  </div>
</template>


<style>

.centros {
  height: calc(100vh - 123px - 98px);

  @media (min-width: 768px) {
    height: calc(100vh - 75px - 98px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px - 98px);
  }
}
</style>
