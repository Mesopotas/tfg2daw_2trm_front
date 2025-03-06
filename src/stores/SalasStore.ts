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

  //Esto crea un array que referencia al objeto que hemos creado (Sedes), el array se llamara sedes, pone ([]) Porque empezara vacio 

  const salas = ref<Sala[]>([]);

  //Llamamos al store de sedes para tener el id guardado

  const sedesStore = useSedesStore();
  
   //En esta variable, guarademos el id, number | null significa que puede ser un número o null, y empezara como null porq empieza vacio (null);

  const fetchSalas = async (idSede: number | null) => {

  //Si idSede es null vaciamos las salas

    if (!idSede) {
      salas.value = [];
      return;
    }
  
    const url = `https://localhost:7179/api/Salas/search?idsede=${idSede}`;
    console.log("Intentando obtener salas desde:", url);
  
    try {

      //Esperamos a que haga el fetch a la url

      const response = await fetch(url);

      //Si da error saldra

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      //Pasa todo a json

      const data = await response.json();
      console.log("Datos recibidos:", data);
  
      //Transformamos los datos de la API en objetos Sala con la estructura correcta, el || placeholder es porq no tenemos ninguna y asi muestra algo aunque sea

      salas.value = data.map((sala: any) => ({
        idSala: sala.idSala,
        nombre: sala.nombre,
        urL_Imagen: sala.urL_Imagen || "https://via.placeholder.com/100",
        capacidad: sala.capacidad,
        bloqueado: sala.bloqueado,
      }));

      //Si da error saldra

    } catch (error) {
      console.error("Error al obtener las salas:", error);
      salas.value = [];
    }
  };
  
  //Esto observa para que cada vez que seleccionamos una sede distinta, cambie

  watch(() => sedesStore.selectedSedeId, (newIdSede) => {
    fetchSalas(newIdSede);
  });

  return { salas, fetchSalas };
});
