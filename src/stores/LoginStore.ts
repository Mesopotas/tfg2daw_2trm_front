import { defineStore } from "pinia";

// definicion de los datos usados en el proceso de Login y en relacion al backend
interface LoginData {
  email: string;
  contrasenia: string;
}

/* Para usar el token en rutas protegidas con [Authorize]:
headers: {
      "Authorization": `Bearer ${token}`,
} */

export const LoginStore = defineStore("login", {
  state: () => ({
    token: null as string | null, // inicializa el token en null (esperando recibir el token de la API)
    errorMessage: null as string | null, // guarda el mensaje de error cuando ocurra
  }),

  actions: {
    async loginUsuario(loginData: LoginData) {
        const endpointLoginPOST = "https://localhost:7179/Auth/Login"; // cambiar esta URL cuando se lance en AWS con IP fija y mas adelante con un dominio

        const res = await fetch(endpointLoginPOST, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });

        if (res.ok) { 
          // si la conexion con la API es exitosa (comprobar permisos en appsettings si falla, procolo (http o https, puerto, etc))
          const textoToken = await res.text(); // no se usa res.json() porque el endpoint cuando recibe un post correcto devuelve el token en texto plano, sin formato JSON, si se usa res.json() dará error

          this.token = textoToken; // asigna el valor del string devuelvo por el endpoint a la variable token del state

          // Guardar el token en localStorage, se usará para proximos fetch del entorno cliente para autorizar las peticiones
          localStorage.setItem("authToken", textoToken);
          // luego para los gets de la api se deberá añadir el token en el header de la peticion, de la forma -> const token = localStorage.getItem("authToken");, añadiendolo de la forma  headers: {"Authorization": `Bearer ${token}`,
          this.errorMessage = null; // si todo ha funcionado, borra todo mensaje de error q haya podido haber

          return true;
        } else {
          const errorLoginJWT = await res.text();
          this.errorMessage = errorLoginJWT || ` ${res.statusText}`; // saca el  mensaje de error de la api (correo no existe o contraseña incorrecta) EJ: Error generating the token: Email no encontrado

          return false;
        }
     
    },
  },
});
