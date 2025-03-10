import { defineStore } from "pinia";
import { useDetallesReservaStore } from "./DetallesReservaStores";
import { useReservasStore } from "./ReservasStore";

interface LineaReserva {
  IdLinea: number;
  IdReserva: number;
  IdDetalleReserva: number[];
  Precio: number;
}

export const useLineasStore = defineStore("lineas", {
  state: () => ({
    lineas: [] as LineaReserva[],
  }),

  actions: {
    async createLinea(token: string, descripcion: string, precioTotal: number, idAsiento: number) {
      const detallesReservaStore = useDetallesReservaStore();
      const reservaStore = useReservasStore();

      if (!token) {
        throw new Error("No se ha iniciado sesión");
      }

      // Crear una reserva y obtener su ID
      const idReserva = await reservaStore.createReserva(descripcion, 1); // ID puesto como ejemplo
      if (!idReserva) {
        throw new Error("No se pudo obtener el ID de la reserva.");
      }

      // Crear detalles de la reserva y obtener sus IDs
      const idDetalleReserva = await detallesReservaStore.createDetallesReserva(token, [idAsiento]);
      if (!idDetalleReserva) {
        console.warn("No se pudo crear el detalle de la reserva.");
        return;
      }

      console.log("Reserva creada con ID:", idReserva);

      // Asegurarse de que los detalles de la reserva estén disponibles
      if (detallesReservaStore.detalles.length === 0) {
        console.warn("No se encontraron detalles de reserva.");
        return;
      }

      const reserva = reservaStore.reservas[0];  // Acceder al primer elemento del arreglo
      const detalleReserva = detallesReservaStore.detalles[0]; // Tomamos el primer detalle

      // Crear línea de reserva con los IDs obtenidos
      const response = await fetch("https://localhost:7179/api/Lineas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          IdReserva: reserva.idReserva,
          IdDetalleReserva: detalleReserva.IdDetalleReserva, // Usamos el primer ID
          Descripcion: descripcion,
          PrecioTotal: precioTotal,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error al crear la línea de reserva: ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      const IdLinea = data.IdLinea;

      this.lineas.push({
        IdLinea,
        IdReserva: idReserva,
        IdDetalleReserva: idDetalleReserva,
        Precio: precioTotal,
      });

      console.log("Línea de reserva creada con éxito.");
    },
  },
});
