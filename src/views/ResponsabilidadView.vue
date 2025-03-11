<template>
    <section class="legal__section legal__section--responsibility">
      <h2 class="legal__title">Responsabilidad</h2>
      <p class="legal__text">
        En "La Oficina", nos comprometemos a proporcionar un entorno seguro, profesional y productivo para los jóvenes empresarios. No nos hacemos responsables de los daños o pérdidas derivados de la utilización de nuestros espacios o servicios, excepto en casos de negligencia o incumplimiento de nuestras políticas.
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
    padding: 2rem 15rem 2rem 15rem;
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
  