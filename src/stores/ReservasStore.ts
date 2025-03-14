import { defineStore } from "pinia";
import { useUserStore } from "./UserStore";

interface Reserva {
  idReserva: number;
  idUsuario: number;
  fecha: string; // campo fecha como string
  descripcion: string;
}

export const useReservasStore = defineStore("reservas", {
  state: () => ({
    reservas: [] as Reserva[], // Array con los datos de reservas
  }),

  actions: {
    async createReserva(descripcion: string, idPuestoTrabajo: number) {
      const userStore = useUserStore(); // Accedemos al store del usuario

      // Verificar si el usuario ha iniciado sesión
      if (!userStore.user) {
        throw new Error("No se ha iniciado sesión correctamente");
      }

      const token = localStorage.getItem("authToken"); // Obtener el token del localStorage

      if (!token) {
        throw new Error("Token de autenticación no encontrado");
      }

      const requestBody = {
        idUsuario: userStore.user.idUsuario, // Obtener el ID del usuario desde el store de usuario
        fecha: new Date().toISOString(), // Obtener la fecha actual en formato adecuado para el datetime
        descripcion: descripcion,
        idPuestoTrabajo: idPuestoTrabajo,
      };

      console.log("Enviando datos de reserva:", requestBody); //depuración

      const response = await fetch("https:/localhost:7179/api/Reservas", {
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
      const idReserva = data.idReserva; // Recuperamos el ID de la reserva creada

      // Guardar la reserva en el estado
      this.reservas.push({
        idReserva,
        idUsuario: userStore.user.idUsuario,
        fecha: new Date().toISOString(),
        descripcion,
      });

      return idReserva; // Retornar el id de la reserva creada
    },

    // Acción para obtener todas las reservas
    getReservas() {
      return this.reservas;
    },
  },
});
