<script setup>
import { useAsientoStore } from '../stores/AsientosStore';
import { RouterLink } from 'vue-router';

defineProps({
  puestos: Array,
  zonas: Array
});

const asientoStore = useAsientoStore();
</script>

<template>
  <div class="disposicion-sala">
    <h2>Disposición de la Sala</h2>

    <div v-for="zona in zonas" :key="zona.idZonaTrabajo" class="zona-container">
      <h3>Zona: {{ zona.descripcion }}</h3>
      <div class="tabla-wrapper">
        <table class="tabla-zona">
          <thead>
            <tr>
              <th>Asiento</th>
              <th>Mesa</th>
            </tr>
          </thead>

          <tbody>
            <tr 
              v-for="puesto in puestos" 
              :key="puesto.idPuestoTrabajo" 
              :class="{ seleccionado: asientoStore.asientoSeleccionado === puesto.idPuestoTrabajo }"
            >
              <td>
                <RouterLink 
                  :to="`/disponibilidades`" 
                  class="asiento-link"
                  @click="asientoStore.seleccionarAsiento(puesto.idPuestoTrabajo)"
                >
                  {{ puesto.numeroAsiento }}
                </RouterLink>
              </td>
              <td>{{ puesto.codigoMesa }}</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>

    <div v-if="asientoStore.asientoSeleccionado" class="info-seleccion">
    </div>
  </div>
</template>

<style scoped>
.disposicion-sala {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.zona-container {
  margin-bottom: 20px;
  width: 80%;
  max-width: 300px;
}

h3 {
  font-size: 16px;
  text-align: center;
}

.tabla-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.tabla-zona {
  width: 100%;
  max-width: 250px;
  border-collapse: collapse;
  margin-top: 10px;
  font-size: 12px;
}

.tabla-zona th,
.tabla-zona td {
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
}

.tabla-zona th {
  background: #333;
  color: white;
}

.asiento-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* Efecto hover para destacar la fila */
.tabla-zona tr:hover {
  background-color: #f0f0f0;
}

/* Efecto hover en el enlace */
.asiento-link:hover {
  color: #007bff;
  font-weight: bold;
}

.seleccionado {
  background-color: #ffa500;
  color: white;
}

.info-seleccion {
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
}
</style>
