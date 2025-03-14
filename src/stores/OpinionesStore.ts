import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Opiniones {
    idOpinionAsiento: number;
    opinion: string;
    fechaOpinion: string;
    idPuestoTrabajo: number;
    idUsuario: number;
}

export const useOpinionesStore = defineStore('opiniones', () => {
  const opiniones = ref<Opiniones[]>([]);

  const fetchOpiniones = async () => {
    const response = await fetch('https://localhost:7179/api/OpinionesAsientos');
    opiniones.value = await response.json();
  };

  const addOpiniones = async (opiniones: Omit<Opiniones, 'idOpinionAsiento'>) => {
    await fetch('https://localhost:7179/api/OpinionesAsientos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(opiniones),
    });

    await fetchOpiniones();
  };

  const updateOpiniones = async (id: number, updateOpiniones: Partial<Opiniones>) => {
    await fetch(`https://localhost:7179/api/OpinionesAsientos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateOpiniones),
    });

    await fetchOpiniones();
  };

  const deleteOpiniones = async (id: number) => {
    await fetch(`https://localhost:7179/api/OpinionesAsientos/${id}`, {
      method: 'DELETE',
    });
  
    await fetchOpiniones(); // Recargar la lista después de eliminar
  };
  
  return { opiniones, fetchOpiniones, addOpiniones, updateOpiniones, deleteOpiniones };
  
});
