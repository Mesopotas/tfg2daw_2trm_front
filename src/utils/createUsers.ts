// Llamamos a la constante donde hemos guardado la funcion de POST

import { UsuarioStore } from "../stores/usuarios"; 

// Creamos una constante (que es una funcion flecha) que nos pedira de vuelta un nombre string y una contraseña string etc..

export const registerUser = async (nombre: string, apellidos: string, email: string, contrasenia: string, idRol: number) => {
  const usuarioStore = UsuarioStore(); 

  return await usuarioStore.crearUsuario({ nombre, apellidos, email, contrasenia, idRol });
};
