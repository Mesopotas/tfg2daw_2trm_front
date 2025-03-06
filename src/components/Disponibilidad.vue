<script setup>
import { useAsientoStore } from '@/stores/AsientosStore';
import { useDisponibilidadesStore } from '@/stores/DisponibilidadesStore';

const asientoStore = useAsientoStore();
const disponibilidadesStore = useDisponibilidadesStore();
</script>

<template>
  <div class="disponibilidad">
    <h2>Disponibilidad del Asiento</h2>

    <!-- Mostrar el número del asiento seleccionado -->
    <p v-if="asientoStore.asientoSeleccionado">
      Asiento seleccionado: {{ asientoStore.asientoSeleccionado }}
    </p>
    <p v-else>
      No hay asiento seleccionado.
    </p>

    <div class="tabla-wrapper" v-if="disponibilidadesStore.disponibilidades.length > 0">
      <table class="tabla-disponibilidad">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="disponibilidad in disponibilidadesStore.disponibilidades" :key="disponibilidad.idDisponibilidad">
            <td>{{ disponibilidad.fecha }}</td>
            <td :class="{ disponible: disponibilidad.estado, ocupado: !disponibilidad.estado }">
              {{ disponibilidad.estado ? 'Disponible' : 'No disponible' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else>No hay disponibilidades para este asiento.</p>
  </div>
</template>

<style scoped>
.disponibilidad {
  padding: 20px;
  text-align: center;
}

.tabla-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.tabla-disponibilidad {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin-top: 10px;
  font-size: 14px;
}

.tabla-disponibilidad th,
.tabla-disponibilidad td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.tabla-disponibilidad th {
  background: #333;
  color: white;
}

.disponible {
  background-color: lightgreen;
}

.ocupado {
  background-color: lightcoral;
}

.sin-seleccion {
  font-size: 16px;
  color: red;
}
</style>
