<template>
    <div v-if="reservaDetalles">
      <h1>Detalles de la Reserva</h1>
      <div>
        <h2>Datos del Usuario</h2>
        <p><strong>Nombre:</strong> {{ reservaDetalles.usuarioNombre }} {{ reservaDetalles.usuarioApellidos }}</p>
        <p><strong>Email:</strong> {{ reservaDetalles.usuarioEmail }}</p>
        <p><strong>Precio Total:</strong> {{ reservaDetalles.precioTotal }} €</p>
      </div>
  
      <div v-if="reservaDetalles.detalles && reservaDetalles.detalles.length > 0">
        <h2>Detalles del Asiento</h2>
        <table>
          <thead>
            <tr>
              <th>Asiento</th>
              <th>Sala</th>
              <th>Tipo de Sala</th>
              <th>Precio del Puesto</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detalle, index) in reservaDetalles.detalles" :key="index">
              <td>{{ detalle.numeroAsiento }}</td>
              <td>{{ detalle.nombreSala }}</td>
              <td>{{ detalle.tipoSala }}</td>
              <td>{{ detalle.precioPuesto }} €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    <div v-else>
      <p>Cargando detalles de la reserva...</p>
    </div>
  </template>
  
  <script>

  import { useInfoPedidosStore } from '@/stores/InfoPedidoStore';
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      const reservaDetallesStore = useInfoPedidosStore();
      const token = localStorage.getItem("authToken");

  
      // Llamar a la función de fetchReservaDetalles cuando se monta el componente 
      onMounted(() => {
        reservaDetallesStore.fetchReservaDetalles(token);
      });
  
      return {
        reservaDetalles: reservaDetallesStore.reservaDetalles,
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  
  h2 {
    color: #34495e;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  table th, table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  table th {
    background-color: #f4f4f4;
  }
  

  </style>
  