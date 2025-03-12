<template>
  <v-container class="salasInfo" id="salaInfo-id">
    <h2 class="salasInfo__title">Nuestras Salas</h2>

    <div class="salasInfo__content">
      <v-card class="salasInfo__card">
        <img class="salasInfo__image" src="../assets/imgs/grupo-grande.png"></img>
        <v-card-text class="salasInfo__text">
          <p class="salasInfo__name">Grupal</p>
          <p class="salasInfo__description">
            El epicentro de la creatividad y la colaboración. Este espacio está diseñado para reuniones de equipo, sesiones de brainstorming, coworking y networking. Con mesas amplias, pizarra y una atmósfera que inspira el trabajo en conjunto, es el lugar perfecto para compartir ideas y construir algo grande con otros profesionales.
          </p>
        </v-card-text>
      </v-card>

      <v-card class="salasInfo__card">
        <img class="salasInfo__image" src="../assets/imgs/grupo-privado.png"></img>
        <v-card-text class="salasInfo__text">
          <p class="salasInfo__name">Privada</p>
          <p class="salasInfo__description">
            Un refugio de tranquilidad y enfoque. Pensada para esos momentos en los que necesitas máxima concentración, privacidad o confidencialidad, ya sea para una videollamada importante, una reunión estratégica o simplemente un rato de trabajo sin interrupciones. Aquí puedes desarrollar tus proyectos en un entorno silencioso y cómodo.
          </p>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>


<style lang="scss" scoped>
.salasInfo {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('../assets/imgs/gente-feliz.png') no-repeat center center;
  background-size: cover;
  padding: 5% 2%;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5); // Ajusta la opacidad para mejorar la visibilidad
    z-index: 1;
  }

  &__title {
    font-family: 'Jaro', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #3A9D64;
    margin-bottom: 7%;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    z-index: 2;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 100%;
    position: relative;
    z-index: 2;
  }

  &__card {
    background-color: rgba(255, 255, 255, 0.8); // Hace que las tarjetas sean semitransparentes
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    width: 90%;
    max-width: 350px;
    margin-bottom: 24px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &__image {
    border-radius: 8px;
    width: 270px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  &__text {
    margin-top: 16px;
  }

  &__name {
    font-size: 28px;
    font-weight: bold;
    color: black;
    margin-bottom: 16px;
  }

  &__description {
    font-size: 16px;
    color: #000;
    line-height: 1.5;
  }
}

@media (min-width: 1024px) {
  .salasInfo {
    height: 100vh;

    &__content {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      max-width: 1100px;
      gap: 3%;
    }

    &__card {
      width: 30%;
      max-width: 380px;
      margin-bottom: 0;
    }

    &__title {
      font-size: 70px;
    }
  }
}

</style>
