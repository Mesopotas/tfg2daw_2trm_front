import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useSedesStore } from './SedesStore';

interface Sala {
  idSala: number;
  nombre: string;
  urL_Imagen: string;
  capacidad: number;
  bloqueado: boolean;
}

export const useSalasStore = defineStore('salas', () => {
  const salas = ref<Sala[]>([]);
  const sedesStore = useSedesStore();

  const fetchSalas = async (idSede: number | null) => {
    if (!idSede) {
      salas.value = [];
      return;
    }

    try {
      const response = await fetch(`https://localhost:7179/api/Salas/search?idsede=${idSede}`);
      const data = await response.json();

      salas.value = data.map((sala: any) => ({
        idSala: sala.idSala,
        nombre: sala.nombre,
        urL_Imagen: sala.urL_Imagen || "https://via.placeholder.com/100",
        capacidad: sala.capacidad,
        bloqueado: sala.bloqueado,
      }));
    } catch (error) {
      console.error("Error al obtener las salas:", error);
      salas.value = []; 
    }
  };

  watch(() => sedesStore.selectedSedeId, (newIdSede) => {
    fetchSalas(newIdSede);
  });

  return { salas, fetchSalas };
});
