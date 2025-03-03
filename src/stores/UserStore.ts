import { defineStore } from "pinia";

// definicion de los datos para procesar el usuario con su jwt
interface UsuarioInfo {
  idUsuario: number;
  nombre: string;
  apellidos: string;
  email: string;
  fechaRegistro: string;
  rol: string;
}

export const UserStore = defineStore("user", {
  state: () => ({
    user: null as UsuarioInfo | null, // se le asigna los valores q le lleguen de la api o null
    errorMessage: null as string | null, // guardado del mensaje de error por si algo falla
  }),

  actions: {
    // endpoint del jwt mandando el token en cabezeras
    async fetchUserData(token: string) {
      const response = await fetch("https://localhost:7179/api/Usuarios/byIdConJWT", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo obtener los datos del usuario");
      }

      const data = await response.json();
      
      this.user = {
        idUsuario: data.idUsuario,
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.email,  
        fechaRegistro: new Date(data.fechaRegistro).toLocaleDateString(), // toLocaleDateString pasa el valor de la fecha a string y le da formato legible
        rol: data.idRol.toString(),
      };

      this.errorMessage = null; // borra cualquier error que haya si el fetch se completa correctamente
    },

  },
});
