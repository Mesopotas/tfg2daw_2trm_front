<script setup lang="ts">
import { ref } from 'vue';
import { useOpinionesStore } from '../stores/OpinionesStore';

const autoriasStore = useOpinionesStore();
const idEliminar = ref<number | null>(null);

const eliminarOpinion = async () => {
  if (idEliminar.value !== null) {
    await autoriasStore.deleteOpiniones(idEliminar.value);
    idEliminar.value = null;
  }
};
</script>

<template>
  <div class="contenedor">
    <h2>Eliminar Comentario</h2>
    <form @submit.prevent="eliminarOpinion" class="formulario">
      <input v-model.number="idEliminar" type="number" placeholder="ID de la autoría" required />
      <button type="submit" class="eliminar">Eliminar</button>
    </form>
  </div>
</template>

<style scoped>
.contenedor {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  text-align: center;
}

h2 {
  color: #222;
  font-size: 20px;
  margin-bottom: 15px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

input, button {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.eliminar {
  background: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
}

button.eliminar:hover {
  background: #c82333;
}
</style>
