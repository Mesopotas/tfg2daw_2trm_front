<template>
  <div class="sala">

    <p v-if="!salaStore.salaSeleccionada">Cargando ...</p>

    <DisposicionSala 
      v-if="salaStore.salaSeleccionada"
      :puestos="salaStore.salaSeleccionada.puestos || []" 
      :zonas="salaStore.salaSeleccionada.zona || []" 
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSalaStore } from '@/stores/SalaStore';
import DisposicionSala from '@/components/DisposicionSala.vue';

const salaStore = useSalaStore();

// 🔹 Cargar la sala con el ID seleccionado en SalaStore
onMounted(() => {
  if (salaStore.salaSeleccionada) {
    console.log("✅ Datos iniciales de la sala:", salaStore.salaSeleccionada);
  }
});
</script>

<style scoped>
.sala {
  padding: 20px;
  min-height: calc(100vh - 123px - 98px);
  text-align: center;

  @media (min-width: 768px) {
    height: calc(100vh - 75px - 98px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px - 98px);
  }
}
</style>
