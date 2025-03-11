<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore(); // Instancia del store
const errorMessage = ref("");

const fetchUserData = async () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    errorMessage.value = "No hay token de autenticación";
    return;
  }

  try {
    await userStore.fetchUserData(token); // Llamamos a la función para obtener los datos del usuario
  } catch (error) {
    errorMessage.value = "Error al obtener datos del usuario.";
    console.error(error);
  }
};

// Llamar la función al montar el componente
onMounted(fetchUserData);
</script>

<template>
  <div class="profile-container">
    <h1>Perfil del Usuario</h1>

    <!-- Mensaje de error si algo falla -->
    <div v-if="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- Datos del usuario -->
    <div v-else class="user-info">
      <p><strong>ID Usuario:</strong> {{ userStore.user?.idUsuario }}</p>
      <p><strong>Nombre:</strong> {{ userStore.user?.nombre }}</p>
      <p><strong>Apellidos:</strong> {{ userStore.user?.apellidos }}</p>
      <p><strong>Email:</strong> {{ userStore.user?.email }}</p>
      <p><strong>Fecha Registro:</strong> {{ userStore.user?.fechaRegistro }}</p>
      <p><strong>Rol:</strong> {{ userStore.user?.idRol }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-container {
  width: 100%;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.error {
  color: red;
}

.user-info {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
}
</style>
