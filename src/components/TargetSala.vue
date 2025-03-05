<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  idSala?: number;
  nombre?: string;
  urL_Imagen?: string;
  capacidad?: number;
  bloqueado?: boolean;
}>();
</script>

<template>
  <RouterLink v-if="idSala" to="/puestos" class="tarjeta-link">
    <div class="tarjeta">
      <img :src="urL_Imagen || 'https://via.placeholder.com/100'" alt="Imagen de la Sala" class="tarjeta__imagen">
      <div class="tarjeta__contenido">
        <h3>{{ nombre }}</h3>
        <p><strong>Capacidad:</strong> {{ capacidad }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.tarjeta-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  max-width: 320px;

  &:hover {
    text-decoration: none;
  }
}

.tarjeta {
  background: white;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  &__imagen {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 12px;
  }

  &__contenido {
    flex: 1;
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
