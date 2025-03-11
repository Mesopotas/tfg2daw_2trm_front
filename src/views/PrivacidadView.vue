<template>
    <section class="legal__section legal__section--responsibility">
      <h2 class="legal__title">Privacidad</h2>
      <p class="legal__text">
        En "La Oficina", valoramos tu privacidad. Todos los datos personales que nos proporciones serán tratados con estricta confidencialidad y no serán compartidos con terceros sin tu consentimiento, salvo que sea requerido por ley.
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
  