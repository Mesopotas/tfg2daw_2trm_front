import { defineStore } from "pinia";
import { useDetallesReservaStore } from "./DetallesReservaStores";
import { useReservasStore } from "./ReservasStore";

interface Reserva {
  IdLinea: number;
  IdReserva: number;
  IdDetalleReserva: number;
  Precio: number;
}

export const useLineasStore = defineStore("lineas", {
  state: () => ({
    reservas: [] as Reserva[],
  }),

  actions: {
    async createReserva(token: string, descripcion: string, precioTotal: number) {
      const detallesReservaStore = useDetallesReservaStore();
      const reservaStore = useReservasStore();

      const idReserva = reservaStore.reservas[0]?.IdReserva; // del array de datos de reservas, el elemento de posicion 1 (0 index) que corresponde al id generado de reserva
      const IdDetalleReserva = detallesReservaStore.detalles[0]?.IdDetalleReserva; // lo mismo que arriba con el id de detalle reserva

      if (!token) {
        throw new Error("No se ha iniciado sesión");
      }

      const response = await fetch("https://localhost:7179/api/Reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          IdReserva: idReserva,
          IdDetalleReserva: IdDetalleReserva,
          Descripcion: descripcion,
          PrecioTotal: precioTotal,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear la reserva.");
      }
    },
  },
});
