<template>
  <div v-if="reservaDetalles" class="container">
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
            <td class="center">{{ detalle.numeroAsiento }}</td>
            <td class="center">{{ detalle.nombreSala }}</td>
            <td class="center">{{ detalle.tipoSala }}</td>
            <td class="center">{{ detalle.precioPuesto }} €</td>
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
import { computed, onMounted } from 'vue';

export default {
  setup() {
    const reservaDetallesStore = useInfoPedidosStore();
    const token = localStorage.getItem("authToken");

    onMounted(() => {
      if (token) {
        reservaDetallesStore.fetchReservaDetalles(token);
      }
    });

    return {
      reservaDetalles: computed(() => reservaDetallesStore.reservaDetalles),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 177px);
  padding: 20px;
  text-align: center;
}

h1 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 15px;
}

h2 {
  color: #34495e;
  font-size: 20px;
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  td {
    font-size: 16px;
  }
}

p {
  font-size: 18px;
  color: #2c3e50;
  margin-top: 15px;
}

strong {
  font-weight: bold;
}

@media (min-width: 600px) {
  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  table {
    th, td {
      padding: 12px;
    }

    td {
      font-size: 18px;
    }
  }

  p {
    font-size: 19px;
  }
}

@media (min-width: 900px) {
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 28px;
  }

  table {
    th, td {
      padding: 15px;
    }

    td {
      font-size: 19px;
    }
  }

  p {
    font-size: 20px;
  }
}
</style>