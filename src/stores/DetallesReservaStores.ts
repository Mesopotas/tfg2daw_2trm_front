import { defineStore } from "pinia";

interface DetallesReserva {
    IdDetalleReserva : number;
  IdPuestoTrabajo: number;
  fechaCreacion: string;
}

export const useDetallesReservaStore = defineStore("detallesReserva", {
  state: () => ({
    detalles: [] as DetallesReserva[]
  }),

  actions: {
    async createDetallesReserva(token: string, puestos: number[]) {
   
        this.detalles = [];

        for (const IdPuestoTrabajo of puestos)/* recorre los puestos en caso de haber mas de uno, por lo cual, si se eligen por ejemplo 4 asientos, hará 4 posts, 1 por cada asiento */ 
        {
          const response = await fetch("https://localhost:7179/api/DetallesReserva", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ IdPuestoTrabajo  }),
          });

          if (!response.ok) {
            throw new Error(`Error al crear detalle de reserva para el puesto con el ID ${IdPuestoTrabajo }`);
          }

        }

    
    },
  },
});
