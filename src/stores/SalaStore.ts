import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useSalasStore } from './SalasStore';

export const useSalaStore = defineStore('sala', () => {
  const salaSeleccionada = ref<any | null>(null);
  const salasStore = useSalasStore();

  const fetchSala = async (idSala: number) => {
    if (!idSala) {
      salaSeleccionada.value = null;
      return;
    }

    try {
      const response = await fetch(`https://localhost:7179/api/Salas/${idSala}`);
      salaSeleccionada.value = response.ok ? await response.json() : null;
    } catch {
      salaSeleccionada.value = null;
    }
  };


  watch(
    () => salasStore.selectedSalaId, // Obtiene el ID de la sala seleccionada en salasStore
    (newId) => {
      if (newId) {
        // Si hay un nuevo ID de sala seleccionado, obtenemos los datos de la api
        fetchSala(newId);
      } else {
        // Si el ID es null, limpiamos la sala seleccionada
        salaSeleccionada.value = null;
      }
    }, 
  );

  return { salaSeleccionada, fetchSala };
});
