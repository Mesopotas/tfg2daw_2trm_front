<template>
    <div class="not-found">
      <h1 class="not-found__title">404 - Página no encontrada</h1>
      <p class="not-found__content">Lo siento, la página que buscas no existe o se ha eliminado</p>
      <RouterLink class="not-found__link" to="/home">Vuelve a home pulsando aqui</RouterLink>
    </div>
  </template>
  
  <script lang="ts">
  import router from '../router';

  export default {
    name: 'NoEncontrado',
  };
  </script>
  
  <style lang="scss" scoped>
  .not-found {
    height: calc(100vh - 225px);
    text-align: center;
    padding: 50px;
    justify-content: center;
    padding-top: 15%;


    &__title{
        font-size: 50px;
        padding-bottom: 20px;
    }
    &__content{
        padding-bottom: 20px;
    }
    &__link{
        font-size: 25px;
        padding-bottom: 20px;
    }
  }


  </style>
  