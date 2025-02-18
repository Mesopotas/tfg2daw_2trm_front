// Llamamos a la constante donde hemos guardado la informacion de usuarios

import { useUsuarioStore } from "../stores/usuarios";

// Creamos una constante (que es una funcion flecha) que nos pedira de vuelta un nombre string y una contraseña string

export const verificarCredenciales = (nombreIntro: string, contraseniaIntro: string) => {

  // Llamamos a la constante que tiene guardad las informacion del fetch como usario store

  const usuarioStore = useUsuarioStore();

  // Pedimos que devuelva un nombre y contraseña que nosotros le daremos usando el find()

  return usuarioStore.usuarios.find(
    (u) => u.nombre === nombreIntro && u.contrasenia === contraseniaIntro
  ); 
};
