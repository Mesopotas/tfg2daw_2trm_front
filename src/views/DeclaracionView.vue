<template>
    <section class="legal__section legal__section--responsibility">
      <h2 class="legal__title">Responsabilidad</h2>
      <p class="legal__text">
        La información contenida en este sitio web es proporcionada "tal cual". Nos esforzamos por asegurar que el contenido esté actualizado y sea preciso, pero no garantizamos que sea completo o libre de errores. Nos reservamos el derecho de realizar cambios sin previo aviso.
    </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Responsibility',
  };
  </script>
  
  <style scoped lang="scss">
  .legal__section {
    background-color: #EDE0D4;
    height: calc(100vh - 123px - 98px);
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    padding: 2rem;
  }
  
  .legal__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .legal__text {
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
  }
  </style>
  