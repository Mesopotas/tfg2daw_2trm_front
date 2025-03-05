import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useSedesStore } from '../stores/SedesStore';
const sedesStore = useSedesStore();

interface Zona {
  idZonaTrabajo: number;
  descripcion: string;
}

interface PuestoTrabajo {
  idPuestoTrabajo: number;
  codigoMesa: number;
  disponible: boolean;
}

interface Sala {
  idSala: number;
  nombre: string;
  zona: Zona[];
  puestos: PuestoTrabajo[];
}

export const useSalasStore = defineStore('salas', () => {
  const salas = ref<Sala[]>([]);

  const fetchSalas = async (idSede: number) => {
    const response = await fetch(`https://localhost:7179/api/Salas/search?idsede=${idSede}`);
    const data = await response.json();

    // 🔹 Extraer solo la información necesaria
    salas.value = data.map((sala: any) => ({
      idSala: sala.idSala,
      nombre: sala.nombre,
      zona: sala.zona.map((zona: any) => ({
        idZonaTrabajo: zona.idZonaTrabajo,
        descripcion: zona.descripcion || "Sin descripción",
      })),
      puestos: sala.puestos.map((puesto: any) => ({
        idPuestoTrabajo: puesto.idPuestoTrabajo,
        codigoMesa: puesto.codigoMesa,
        disponible: puesto.disponible,
      })),
    }));
  };

  return { salas, fetchSalas };
});

