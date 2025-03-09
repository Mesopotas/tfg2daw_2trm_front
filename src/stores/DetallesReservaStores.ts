import { defineStore } from "pinia";

interface DetallesReserva {
  IdDetalleReserva: number;
  IdPuestoTrabajo: number;
  fechaCreacion: string;
}

export const useDetallesReservaStore = defineStore("detallesReserva", {
  state: () => ({
    detalles: [] as DetallesReserva[],
  }),

  actions: {
    async createDetallesReserva(token: string, puestos: number[]) {
      this.detalles = [];

      for (const IdPuestoTrabajo of puestos) {
        const descripcion = `Compra al asiento de id ${IdPuestoTrabajo}`;
        // info que se va a mandar en el cuerpo de la peticion POST
        const payload = {
          IdPuestoTrabajo,
          descripcion, // el resto de data la autocompleta el backend
        };


        const response = await fetch("https://localhost:7179/api/DetallesReservas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(
            `Error al crear detalle de reserva para el puesto con el ID ${IdPuestoTrabajo}`
          );
        }

        const data = await response.json();
        const IdDetalleReserva = data.IdDetalleReserva;

        return IdDetalleReserva;
      }
    },
  },
});