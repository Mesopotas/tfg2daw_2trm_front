import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useAsientoStore } from './AsientosStore'; // Importamos AsientosStore
import { useDetallesReservaStore } from './DetallesReservaStores'; // Importamos DetallesReservaStore
import { useReservasStore } from './ReservasStore'; // Importamos ReservasStore

export const useDisponibilidadesStore = defineStore('disponibilidades', () => {
  const asientoStore = useAsientoStore(); // Accedemos al store de asientos
  const detallesReservaStore = useDetallesReservaStore(); // Accedemos al store de detalles de reservas
  const reservasStore = useReservasStore(); // Accedemos al store de reservas

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
      // validar que haya disponibilidad
    const disponibilidad = disponibilidades.value.find(d => d.fecha === fechaSeleccionada);
    if (!disponibilidad) {
      console.warn("No se encontró disponibilidad para la fecha seleccionada.");
      return;
    }

    const urlPut = `https://localhost:7179/api/Disponibilidades/${disponibilidad.idDisponibilidad}`;

    const bodyPut = { // usamos la data del store de disponibilidades
      idDisponibilidad: disponibilidad.idDisponibilidad,
      fecha: disponibilidad.fecha,
      estado: !disponibilidad.estado, // el contrario al estado actual, aun asi el back siempre lo pondrá en false
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
        console.log("Reserva creada con ID:", idDetalleReserva); // para depurar y confirmar que todo va bien
      } else {
        console.warn("No se pudo crear la reserva.");
      }

      const descripcion = "Descripción de la reserva"; // descripcion fija
      const idPuestoTrabajo = asientoStore.asientoSeleccionado;

      if (idPuestoTrabajo !== null) {
        try {
          // post a reservas
          const idReserva = await reservasStore.createReserva(descripcion, idPuestoTrabajo);
          console.log("Reserva creada con ID:", idReserva);

            // añadir en lineasstore y con datos de otras store
          const postLineas = await fetch("https://localhost:7179/api/Lineas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
              IdReserva: idReserva,
              IdDetalleReserva: idDetalleReserva,
              Descripcion: descripcion,
              PrecioTotal: 11,
            }),
          });
        } catch (errorReserva) {
          console.error("Error al crear la reserva:", errorReserva);
        }
      } else {
        console.warn("El ID de puesto de trabajo es null.");
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
