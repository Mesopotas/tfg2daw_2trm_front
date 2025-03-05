<script setup lang="ts">
import { useSedesStore } from '../stores/SedesStore';
import { RouterLink } from 'vue-router';

const sedesStore = useSedesStore();

//Creamos un prop que pilla la plantilla de lo que devuelve el array

const props = defineProps<{
  idSede?: number;
  pais?: string;
  ciudad?: string;
  direccion?: string;
  codigoPostal?: string;
  planta?: string;
  observaciones?: string;
}>();

// Creamos una funcion flecha q llamaremos con el oneClick

const handleClick = () => {

//Comprueba que existe el idsede y si existe hace una llamada a la funcion que pide el id, la cual sera el idSede que hemos definido en el props

  if (props.idSede) {
    sedesStore.selectSede(props.idSede);
  }
};
</script>

<template>
  <RouterLink v-if="idSede" to="/salas" class="tarjeta-link" @click="handleClick">
    <div class="tarjeta">
      <h3>{{ ciudad }}, {{ pais }}</h3>
      <p><strong>Dirección:</strong> {{ direccion }}</p>
      <p><strong>Código Postal:</strong> {{ codigoPostal }}</p>
      <p><strong>Planta:</strong> {{ planta }}</p>
      <p v-if="observaciones"><strong>Observaciones:</strong> {{ observaciones }}</p>
    </div>
  </RouterLink>
</template>




<style lang="scss" scoped>
.tarjeta-link {
  text-decoration: none; // 🔹 Quita el subrayado del enlace
  color: inherit; // 🔹 Mantiene el color original del texto
  display: block; // 🔹 Hace que toda la tarjeta sea clickeable
  width: 100%;
  max-width: 280px;

  &:hover {
    text-decoration: none;
  }
}

.tarjeta {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 4px 0;
    font-size: 14px;
    color: #666;
  }
}

/* 📱 Estilos Responsivos */
@media (max-width: 768px) {
  .tarjeta-link {
    width: 90%;
    max-width: 300px;
  }
}

@media (min-width: 768px) {
  .tarjeta-link {
    width: calc(50% - 20px);
  }
}

@media (min-width: 1024px) {
  .tarjeta-link {
    width: calc(25% - 20px);
  }
}
</style>
