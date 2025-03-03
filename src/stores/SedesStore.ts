import { defineStore } from 'pinia';

interface Sede {
  idSede: number;
  pais: string;
  ciudad: string;
  direccion: string;
  codigoPostal: string;
  planta: string;
  observaciones?: string;
}

export const useSedesStore = defineStore('sedes', {
  state: () => ({
    sedes: [] as Sede[],
  }),

  actions: {
    async fetchSedes() {
      try {
        const response = await fetch('https://localhost:7179/api/Sedes');
        const data = await response.json();

        // Verificamos que la API realmente devuelve un array
        if (Array.isArray(data)) {
          this.sedes = data;
        } else {
          console.error("La API no devolvió un array:", data);
        }
      } catch (error) {
        console.error("Error al obtener las sedes:", error);
      }
    }
  }
});
