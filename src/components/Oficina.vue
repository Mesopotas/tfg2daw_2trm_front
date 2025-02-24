<template>
  <v-container class="oficina">
    <div class="oficina__carousel-container">
      <v-carousel hide-delimiters class="oficina__carousel">
        <v-carousel-item class="oficina__carrousel-image"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>
        <v-carousel-item class="oficina__carrousel-image"
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>
        <v-carousel-item class="oficina__carrousel-image"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
      <h1 class="oficina__title">La Oficina</h1>
    </div>
    
    <v-card-text class="oficina__description">
      Una zona de coworking es un espacio diseñado para fomentar la productividad, 
      la colaboración y el networking entre profesionales de diferentes sectores. 
      Ofrece un ambiente flexible y moderno donde emprendedores, freelancers, startups y empresas pueden trabajar 
      de manera cómoda y eficiente, compartiendo recursos y generando sinergias. 
      Equipadas con internet de alta velocidad, salas de reuniones, áreas de descanso y servicios adicionales, 
      las zonas de coworking son ideales para quienes buscan un lugar de trabajo inspirador 
      sin las ataduras de una oficina tradicional.
    </v-card-text>

    <div class="oficina__button-container">
      <v-btn class="oficina__button">Espacios</v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.oficina {
  background-color: #D9D9D9;
  height: calc(100vh - 80px);
  min-width: 100%;
    display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5%;
  box-sizing: border-box;
  justify-content: center;
  gap: 32px;

  &__carousel-container {
    position: relative;
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__carousel {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  &__title {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: jaro, sans-serif;
    font-weight: bold;
    font-size: 35px;
    color: #3A9D64;
    background: #e7e7e7;
    padding: 10px 20px;
    border-radius: 10px;
  }

  &__description {
    background: transparent;
    padding: 20px;
    font-size: 15px;
    color: #000;
    text-align: justify;
    max-width: 80%;
    margin-top: auto;
    margin-bottom: auto;
  }

  &__button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &__button {
    background-color: #3A9D64;
    color: #000;
    font-size: 18px;
    padding: 12px 24px;
    border-radius: 8px;
    min-width: 140px;
    min-height: 45px;
    max-width: 90%;
    white-space: nowrap;
  }
}

@media (max-width: 620px) {
  .oficina {
    &__carousel-container {
      height: 25vh;
    }

    &__button {
      font-size: 16px;
      padding: 10px 20px;
      min-width: auto;
      max-width: 80%;
      min-height: 40px;
    }
  }
}

@media (min-width: 768px) {
  .oficina {
    &__carousel-container {
      height: 35vh;
    }
    &__title {
      font-size: 70px;
    }
    &__description {
      font-size: 16px;
      margin-left: 10%;
      margin-right: 10%;
    }
    &__button {
      font-size: 24px;
      padding: 15px 30px;
      min-width: 180px;
      min-height: 60px;
    }
  }
}

@media (min-width: 1024px) {
  .oficina {
    &__carousel-container {
      height: 40vh;
    }
    &__description {
      font-size: 18px;
      padding-right: 10%;
      justify-content: center;
    }
    &__button {
      font-size: 20px;
      padding: 12px 28px;
      min-width: 200px;
      min-height: 65px;
    }
  }
}
</style>