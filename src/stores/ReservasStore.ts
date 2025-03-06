import { defineStore } from "pinia";
import { UserStore } from "./UserStore"; // Importamos la store de usuario

interface Reserva {
  IdReserva: number;
  IdUsuario: number;
  Fecha: string;
  Descripcion: string;
  PrecioTotal: number;
}

export const useReservasStore = defineStore("reservas", {
  state: () => ({
    reservas: [] as Reserva[], // array con los datos definidos en la interfaz
  }),

  actions: {
    async createReserva(token: string, descripcion: string, precioTotal: number) {
      const userStore = UserStore();
      const idUsuario = userStore.user?.idUsuario; // se le asigna el id de usuario previamente almacenado en su store

      if (!idUsuario) {
        throw new Error("No se ha iniciado sesion");
      }

      const response = await fetch("https://localhost:7179/api/Reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          IdUsuario: idUsuario,
          Fecha: new Date().toISOString(),
          Descripcion: descripcion,
          PrecioTotal: precioTotal,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear la reserva.");
      }

      const data = await response.json();
      const idReserva = data.idReserva; // para recuperar el id de la reserva que se crea

      return idReserva;   
    }
    },
  },
);
