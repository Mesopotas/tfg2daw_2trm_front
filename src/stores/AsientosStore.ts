import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAsientoStore = defineStore('asiento', () => {
  const asientoSeleccionado = ref<number | null>(null);

  const seleccionarAsiento = (idAsiento: number) => {
    asientoSeleccionado.value = idAsiento;
    console.log("🔹 Asiento seleccionado en AsientosStore:", asientoSeleccionado.value);
  };
  
  

  return { asientoSeleccionado, seleccionarAsiento };
});
