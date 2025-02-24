import { defineStore } from "pinia";

// Definir la estructura del usuario
interface Usuario {
  nombre: string;
  apellidos: string;
  email: string;
  contrasenia: string;
  idRol: number;
}

export const UsuarioStore = defineStore("usuario", {
  state: () => ({
    usuarios: [] as Usuario[], // Definir tipo para evitar errores
  }),

  actions: {
    // Obtener usuarios (GET)
    async fetchUsuarios() {
      const res = await fetch("https://localhost:7179/api/Usuarios");
      this.usuarios = await res.json();
      console.log("Usuarios:", this.usuarios);
    },

    // Crear usuario (POST)
    async crearUsuario(usuario: Usuario) {
      const res = await fetch("https://localhost:7179/api/Usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });

      const nuevoUsuario = await res.json();
      this.usuarios.push(nuevoUsuario); 
      return nuevoUsuario;
    },
  },
});
