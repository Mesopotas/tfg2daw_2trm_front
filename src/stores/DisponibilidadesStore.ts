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

  // Función para obtener disponibilidades
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

  // Función para obtener el último detalle de reserva y su ID
  const fetchLastDetalleReserva = async (token: string) => {
    const urlLast = "https://localhost:7179/api/DetallesReservas/last";
    try {
      const responseLast = await fetch(urlLast, {
        method: 'GET',
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (!responseLast.ok) throw new Error(`Error al obtener el último detalle de reserva: ${responseLast.status}`);
      
      // Si la respuesta es un numero (104 por ejemplo), lo usamos directamente
      const idDetalleReserva = await responseLast.json();
      console.log("ID del último detalle de reserva:", idDetalleReserva);

      if (!idDetalleReserva) {
        console.warn("No se pudo obtener idDetalleReserva.");
        return null;
      }

      return idDetalleReserva;
    } catch (error) {
      console.error("Error al obtener el último detalle de reserva:", error);
      return null;
    }
  };

  // Función para cambiar el estado de la disponibilidad
  const cambiarEstadoDisponibilidad = async (fechaSeleccionada: string, token: string) => {
    const idAsiento = asientoStore.asientoSeleccionado;
    if (!idAsiento) {
      console.warn("No hay asiento seleccionado para cambiar disponibilidad.");
      return;
    }
  
    // Validar que haya disponibilidad
    const disponibilidad = disponibilidades.value.find(d => d.fecha === fechaSeleccionada);
    if (!disponibilidad) {
      console.warn("No se encontró disponibilidad para la fecha seleccionada.");
      return;
    }
  
    const urlPut = `https://localhost:7179/api/Disponibilidades/${disponibilidad.idDisponibilidad}`;
  
    const bodyPut = { 
      idDisponibilidad: disponibilidad.idDisponibilidad,
      fecha: disponibilidad.fecha,
      estado: !disponibilidad.estado, // Cambiar el estado
      idTramoHorario: disponibilidad.idTramoHorario
    };
  
    try {
      // Actualizar el estado de la disponibilidad
      const responsePut = await fetch(urlPut, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPut)
      });
  
      if (!responsePut.ok) throw new Error(`Error HTTP en PUT: ${responsePut.status}`);
      console.log("Estado cambiado correctamente.");
  
      // Crear el detalle de reserva usando la función de obtener el último detalle
      const idDetalleReserva = await fetchLastDetalleReserva(token); 
      if (idDetalleReserva) {
        console.log("Reserva creada con ID:", idDetalleReserva); // Para depurar
      } else {
        console.warn("No se pudo crear la reserva.");
      }
  
      const descripcion = "Descripción de la reserva"; // Descripción fija
      const idPuestoTrabajo = asientoStore.asientoSeleccionado;
  
      if (idPuestoTrabajo !== null) {
        try {
          // Crear la reserva
          const idReserva = await reservasStore.createReserva(descripcion, idPuestoTrabajo);
          console.log("Reserva creada con ID:", idReserva);
  
          // Crear el detalle de reserva
          const responseDetalleReserva = await fetch("https://localhost:7179/api/DetallesReservas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
              idDetalleReserva: 0, // El ID se autogenera
              descripcion: descripcion,
              idPuestoTrabajo: idPuestoTrabajo
            })
          });
      
          if (!responseDetalleReserva.ok) {
            const errorData = await responseDetalleReserva.text();
            throw new Error(`Error al crear el detalle de reserva: ${responseDetalleReserva.status} - ${errorData}`);
          }
      
          const detalleReservaData = await responseDetalleReserva.json();
          console.log("Detalle de reserva creado con ID:", detalleReservaData.idDetalleReserva);
  
          // Crear la línea de reserva
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
              Precio: 11, // Precio total, ajusta según sea necesario
            }),
          });
  
          if (!postLineas.ok) {
            const errorData = await postLineas.text();
            throw new Error(`Error al crear la línea de reserva: ${postLineas.status} - ${errorData}`);
          }
  
          const data = await postLineas.json();
          console.log("Línea de reserva creada con ID:", data.IdLinea);
  
        } catch (errorReserva) {
          console.error("Error al crear la reserva:", errorReserva);
        }
      } else {
        console.warn("El ID de puesto de trabajo es null.");
      }
  
      await fetchDisponibilidades(); // Recargar la lista de disponibilidades
  
    } catch (error) {
      console.error("Error en cambiarEstadoDisponibilidad:", error);
    }
  };

  // Observamos cambios en el asiento seleccionado
  watch(
    () => asientoStore.asientoSeleccionado,
    (newIdAsiento) => {
      if (newIdAsiento) {
        fetchDisponibilidades(); // Recargar disponibilidades cuando el asiento cambia
      }
    },
    { immediate: true }
  );

  return { disponibilidades, fetchDisponibilidades, cambiarEstadoDisponibilidad };
});
