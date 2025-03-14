<script setup lang="ts">
import { ref } from 'vue';
import { useOpinionesStore } from '../stores/OpinionesStore';

const opinionesStore = useOpinionesStore();

const idEditando = ref<number | null>(null);
const opinion = ref('');

const guardarEdicion = async () => {
  if (idEditando.value !== null) {
    await opinionesStore.updateOpiniones(idEditando.value, {
        opinion: opinion.value
    });
  }else console.log("no hay id")

  resetFormulario();
};

const resetFormulario = () => {
  idEditando.value = null;
  opinion.value = '';
};
</script>

<template>
  <div class="contenedor">
    <h2>Editar Opinion</h2>
    <form @submit.prevent="guardarEdicion" class="formulario">
      <input v-model.number="idEditando" type="number" placeholder="ID de la Opinion" required />
      <input v-model="opinion" placeholder="Nueva Opinion" required />
      <button type="submit">Guardar Cambios</button>
      <button type="button" class="cancelar" @click="resetFormulario">Cancelar</button>
    </form>
  </div>
</template>

<style scoped>
.contenedor {
  max-width: 600px;
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

button {
  background: #ffc107;
  color: black;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #e0a800;
}

.cancelar {
  background: #dc3545;
  color: white;
}

.cancelar:hover {
  background: #c82333;
}
</style>
