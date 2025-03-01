<template>
  <div class="oficina">
    <v-carousel hide-delimiters class="oficina__carousel" height="100%">
      <v-carousel-item v-for="(image, index) in images" :key="index" class="oficina__carousel-item">
        <v-img :src="image" height="100%" cover />
      </v-carousel-item>

      <div class="oficina__carousel-container">
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
        <div class="oficina__button-container">
          <RouterLink to = "centros"> <v-btn class="oficina__button">Espacios</v-btn> </RouterLink>
        </div>
      </div>
    </v-carousel>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.oficina {
  position: relative;
  height: calc(100vh - 80px - 123px);
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.oficina__carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}

.oficina__carousel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.oficina__carousel-item {
  width: 100%;
  height: 100%;
}

.v-img {
  width: 100%;
  height: 100%;
}

.oficina__title {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-family: jaro, sans-serif;
  font-weight: bold;
  font-size: 35px;
  color: #3a9d64;
  background: #e7e7e7;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 1;
}

.oficina__description {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 15px;
  color: #000;
  text-align: justify;
  max-width: 80%;
  max-height: 50%;
  overflow-y: auto;
  z-index: 1;
}

.oficina__button-container {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.oficina__button {
  background-color: #3a9d64;
  color: #000;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 8px;
  min-width: 140px;
  min-height: 45px;
  white-space: nowrap;
}

@media (max-width: 620px) {
  .oficina__title {
    font-size: 25px;
  }

  .oficina__description {
    font-size: 12px;
    padding: 10px;
    max-width: 90%;
    top: 35%;
    max-height: 45%;
  }

  .oficina__button-container {
    bottom: 3%;
  }

  .oficina__button {
    font-size: 16px;
    padding: 10px 20px;
    min-width: 120px;
    min-height: 40px;
  }
}

@media (min-width: 768px) {
  .oficina__title {
    font-size: 50px;
  }

  .oficina__description {
    font-size: 16px;
    max-width: 70%;
    max-height: 50%;
  }

  .oficina__button-container {
    bottom: 6%;
  }

  .oficina__button {
    font-size: 20px;
    padding: 15px 30px;
    min-width: 180px;
    min-height: 60px;
  }
}

@media (min-width: 1024px) {
  .oficina__title {
    font-size: 70px;
  }

  .oficina__description {
    font-size: 18px;
    max-width: 60%;
    max-height: 50%;
  }

  .oficina__button-container {
    bottom: 8%;
  }

  .oficina__button {
    font-size: 22px;
    padding: 12px 28px;
    min-width: 200px;
    min-height: 65px;
  }
}
</style>