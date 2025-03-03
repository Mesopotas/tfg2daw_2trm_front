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
  const sedes = ref<Sede[]>([]);

  const fetchSedes = async () => {
    const response = await fetch('https://localhost:7179/api/Sedes');
    sedes.value = await response.json();
  };

  fetchSedes(); // Se ejecuta automáticamente

  return { sedes };
});
