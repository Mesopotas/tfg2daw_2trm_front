<script setup>
import { ref } from 'vue';
import { useAsientoStore } from '@/stores/AsientosStore';
import { useDisponibilidadesStore } from '@/stores/DisponibilidadesStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const asientoStore = useAsientoStore();
const disponibilidadesStore = useDisponibilidadesStore();
const fechaSeleccionada = ref(null);

const seleccionarFecha = (fecha, estado) => {
  if (estado) { /* verificar si esta disponible la fecha, es decir si estado  = true*/
    fechaSeleccionada.value = fecha;
  }
};

const comprar = async () => {
  if (!fechaSeleccionada.value) {
    alert('Selecciona una fecha primero.');
    return;
  }
  
  await disponibilidadesStore.cambiarEstadoDisponibilidad(fechaSeleccionada.value);
  alert('Compra realizada correctamente.');
  router.push(`/info-pedido?idReserva=${asientoStore.asientoSeleccionado}&idDetalleReserva=${fechaSeleccionada.value}`);

  fechaSeleccionada.value = null; // reseteo
};
</script>

<template>
  <div class="disponibilidad">
    <h2>Disponibilidad del Asiento</h2>

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
          <tr 
            v-for="disponibilidad in disponibilidadesStore.disponibilidades" 
            :key="disponibilidad.idDisponibilidad"
            :class="{ seleccionado: fechaSeleccionada === disponibilidad.fecha, clickeable: disponibilidad.estado }" 
            @click="seleccionarFecha(disponibilidad.fecha, disponibilidad.estado)"
          >
            <td>{{ disponibilidad.fecha }}/03/2025</td>
            <td :class="{ disponible: disponibilidad.estado, ocupado: !disponibilidad.estado }">
              {{ disponibilidad.estado ? 'Disponible' : 'No disponible' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else>No hay disponibilidades para este asiento.</p>

    <button @click="comprar" :disabled="!fechaSeleccionada" class="boton-comprar">
      Comprar
    </button>
  </div>
</template>

<style scoped>
.disponibilidad {
  min-height: calc(100vh - 123px - 98px);
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

.seleccionado {
  background-color: yellow;
}

.clickeable {
  cursor: pointer;
}

.tabla-disponibilidad tr:not(.clickeable) {  /* si no es clickable, no pasará nada al pasar el cursor por encima, tb se le baja un poco opacidad */
  pointer-events: none;
  opacity: 0.4;
}

.boton-comprar {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.boton-comprar:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
