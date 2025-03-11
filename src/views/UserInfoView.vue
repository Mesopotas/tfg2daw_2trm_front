<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
const errorMessage = ref(""); // si falla
const successMessage = ref(""); // si funciona
const currentPassword = ref(""); // Contraseña actual
const newPassword = ref(""); // Nueva contraseña

const fetchUserData = async () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    errorMessage.value = "No has iniciado sesión, ";
    return;
  }

  try {
    await userStore.fetchUserData(token); // obtener info del usuario
  } catch (error) {
    errorMessage.value = "Error al obtener datos del usuario.";
    console.error(error);
  }
};

// Llamar la función al montar el componente
onMounted(fetchUserData);

// cambiar contraseña (usando el endpoint con JWT)
const changePassword = async () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    errorMessage.value = "No has iniciado sesión.";
    return;
  }

  if (!currentPassword.value || !newPassword.value) {
    errorMessage.value = "Por favor, completa todos los campos.";
    return;
  }

  const idUsuario = userStore.user?.idUsuario;

  if (!idUsuario) {
    errorMessage.value = "No se pudo obtener el ID del usuario.";
    return;
  }

  try {
    const response = await fetch("https://localhost:7179/Auth/ChangePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        idUsuario: idUsuario,
        oldPassword: currentPassword.value,
        newPassword: newPassword.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al cambiar la contraseña");
    }

    successMessage.value = "Contraseña cambiada con éxito";
    currentPassword.value = ""; // limpiar info estableciendolo como null
    newPassword.value = "";
  } catch (error) {
    errorMessage.value = "Error al cambiar la contraseña. Inténtalo de nuevo.";
    console.error(error);
  }
};
</script>

<template>
  <div class="profile-container">
    <h1>Perfil del Usuario</h1>

    <div v-if="errorMessage" class="error">
      <p>{{ errorMessage }} 
        <router-link to="/login" class="link">pulsa aquí para iniciar sesión o registrarte</router-link>
      </p>
    </div>

    <div v-if="successMessage" class="success">
      <p>{{ successMessage }}</p>
    </div>

    <div v-else class="user-info">
      <p><strong>ID Usuario:</strong> {{ userStore.user?.idUsuario }}</p>
      <p><strong>Nombre:</strong> {{ userStore.user?.nombre }}</p>
      <p><strong>Apellidos:</strong> {{ userStore.user?.apellidos }}</p>
      <p><strong>Email:</strong> {{ userStore.user?.email }}</p>
      <p><strong>Fecha Registro:</strong> {{ userStore.user?.fechaRegistro }}</p>
      <p><strong>Rol:</strong> {{ userStore.user?.idRol }}</p>

      <div class="change-password">
        <h3>Cambiar Contraseña</h3>
        <div class="password-fields">
          <div class="password-field">
            <label for="newPassword">Nueva Contraseña</label>
            <input type="password" id="newPassword" v-model="newPassword" />
          </div>
          <div class="password-field">
            <label for="currentPassword">Contraseña Actual</label>
            <input type="password" id="currentPassword" v-model="currentPassword" />
          </div>
        </div>
        <button @click="changePassword">Cambiar Contraseña</button>
      </div>

      <div v-if="userStore.user?.idRol === 1" class="admin-actions">
        <h3>Opciones Administrativas</h3>
        <div class="actions">
          <!-- se añadiran los metodos ahora que conecten con el endpoint-->
          <button>Añadir Sala</button>
          <button >Borrar Sala</button>
          <button >Añadir Administrador</button>
          <button>Añadir Sede</button>
          <button >Añadir Tipo de Sala</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">.profile-container {
.profile-container {
  width: 100%;
  height: calc(100vh - 176px);  // ancho completo
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.error {
  color: red;
  text-align: center;
  font-size: 1rem;
}

.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}


.user-info {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fafafa;
  margin-top: 20px;
  font-size: 1rem;
 

  p {
    margin: 10px 0;
    color: #555;
  }

  strong {
    color: #333;
  }
}

.change-password {
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
  }

  .password-fields {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .password-field {
      display: flex;
      flex-direction: column;

      label {
        font-size: 1rem;
        color: #333;
      }

      input {
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 1rem;
      }
    }
  }
}

.admin-actions {
  margin-top: 20px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    
    button {
      padding: 10px 15px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: #45a049;
      }
    }
  }
}

@media (min-width: 768px) {
  .profile-container {
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
  }

  .user-info {
    font-size: 1.2rem;
  }

  .change-password .password-fields {
    flex-direction: row;
    gap: 20px;
  }

  .admin-actions .actions {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .admin-actions .actions button {
    width: 150px;
  }
}
}
</style>