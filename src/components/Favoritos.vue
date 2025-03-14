<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Store } from 'pinia';
import { useFavoritosStore } from '../stores/FavoritosStore';

const favoritosStore = useFavoritosStore();
const favoritos = ref<any[]>([]);

const obtenerFavoritos = async () => {
    await favoritosStore.fetchFavoritos();
    favoritos.value = favoritosStore.favoritos;

};

onMounted(() => {
  obtenerFavoritos();
});

const agregarFavorito = (idSala: number) => {
  favoritosStore.addFavorito(idSala);
};

const eliminarFavorito = (idSala: number) => {
  favoritosStore.removeFavorito(idSala);
};

const esFavorito = (idSala: number) => {
  return favoritosStore.esFavorito(idSala);
};
</script>

<template>
  <div>
    <h2>Mis Favoritos</h2>
    <div v-if="favoritos.length > 0">
      <div v-for="favorito in favoritos" :key="favorito.idFavorito" class="favorito-tarjeta">
        <h3>{{ favorito.nombreSala }}</h3>
        <p><strong>Capacidad:</strong> {{ favorito.capacidad }}</p>
        <p><strong>Tipo de Sala:</strong> {{ favorito.tipoSala }}</p>
        <img :src="favorito.imagenSala" alt="Imagen de la sala" />
        <button @click="eliminarFavorito(favorito.idSala)" v-if="esFavorito(favorito.idSala)">
          Eliminar de Favoritos
        </button>
        <button @click="agregarFavorito(favorito.idSala)" v-else>
          Agregar a Favoritos
        </button>
      </div>
    </div>
    <p v-else>No tienes salas favoritas.</p>
  </div>
</template>

<style scoped>
.favorito-tarjeta {
  border: 1px solid white;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: white;
}

.favorito-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: green;
}
</style>
