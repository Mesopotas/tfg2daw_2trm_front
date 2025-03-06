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
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      disponibilidades.value = await response.json();
      console.log("Disponibilidades recibidas:", disponibilidades.value);
    } catch (error) {
      console.error("Error en fetchDisponibilidades:", error);
    }
  };

  const cambiarEstadoDisponibilidad = async (fechaSeleccionada: string) => {
    const idAsiento = asientoStore.asientoSeleccionado;
    if (!idAsiento) {
      console.warn("No hay asiento seleccionado para cambiar disponibilidad.");
      return;
    }

    const disponibilidad = disponibilidades.value.find(d => d.fecha === fechaSeleccionada);
    if (!disponibilidad) {
      console.warn("No se encontró disponibilidad para la fecha seleccionada.");
      return;
    }

    const url = `https://localhost:7179/api/Disponibilidades/${disponibilidad.idDisponibilidad}`;
    console.log("Realizando PUT a:", url);

    const body = {
      idDisponibilidad: disponibilidad.idDisponibilidad,
      fecha: disponibilidad.fecha,
      estado: !disponibilidad.estado, // contrario al estado actual, posible adaptar la api para poder re adaptarlo y aplicarlo a otras cosas
      idTramoHorario: disponibilidad.idTramoHorario
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

      console.log("Estado cambiado correctamente.");
      await fetchDisponibilidades(); // re cargar la lista
    } catch (error) {
      console.error("Error en cambiarEstadoDisponibilidad:", error);
    }
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
