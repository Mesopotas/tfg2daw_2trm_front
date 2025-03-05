<script setup lang="ts">
import { useSedesStore } from '../stores/SedesStore';

const sedesStore = useSedesStore();
</script>

<template>
  <div>
    <h2>Salas de la sede</h2>
    <p v-if="sedesStore.selectedSedeId">Mostrando salas para la sede ID: {{ sedesStore.selectedSedeId }}</p>
    <p v-else>No se ha seleccionado ninguna sede.</p>
  </div>
</template>
