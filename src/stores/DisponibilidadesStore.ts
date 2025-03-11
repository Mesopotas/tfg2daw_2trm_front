import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'; // Importar el router
import { useAsientoStore } from './AsientosStore';
import { useDetallesReservaStore } from './DetallesReservaStores';
import { useReservasStore } from './ReservasStore';

export const useDisponibilidadesStore = defineStore('disponibilidades', () => {
  const router = useRouter();
  const asientoStore = useAsientoStore();
  const reservasStore = useReservasStore();
  const disponibilidades = ref<any[]>([]);

  const fetchDisponibilidades = async () => {
    const idAsiento = asientoStore.asientoSeleccionado;
    if (!idAsiento) {
      disponibilidades.value = [];
      return;
    }

    const url = `https://localhost:7179/api/Disponibilidades/search?idPuestoTrabajo=${idAsiento}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      disponibilidades.value = await response.json();
    } catch (error) {
      console.error("Error en fetchDisponibilidades:", error);
    }
  };

  const fetchLastDetalleReserva = async (token: string) => {
    const urlLast = "https://localhost:7179/api/DetallesReservas/last";
    try {
      const responseLast = await fetch(urlLast, {
        method: 'GET',
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (!responseLast.ok) throw new Error(`Error al obtener el último detalle de reserva: ${responseLast.status}`);
      
      return await responseLast.json();
    } catch (error) {
      console.error("Error al obtener el último detalle de reserva:", error);
      return null;
    }
  };

  const cambiarEstadoDisponibilidad = async (fechaSeleccionada: string, token: string) => {
    const idAsiento = asientoStore.asientoSeleccionado;
    if (!idAsiento) return;

    const disponibilidad = disponibilidades.value.find(d => d.fecha === fechaSeleccionada);
    if (!disponibilidad) return;

    const urlPut = `https://localhost:7179/api/Disponibilidades/${disponibilidad.idDisponibilidad}`;
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

      const idDetalleReserva = await fetchLastDetalleReserva(token); 
      if (!idDetalleReserva) return;

      const descripcion = "Descripción de la reserva";
      const idPuestoTrabajo = asientoStore.asientoSeleccionado;
  
      if (idPuestoTrabajo !== null) {
        try {
          const idReserva = await reservasStore.createReserva(descripcion, idPuestoTrabajo);
  
          const responseDetalleReserva = await fetch("https://localhost:7179/api/DetallesReservas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
              idDetalleReserva: 0,
              descripcion: descripcion,
              idPuestoTrabajo: idPuestoTrabajo
            })
          });

          if (!responseDetalleReserva.ok) throw new Error(`Error al crear el detalle de reserva: ${responseDetalleReserva.status}`);
          const detalleReservaData = await responseDetalleReserva.json();
  
          const postLineas = await fetch("https://localhost:7179/api/Lineas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
              IdReserva: idReserva,
              IdDetalleReserva: detalleReservaData.idDetalleReserva,
              Descripcion: descripcion,
              Precio: 11,
            }),
          });

          if (!postLineas.ok) throw new Error(`Error al crear la línea de reserva: ${postLineas.status}`);
          const data = await postLineas.json();

          router.push({
            name: 'info-pedido',
            query: { idReserva: idReserva, idDetalleReserva: detalleReservaData.idDetalleReserva }
          });

        } catch (errorReserva) {
          console.error("Error al crear la reserva:", errorReserva);
        }
      }

      await fetchDisponibilidades();
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
