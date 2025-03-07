<script setup>
import { onMounted } from 'vue';
import { useSalaStore } from '@/stores/salaStore';
import DisposicionSala from '@/components/DisposicionSala.vue';

const salaStore = useSalaStore();

</script>

<template>
  <div class="sala">

    <p v-if="!salaStore.salaSeleccionada">Cargando ...</p>

    <DisposicionSala 
      v-if="salaStore.salaSeleccionada"
      :puestos="salaStore.salaSeleccionada.puestos" 
      :zonas="salaStore.salaSeleccionada.zona" 
    />
  </div>
</template>

<style scoped>
.sala {
  padding: 20px;
  height: calc(100vh - 123px - 98px);
  text-align: center;

  @media (min-width: 768px) {
    height: calc(100vh - 75px - 98px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px - 98px);
  }
}
</style>
