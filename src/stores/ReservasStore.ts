import { defineStore } from "pinia";
import { UserStore } from "./UserStore"; // Importamos la store de usuario

interface Reserva {
  IdReserva: number;
  IdUsuario: number;
  Descripcion: string;
}

export const useReservasStore = defineStore("reservas", {
  state: () => ({
    reservas: [] as Reserva[], // array con los datos definidos en la interfaz
  }),

  actions: {
    async createReserva(token: string, descripcion: string, idPuestoTrabajo: number) {
      const userStore = UserStore();
    

      const idUsuario = userStore.user?.idUsuario;
    
      if (!idUsuario) {
        throw new Error("No se ha iniciado sesión correctamente");
      }
    
      const requestBody = {
        idUsuario: idUsuario,
        descripcion: descripcion,
        idPuestoTrabajo: idPuestoTrabajo
      };
    
      console.log("Enviando datos de reserva:", requestBody);
    
      const response = await fetch("https://localhost:7179/api/Reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
    
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error al crear la reserva: ${response.status} - ${errorData}`);
      }
    
      const data = await response.json();
      const idReserva = data.idReserva; // para recuperar el id de la reserva que se crea
    
      return idReserva;
    }
    
  },
});