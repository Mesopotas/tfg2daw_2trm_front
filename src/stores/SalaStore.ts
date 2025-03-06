import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useSalasStore } from './SalasStore';

export const useSalaStore = defineStore('sala', () => {
  const salaSeleccionada = ref<any | null>(null);
  const salasStore = useSalasStore(); // 🔹 Importamos el store de salas

  const fetchSala = async (idSala: number) => {
    if (!idSala) {
      console.warn("⚠️ No hay una sala seleccionada.");
      salaSeleccionada.value = null;
      return;
    }

    const url = `https://localhost:7179/api/Salas/${idSala}`;
    console.log(" Obteniendo detalles de la sala desde:", url);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        console.error(" La API devolvió datos vacíos.");
        salaSeleccionada.value = null;
        return;
      }

      salaSeleccionada.value = { ...data }; //Guardamos la sala seleccionada
      console.log("📜 JSON de la sala actualizada:", salaSeleccionada.value);
      
    } catch (error) {
      console.error("Error al obtener los detalles de la sala:", error);
      salaSeleccionada.value = null;
    }
  };

  // Detectar cuando cambia el ID de la sala y actualizar automáticamente
  watch(() => salasStore.selectedSalaId, (newId) => {
    if (newId) {
      console.log(` Cambio detectado en selectedSalaId: ${newId}, ejecutando fetchSala...`);
      fetchSala(newId);
    } else {
      console.log(" Se ha deseleccionado la sala, limpiando datos.");
      salaSeleccionada.value = null;
    }
  }, { immediate: true }); // 🔹 Se ejecuta también en el inicio

  return { salaSeleccionada, fetchSala };
});
