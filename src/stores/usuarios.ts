import { defineStore } from "pinia";

//Creamos la constante useUsuarioStore en el cual se va a guardar toda la informacion del endPoint

export const useUsuarioStore = defineStore("usuario", {
  state: () => ({
    usuarios: [], 
  }),
  actions: {
    async fetchUsuarios() {
      const res = await fetch("https://localhost:7179/api/Usuarios");
      this.usuarios = await res.json();
      console.log("Usuarios:", this.usuarios);
    },
  },
});
