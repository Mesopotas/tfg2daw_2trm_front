import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useAsientoStore } from './AsientosStore'; // Importamos AsientosStore

export const useDisponibilidadesStore = defineStore('disponibilidades', () => {
  const asientoStore = useAsientoStore(); // Accedemos al store de asientos
  const disponibilidades = ref<any[]>([]);

  const fetchDisponibilidades = async () => {
    const idAsiento = asientoStore.asientoSeleccionado; // Obtenemos el ID del asiento seleccionado

    console.log("ID del asiento antes del fetch:", idAsiento); // Agregar aquí para depurar

    if (!idAsiento) {
      console.warn("No hay ID de asiento seleccionado para hacer fetch.");
      disponibilidades.value = [];
      return;
    }

    const url = `https://localhost:7179/api/Disponibilidades/search?idPuestoTrabajo=${idAsiento}`;
    console.log("Realizando fetch a:", url);


      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      disponibilidades.value = await response.json();
      console.log("Disponibilidades recibidas:", disponibilidades.value);

  };

  // Observa cambios en el ID del asiento seleccionado y ejecuta `fetchDisponibilidades()`
  watch(
    () => asientoStore.asientoSeleccionado,
    (newIdAsiento) => {

      if (newIdAsiento) {
        fetchDisponibilidades();
      }
    },
    { immediate: true }
  );
  

  return { disponibilidades, fetchDisponibilidades };
});
