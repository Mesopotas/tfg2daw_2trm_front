import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useAsientoStore } from './AsientosStore'; // Importamos AsientosStore
import { useDetallesReservaStore } from './DetallesReservaStores'; // Importamos DetallesReservaStore

export const useDisponibilidadesStore = defineStore('disponibilidades', () => {
  const asientoStore = useAsientoStore(); // Accedemos al store de asientos
  const detallesReservaStore = useDetallesReservaStore(); // Accedemos al store de detalles de reservas
  const disponibilidades = ref<any[]>([]);

  const fetchDisponibilidades = async () => {
    const idAsiento = asientoStore.asientoSeleccionado;
    console.log("ID del asiento antes del fetch:", idAsiento);

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

  const cambiarEstadoDisponibilidad = async (fechaSeleccionada: string, token: string) => {
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

    const urlPut = `https://localhost:7179/api/Disponibilidades/${disponibilidad.idDisponibilidad}`;
    console.log("Realizando PUT a:", urlPut);

    const bodyPut = {
      idDisponibilidad: disponibilidad.idDisponibilidad,
      fecha: disponibilidad.fecha,
      estado: !disponibilidad.estado,
      idTramoHorario: disponibilidad.idTramoHorario
    };

    try {
      const responsePut = await fetch(urlPut, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPut)
      });

      if (!responsePut.ok) throw new Error(`Error HTTP en PUT: ${responsePut.status}`);
      console.log("Estado cambiado correctamente.");

      // Hacer POST a DetallesReservas
      const idDetalleReserva = await detallesReservaStore.createDetallesReserva(token, [idAsiento]);
      if (idDetalleReserva) {
        console.log("Reserva creada con ID:", idDetalleReserva);
      } else {
        console.warn("No se pudo crear la reserva.");
      }

      await fetchDisponibilidades(); // Recargar la lista
    } catch (error) {
      console.error("Error en cambiarEstadoDisponibilidad:", error);
    }
  };

  watch(
    () => asientoStore.asientoSeleccionado,
    (newIdAsiento) => {
      if (newIdAsiento) {
        fetchDisponibilidades();
      }
    },
    { immediate: true }
  );

  return { disponibilidades, fetchDisponibilidades, cambiarEstadoDisponibilidad };
});