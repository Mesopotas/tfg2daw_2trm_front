// Llamamos a la constante donde hemos guardado la informacion de usuarios

import { UsuarioStore } from "../stores/usuarios";

// Creamos una constante (que es una funcion flecha) que nos pedira de vuelta un nombre string y una contraseña string

export const verificarCredenciales = (email: string, contraseniaIntro: string) => {
  const usuarioStore = UsuarioStore();

  // busqueda el usuario por email
  const usuario = usuarioStore.usuarios.find((u) => (u.email) == email);

  // pendiente endpoint de la api para directamente hacer la comparacion desde ahi
  return usuario && usuario.contrasenia === contraseniaIntro;
};