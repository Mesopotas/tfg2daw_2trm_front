import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export const useInfoPedidosStore = defineStore('infoPedidos', () => {
  const route = useRoute();

  const reservaDetalles = ref<{
    precioTotal: number;
    usuarioNombre: string;
    usuarioApellidos: string;
    usuarioEmail: string;
    detalles: Array<{
      numeroAsiento: number;
      nombreSala: string;
      tipoSala: string;
      precioPuesto: number;
    }>;
  } | null>(null);

  // recoger los parametros en la URL
  const idReserva = computed(() => route.query.idReserva);
  const idDetalleReserva = computed(() => route.query.idDetalleReserva);

  const fetchReservaDetalles = async (token: string) => {
    if (!idReserva.value || !idDetalleReserva.value) {
      console.error('Faltan los ID de reserva o detalle de reserva');
      return;
    }

    const url = `https://localhost:7179/api/Reservas/detalles/${idReserva.value}/${idDetalleReserva.value}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

      reservaDetalles.value = await response.json();
      console.log('Detalles de la reserva recibidos:', reservaDetalles.value);
    } catch (error) {
      console.error('Error al obtener detalles de la reserva:', error);
    }
  };

  return {
    reservaDetalles,
    idReserva,
    idDetalleReserva,
    fetchReservaDetalles,
  };
});
