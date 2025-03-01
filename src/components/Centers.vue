<script lang="ts">
import TargetCenter from '../components/TargetCenter.vue';

export default {
  components: {
    TargetCenter 
  },
};
</script>

<template>
  <div class="centros">
    <h2 class="centros__titulo">Centros</h2>
    <div class="centros__linea"></div>

    <div class="fila_tarjetas">
      <TargetCenter />
      <TargetCenter />
      <TargetCenter />
      <TargetCenter />
      <TargetCenter />
      <TargetCenter />
      <TargetCenter />
      <TargetCenter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.centros {
  position: relative;
  height: 100vh;
  margin: 0;
  padding: 20px;
  background-color: #f3e7dc;
  text-align: center;
  overflow: auto;

  &__titulo {
    font-size: 20px;
    font-weight: bold;
    font-family: "Arial Black", sans-serif;
  }

  &__linea {
    width: 50%;
    max-width: 300px;
    height: 2px;
    background-color: black;
    margin: 5px auto 20px auto;
  }

  .fila_tarjetas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  /* 📱 MÓVIL: 1 tarjeta por fila */
  .fila_tarjetas > * {
    width: 90%; 
    max-width: 250px;
  }

  /* 📲 TABLET (768px): 2 tarjetas por fila */
  @media (min-width: 768px) {
    .fila_tarjetas > * {
      width: calc(50% - 20px);
    }
  }

  /* 🖥️ ESCRITORIO (1024px): 4 tarjetas por fila */
  @media (min-width: 1024px) {
    .fila_tarjetas > * {
      width: calc(25% - 20px);
    }
  }
}
</style>
