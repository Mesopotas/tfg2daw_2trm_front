import { defineStore } from "pinia";
import { useUserStore } from "./UserStore"; // Asegúrate de importar el store de usuario

interface LoginData {
  email: string;
  contrasenia: string;
}

export const LoginStore = defineStore("login", {
  state: () => ({
    token: null as string | null,
    errorMessage: null as string | null,
  }),

  actions: {
    async loginUsuario(loginData: LoginData) {
      const endpointLoginPOST = "https://localhost:7179/Auth/Login";

      const res = await fetch(endpointLoginPOST, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (res.ok) {
        const textoToken = await res.text(); // Se obtiene el token como texto plano

        this.token = textoToken;
        localStorage.setItem("authToken", textoToken);

        // Llamar a la acción del store de usuario para obtener los datos
        const userStore = useUserStore();
        await userStore.fetchUserData(textoToken); // Pasamos el token para obtener los datos del usuario

        this.errorMessage = null;

        // Verificar que los datos se guardaron correctamente
        console.log("Datos del usuario:", userStore.user); // Console log de los datos del usuario

        return true;
      } else {
        const errorLoginJWT = await res.text();
        this.errorMessage = errorLoginJWT || ` ${res.statusText}`;
        return false;
      }
    },
  },
});
