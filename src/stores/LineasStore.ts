import { defineStore } from "pinia";
import { useDetallesReservaStore } from "./DetallesReservaStores";
import { useReservasStore } from "./ReservasStore";

interface LineaReserva {
  IdLinea: number;
  IdReserva: number;
  IdDetalleReserva: number[];  // Este campo será un arreglo, como lo tenías anteriormente
  Precio: number;
}

export const useLineasStore = defineStore("lineas", {
  state: () => ({
    lineas: [] as LineaReserva[] ,
  }),

  actions: {
    async createLinea(token: string, descripcion: string, precioTotal: number, idAsiento: number) {
      const detallesReservaStore = useDetallesReservaStore();
      const reservaStore = useReservasStore();

      if (!token) {
        throw new Error("No se ha iniciado sesión");
      }

      // Crear una reserva y obtener su ID
      const idReserva = await reservaStore.createReserva(descripcion, 1); // ID puesto como ejemplo
      if (!idReserva) {
        throw new Error("No se pudo obtener el ID de la reserva.");
      }

      // Obtener el último IdDetalleReserva desde la API
      const lastIdResponse = await fetch("https://localhost:7179/api/DetallesReservas/last", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!lastIdResponse.ok) {
        const errorData = await lastIdResponse.text();
        throw new Error(`Error al obtener el último IdDetalleReserva: ${lastIdResponse.status} - ${errorData}`);
      }

      // Obtener el valor directamente desde el cuerpo de la respuesta
      const idDetalleReserva = await lastIdResponse.text(); // El valor es directamente el número, no un JSON

      console.log("Respuesta recibida del servidor para IdDetalleReserva:", idDetalleReserva);

      // Comprobar que el valor es válido
      if (!idDetalleReserva || isNaN(parseInt(idDetalleReserva))) {
        throw new Error("No se pudo obtener un IdDetalleReserva válido.");
      }

      // Convertir el valor a número y verificar
      const idDetalleReservaNum = parseInt(idDetalleReserva);
      console.log("IdDetalleReserva convertido a número:", idDetalleReservaNum);

      // Crear línea de reserva con los IDs obtenidos
      const response = await fetch("https://localhost:7179/api/Lineas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          IdReserva: idReserva,  // Usamos el ID de la reserva creado
          IdDetalleReserva: [idDetalleReservaNum],  // Aquí aseguramos que sea un arreglo con el IdDetalleReserva numérico
          Descripcion: descripcion,
          Precio: precioTotal,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error al crear la línea de reserva: ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      const IdLinea = data.IdLinea;

      // Si la respuesta es exitosa, agrega la línea de reserva
      this.lineas.push({
        IdLinea,
        IdReserva: idReserva,
        IdDetalleReserva: [idDetalleReservaNum],  // Aseguramos que sea un arreglo con el valor numérico
        Precio: precioTotal,
      });

      console.log("Línea de reserva creada con éxito.");

      // Realizar el POST a las compras para completar la compra
      const compraResponse = await fetch("https://localhost:7179/api/Lineas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          IdLinea,
          IdReserva: idReserva,
          Precio: precioTotal,
        }),
      });

      if (!compraResponse.ok) {
        const errorCompraData = await compraResponse.text();
        throw new Error(`Error al realizar la compra: ${compraResponse.status} - ${errorCompraData}`);
      }

      const compraData = await compraResponse.json();
      console.log("Compra realizada con éxito:", compraData);
    },
  },
});
