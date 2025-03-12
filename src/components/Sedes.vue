<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useSedesStore } from '../stores/SedesStore';
import TargetCenter from './TargetSedes.vue';

const router = useRouter();
const sedesStore = useSedesStore();
const isAuthenticated = ref(true); // comprobar si se ha iniciado sesion
const showLoginMessage = ref(false);

onMounted(() => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    isAuthenticated.value = false;
    showLoginMessage.value = true;

    setTimeout(() => {
      showLoginMessage.value = false;
      router.push('/login');
    }, 5000); // pone 5 segundos el mensaje, y luego lleva a login
  }
});
</script>

<template>
  <div class="sedes">
    <br><br>

    <h2 v-if="isAuthenticated" class="sedes__titulo">Sedes</h2>
    <div v-if="isAuthenticated" class="sedes__linea"></div>

    <div v-if="!isAuthenticated" class="login-message">
      Por favor, inicia sesión primero
    </div>

    <div v-if="isAuthenticated"> <!-- si se ha iniciado sesion, si q muestra las sedes para continuar con el proceso de compra-->
      <div v-if="sedesStore.sedes.length > 0" class="fila_tarjetas">
        <TargetCenter
          v-for="sede in sedesStore.sedes"
          :key="sede.idSede"
          v-bind="sede"
        />
      </div>

      <p v-else>Cargando sedes...</p>
    </div>
  </div>
</template>

<style scoped>
.sedes {
  padding-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    height: calc(100vh - 75px - 98px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px - 98px);
  }
}

.fila_tarjetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
}
</style>
