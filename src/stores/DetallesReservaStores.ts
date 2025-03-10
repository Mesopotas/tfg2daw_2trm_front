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
      this.detalles = []; // Limpiar la lista de detalles antes de agregar nuevos

      const idDetalleReserva: number[] = []; // Array para almacenar los IdDetalleReserva generados

      for (const IdPuestoTrabajo of puestos) {
        const descripcion = `Compra al asiento de id ${IdPuestoTrabajo}`;
        // Datos que se enviarán en el cuerpo de la solicitud POST
        const payload = {
          IdPuestoTrabajo,
          descripcion, // El backend completa el resto de los datos
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

        // Almacenar el detalle en el estado
        this.detalles.push({
          IdDetalleReserva,
          IdPuestoTrabajo,
          fechaCreacion: new Date().toISOString(),
        });

        // Agregar el IdDetalleReserva al array para retornarlo al final
        idDetalleReserva.push(IdDetalleReserva);
      }

      // Retornar todos los IdDetalleReserva generados
      return idDetalleReserva;
    },
  },
});
