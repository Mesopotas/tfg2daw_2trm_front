<script setup lang="ts">
import { onMounted, defineEmits } from 'vue';
import { useOpinionesStore } from '../stores/OpinionesStore.ts';

const opinionesStore = useOpinionesStore();
const emit = defineEmits(['editar']);

onMounted(opinionesStore.fetchOpiniones);
</script>

<template>
  <div class="contenedor">
    <h2>Lista de Opiniones</h2>
    <div class="tabla-container">
      <table v-if="opinionesStore.opiniones.length" class="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Opinión</th>
            <th>Fecha</th>
            <th>Puesto</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="opiniones in opinionesStore.opiniones" :key="opiniones.idOpinionAsiento">
            <td>{{ opiniones.idOpinionAsiento }}</td>
            <td>{{ opiniones.opinion }}</td>
            <td>{{ opiniones.fechaOpinion }}</td>
            <td>{{ opiniones.idPuestoTrabajo }}</td>
            <td>{{ opiniones.idUsuario }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* 📌 Contenedor General */
.contenedor {
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  padding: 15px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
}

/* 📌 Encabezado */
h2 {
  color: #333;
  font-size: 20px;
  margin-bottom: 15px;
}

/* 📌 Contenedor de la tabla con scroll en móviles */
.tabla-container {
  width: 100%;
  overflow-x: auto;
}

/* 📌 Tabla */
.tabla {
  width: 100%;
  border-collapse: collapse;
  min-width: 500px; /* Evita que se encoja demasiado en móviles */
}

/* 📌 Encabezados */
th {
  background: #007bff;
  color: white;
  padding: 12px;
  text-align: left;
  font-size: 14px;
}

/* 📌 Celdas */
td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
}

/* 📌 Filas alternas */
tr:nth-child(even) {
  background: #f9f9f9;
}

/* 📌 Botones */
button {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
}

button:hover {
  background: #0056b3;
}

/* 📌 Estilos Responsive */
@media (max-width: 600px) {
  .contenedor {
    padding: 10px;
  }

  .tabla {
    min-width: 100%;
  }

  th, td {
    padding: 8px;
    font-size: 12px;
  }

  button {
    padding: 6px 8px;
    font-size: 12px;
  }
}

@media (max-width: 360px) {
  h2 {
    font-size: 18px;
  }

  th, td {
    font-size: 11px;
    padding: 6px;
  }

  button {
    padding: 5px 7px;
    font-size: 11px;
  }
}
</style>
