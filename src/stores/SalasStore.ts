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
  const selectedSalaId = ref<number | null>(null);
  const sedesStore = useSedesStore(); // 🔹 Importamos el store de sedes

  // 🔹 Función para obtener las salas de una sede
  const fetchSalas = async (idSede: number | null) => {
    if (!idSede) {
      console.warn("⚠️ No se ha seleccionado ninguna sede.");
      salas.value = [];
      selectedSalaId.value = null; // 🔹 Reiniciar sala seleccionada si cambia la sede
      return;
    }

    const url = `https://localhost:7179/api/Salas/search?idsede=${idSede}`;
    console.log("🌍 Intentando obtener salas desde:", url);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`❌ Error HTTP: ${response.status}`);

      const data = await response.json();
      if (!data || !Array.isArray(data)) {
        throw new Error("⚠️ Respuesta inesperada de la API.");
      }

      salas.value = data.map((sala: any) => ({
        idSala: sala.idSala,
        nombre: sala.nombre,
        urL_Imagen: sala.urL_Imagen || "https://via.placeholder.com/100",
        capacidad: sala.capacidad,
        bloqueado: sala.bloqueado,
      }));

      console.log("✅ Salas recibidas:", salas.value);
    } catch (error) {
      console.error("❌ Error al obtener las salas:", error);
      salas.value = [];
    }
  };

  // 🔹 Función para seleccionar una sala
  const selectSala = (id: number) => {
    if (!salas.value.some(sala => sala.idSala === id)) {
      console.warn(`⚠️ Sala con ID ${id} no encontrada en las salas cargadas.`);
      return;
    }
    selectedSalaId.value = id;
    console.log("🏢 Sala seleccionada:", id);
  };

  // 🔹 Observar cambios en la sede seleccionada y actualizar salas
  watch(() => sedesStore.selectedSedeId, (newIdSede) => {
    fetchSalas(newIdSede);
  }, { immediate: true }); // 🔹 Ejecutar la primera vez también

  return { salas, selectedSalaId, selectSala, fetchSalas };
});
