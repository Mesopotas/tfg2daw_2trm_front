<script setup lang="ts">
import { onMounted } from 'vue';
import { useSalasStore } from '../stores/SalasStore';

const salasStore = useSalasStore();
const idSede = 1; // Puedes cambiarlo dinámicamente

onMounted(() => {
  salasStore.fetchSalas(idSede);
});
</script>

<template>
  <div class="salas">
    <h2 class="salas__titulo">Salas Disponibles</h2>
    
    <div v-if="salasStore.salas.length > 0" class="salas__contenedor">
      <div v-for="sala in salasStore.salas" :key="sala.idSala" class="sala">
        <h3>{{ sala.nombre }}</h3>

        <h4>Zonas de Trabajo</h4>
        <ul>
          <li v-for="zona in sala.zona" :key="zona.idZonaTrabajo">
            {{ zona.descripcion }}
          </li>
        </ul>

        <h4>Puestos de Trabajo</h4>
        <ul>
          <li v-for="puesto in sala.puestos" :key="puesto.idPuestoTrabajo">
            <p><strong>Mesa:</strong> {{ puesto.codigoMesa }}</p>
            <p><strong>Disponible:</strong> {{ puesto.disponible ? "Sí" : "No" }}</p>
          </li>
        </ul>
      </div>
    </div>
    
    <p v-else>Cargando salas...</p>
  </div>
</template>

<style scoped>
.salas {
  padding: 20px;
  background-color: #f3e7dc;
  text-align: center;
}

.salas__titulo {
  font-size: 24px;
  font-weight: bold;
}

.salas__contenedor {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.sala {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
}

h3 {
  margin-bottom: 8px;
}

h4 {
  margin-top: 12px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #eee;
  padding: 5px;
  margin: 3px 0;
  border-radius: 4px;
}
</style>
