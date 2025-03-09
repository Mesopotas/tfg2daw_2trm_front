import { defineStore } from "pinia";

interface User {
  idUsuario: number;
  nombre: string;
  apellidos: string;
  email: string;
  contrasenia: string;
  fechaRegistro: string;
  idRol: number;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null, // Aquí almacenamos la información del usuario
  }),

  actions: {
    async fetchUserData(token: string) {
      const endpoint = "https://localhost:7179/api/Usuarios/byIdConJWT";

      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Usamos el token para autenticar la solicitud
        },
      });

      if (res.ok) {
        const userData: User = await res.json();
        this.user = userData; // Guardamos la información del usuario en el store

        // Hacer un console.log para verificar que los datos se guardan correctamente
        console.log("Datos del usuario obtenidos:", this.user);
      } else {
        throw new Error("Error al obtener los datos del usuario");
      }
    },
  },
});
