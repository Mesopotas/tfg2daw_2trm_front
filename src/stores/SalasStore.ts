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

  //Esto crea un array que referencia al objeto que hemos creado (Salas), el array se llamara salas, pone ([]) Porque empezara vacio 

  const salas = ref<Sala[]>([]);

  //En esta variable, guarademos el id, number | null significa que puede ser un número o null, y empezara como null porq empieza vacio (null);

  const selectedSalaId = ref<number | null>(null);

  //Llama a store de sedes, para tener guardado el id de lo que hemos clickado guardado

  const sedesStore = useSedesStore();

  const fetchSalas = async (idSede: number | null) => {

    //Si idSede esta vacio, reincicia la lista y resetea su valor

    if (!idSede) {
      salas.value = [];
      selectedSalaId.value = null;
      return;
    }

    //Peticion Fetch

    const response = await fetch(`https://localhost:7179/api/Salas/search?idsede=${idSede}`);
    salas.value = await response.json();
  };


  //Recibe el ID de una sala y lo guarda en selectedSalaId.


  const selectSala = (id: number) => selectedSalaId.value = id;

  //Cada vez que hay un cambio en selectedSedeId llama a fetchSalas para q muestre la nueva info

  watch(() => sedesStore.selectedSedeId, fetchSalas, { immediate: true });

  //Lo que devuelve

  return { salas, selectedSalaId, selectSala, fetchSalas };
});