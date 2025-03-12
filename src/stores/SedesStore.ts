import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Sede {
  idSede: number;
  pais: string;
  ciudad: string;
  direccion: string;
  codigoPostal: string;
  planta: string;
  observaciones?: string;
}

export const useSedesStore = defineStore('sedes', () => {

  //Esto crea un array que referencia al objeto que hemos creado (Sedes), el array se llamara sedes, pone ([]) Porque empezara vacio 

  const sedes = ref<Sede[]>([]);

  //En esta variable, guarademos el id, number | null significa que puede ser un número o null, y empezara como null porq empieza vacio (null);

  const selectedSedeId = ref<number | null>(null);

  //Obtener todas las sedes, un fetch normal

  const fetchSedes = async () => {
    const response = await fetch('https://laoficinaapi.retocsv.es/api/Sedes');
    sedes.value = await response.json();
  };

  //Esta sera la funcion que guarde el idSede, pidiendo un id, y el tipo (numbre)

  const selectSede = (id: number) => {

    //Hace que el valor del array que hemos creado creado sea el id que pide la funcion

    selectedSedeId.value = id; 
  };

  fetchSedes();

  return { sedes, selectedSedeId, selectSede }; 
});
