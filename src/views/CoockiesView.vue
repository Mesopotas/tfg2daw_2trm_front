<template>
    <section class="legal__section legal__section--responsibility">
      <h2 class="legal__title">Coockies</h2>
      <p class="legal__text">
        Utilizamos cookies para mejorar la experiencia de los usuarios en nuestro sitio web. Las cookies se utilizan para recordar tus preferencias y facilitar la navegación. Si no deseas aceptar las cookies, puedes configurar tu navegador para desactivarlas.
        
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
  