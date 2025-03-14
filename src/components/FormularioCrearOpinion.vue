<script setup lang="ts">
import { ref } from 'vue';
import { useOpinionesStore } from '../stores/OpinionesStore';

const opinionesStore = useOpinionesStore();

const opinion = ref('');
const idPuestoTrabajo = ref();
const idUsuario = ref();

const enviarOpinion = async () => {
  await opinionesStore.addOpiniones({
    opinion: opinion.value,
    idPuestoTrabajo: idPuestoTrabajo.value,
    idUsuario: idUsuario.value,
    fechaOpinion: new Date().toISOString(),
  });

  resetFormulario();
};

const resetFormulario = () => {
    opinion.value = '';
    idPuestoTrabajo.value = '';
    idUsuario.value = '';
};
</script>

<template>
  <div class="contenedor">
    <h2>Agregar Nueva Opinion</h2>
    <form @submit.prevent="enviarOpinion" class="formulario">
      <input v-model="opinion" placeholder="Opinion" required />
      <input v-model="idPuestoTrabajo" placeholder="Puesto de Trabajo" required />
      <input v-model="idUsuario" placeholder="Id del Usuario" required />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>
<style scoped>
.contenedor {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
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
  background: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #218838;
}
</style>
