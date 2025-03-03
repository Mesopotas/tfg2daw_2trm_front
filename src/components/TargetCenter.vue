<script setup lang="ts">
defineProps<{
  idSede?: number;
  pais?: string;
  ciudad?: string;
  direccion?: string;
  codigoPostal?: string;
  planta?: string;
  observaciones?: string;
}>();
</script>

<template>
  <div v-if="idSede" class="tarjeta">
    <h3>{{ ciudad }}, {{ pais }}</h3>
    <p><strong>Dirección:</strong> {{ direccion }}</p>
    <p><strong>Código Postal:</strong> {{ codigoPostal }}</p>
    <p><strong>Planta:</strong> {{ planta }}</p>
  </div>
</template>

<style>

.centros {
  position: relative;
  margin: 0;
  padding: 20px;
  background-color: #f3e7dc;
  text-align: center;
  overflow: auto;

  &__titulo {
    font-size: 24px;
    font-weight: bold;
    font-family: "Arial Black", sans-serif;
    margin-bottom: 10px;
  }

  &__linea {
    width: 50%;
    max-width: 300px;
    height: 2px;
    background-color: black;
    margin: 5px auto 20px auto;
  }

  .fila_tarjetas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-top: 20px;
  }
}

/* Estilos para cada tarjeta */
.tarjeta {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 280px;
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

/* 📱 Móvil: 1 tarjeta por fila */
@media (max-width: 768px) {
  .fila_tarjetas {
    justify-content: center;
  }

  .tarjeta {
    width: 90%;
    max-width: 300px;
  }
}

/* 📲 Tablet: 2 tarjetas por fila */
@media (min-width: 768px) {
  .fila_tarjetas {
    justify-content: space-around;
  }

  .tarjeta {
    width: calc(50% - 20px);
  }
}

/* 🖥️ Escritorio: 4 tarjetas por fila */
@media (min-width: 1024px) {


  .fila_tarjetas {
    justify-content: space-between;
  }

  .tarjeta {
    width: calc(25% - 20px);
  }
}


</style>