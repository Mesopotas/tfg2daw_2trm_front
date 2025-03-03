<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { UserStore } from "../stores/UserStore";

const userStore = UserStore();

const errorMessage = ref("");

const fetchUserData = async () => {
  const token = localStorage.getItem("authToken"); 
  if (!token) {
    errorMessage.value = "No hay token de autenticación"; // significará que no hay sesion iniciada
    return;
  }


    await userStore.fetchUserData(token); // se llama a la funcion del store que hace la peticion al endpoint de la api, dandole el valor del token del localStorage
 
};

fetchUserData(); // se llama a la funcion para cargar los datos

</script>

<template>
  <div class="profile-container">
      <h1>Perfil del Usuario</h1>

      <!-- elemento condicional de vue por si algo falla -->
      <div v-if="errorMessage" class="error">
          <p>{{ errorMessage }}</p>
      </div>

      <div v-else class="user-info">
          <p><strong>ID Usuario:</strong> {{ userStore.user.idUsuario }}</p>
          <p><strong>Nombre:</strong> {{ userStore.user.nombre }}</p>
          <p><strong>Apellidos:</strong> {{ userStore.user.apellidos }}</p>
          <p><strong>Email:</strong> {{ userStore.user.email }}</p>
          <p><strong>Fecha Registro:</strong> {{ userStore.user.fechaRegistro }}</p>
          <p><strong>Rol:</strong> {{ userStore.user.rol }}</p>
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