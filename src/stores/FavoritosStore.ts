import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useUserStore } from './UserStore';

interface Favorito {
  idFavorito: number;
  idUsuario: number;
  idSala: number;
}

export const useFavoritosStore = defineStore('favoritos', () => {
  const favoritos = ref<Favorito[]>([]);
  const userStore = useUserStore();

  //   ID del usuario de su store
  const IdUsuario = userStore.user?.idUsuario;

  // Cargar favoritos
  const fetchFavoritos = async () => {
    if (!IdUsuario) return; // Si no se esta logeado, no se hace nada
    const response = await fetch(`https://localhost:7179/api/Favoritos/${IdUsuario}`);
    favoritos.value = await response.json();
  };

  // Añadir un favorito
  const addFavorito = async (idSala: number) => {
    if (!IdUsuario) return; // Si no se esta logeado, no se hace nada
    const response = await fetch("https://localhost:7179/api/Favoritos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idUsuario: IdUsuario, idSala }),
    });
    const nuevoFavorito = await response.json();
    favoritos.value.push(nuevoFavorito);
  };

  // Eliminar un favorito
  const removeFavorito = async (idSala: number) => {
    if (!IdUsuario) return; // Si no se esta logeado, no se hace nada
    const response = await fetch(`https://localhost:7179/api/Favoritos/${IdUsuario}/${idSala}`, {
      method: "DELETE",
    });
    favoritos.value = favoritos.value.filter(fav => fav.idSala !== idSala);
  };

  // Verificar si una sala esta en favoritos
  const esFavorito = (idSala: number) => {
    return favoritos.value.some(fav => fav.idSala === idSala);
  };

  return { favoritos, fetchFavoritos, addFavorito, removeFavorito, esFavorito };
});
