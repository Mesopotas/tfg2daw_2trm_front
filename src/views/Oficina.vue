<template>
    <v-container class="oficina">
      <h1 class="oficina__title">La Oficina</h1>
  
      <v-card-text class="oficina__description">
        Una zona de coworking es un espacio diseñado para fomentar la productividad, 
        la colaboración y el networking entre profesionales de diferentes sectores. 
        Ofrece un ambiente flexible y moderno donde emprendedores, freelancers, startups y empresas pueden trabajar 
        de manera cómoda y eficiente, compartiendo recursos y generando sinergias. 
        Equipadas con internet de alta velocidad, salas de reuniones, áreas de descanso y servicios adicionales, 
        las zonas de coworking son ideales para quienes buscan un lugar de trabajo inspirador 
        sin las ataduras de una oficina tradicional.
      </v-card-text>
  
      <v-btn class="oficina__button">Espacios</v-btn>
    </v-container>
  </template>
  
  <style lang="scss" scoped>
  .oficina {
    background-color: #D9D9D9;
    height: calc(100vh - 67px);
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5%;
  
    &__title {
      font-family: jaro;
      font-size: 70px;
      font-weight: bold;
      color: #3A9D64;
      margin-top: 5%;
    }
  
    &__description {
      margin-top: 2%;
      background: transparent;
      box-shadow: none;
      padding: 20px;
      font-size: 20px;
      color: #000000;
      text-align: justify;
      max-width: 800px; 
    }
  
    &__button {
      background-color: #3A9D64;
      color: #000000;
      font-size: 28px;
      padding: 20px;
      border-radius: 8px;
      min-width: 200px;
      min-height: 70px;
      margin-bottom: 35px;
    }
  }
  </style>
  