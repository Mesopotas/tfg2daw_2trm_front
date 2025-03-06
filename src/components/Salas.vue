<script setup lang="ts">
import { watch } from 'vue';
import { useSalasStore } from '../stores/SalasStore';
import { useSedesStore } from '../stores/SedesStore';
import TargetSala from './TargetSala.vue';

const salasStore = useSalasStore();
const sedesStore = useSedesStore();

// Si el usuario cambia de sede o si ya hay una sede seleccionada, actualizar salas
watch(
  () => sedesStore.selectedSedeId,
  (newIdSede) => {
    if (newIdSede) {
      salasStore.fetchSalas(newIdSede);
    }
  },
  { immediate: true } // Ejecuta la función inmediatamente con el valor actual de selectedSedeId
);
</script>

<template>
  <div class="salas">
    <br><br>
    <h2 class="salas__titulo">Salas</h2>
    <div class="salas__linea"></div>

    <div v-if="salasStore.salas.length > 0" class="fila_tarjetas">
      <TargetSala
        v-for="sala in salasStore.salas"
        :key="sala.idSala"
        v-bind="sala"
      />
    </div>

    <p v-else>Cargando salas...</p>
  </div>
</template>


<style scoped>
.salas {
  height: calc(100vh - 123px - 98px);
  text-align: center;

  @media (min-width: 768px) {
    height: calc(100vh - 75px - 98px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px - 98px);
  }
}

.fila_tarjetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
}
</style>
