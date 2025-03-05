<script setup lang="ts">
import { useSedesStore } from '../stores/SedesStore';
import TargetCenter from './TargetSedes.vue';

const sedesStore = useSedesStore(); // 🔹 Se carga automáticamente
</script>

<template>
  <div class="sedes">
    <br><br>
    <h2 class="sedes__titulo">Sedes</h2>
    <div class="sedes__linea"></div>

    <!--Aqui creamos un if, que lo que haces es que si sedes esta lleno, Crea un for que crea una targeta por cada sede que hay --> 

    <div v-if="sedesStore.sedes.length > 0" class="fila_tarjetas">
      <TargetCenter
        v-for="sede in sedesStore.sedes"
        :key="sede.idSede"
        v-bind="sede"
      />
    </div>

    <!--Si no existe ninguna sede, aparecera que esta cargando infinitamente, aparte, como tarde un poco en guardar todas las salas, la primra vez que entres tmb saldra-->

    <p v-else>Cargando sedes...</p>
  </div>
</template>

<style scoped>
.sedes {
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
