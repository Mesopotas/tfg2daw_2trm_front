<template>
  <v-container class="tarifas">
    <h2 class="tarifas__title">Tarifas</h2>

    <div class="tarifas__content">
      <v-card class="tarifas__card">
        <v-img class="tarifas__image" src="https://placehold.co/800x700"></v-img>
        <v-card-text class="tarifas__text">
          <p class="tarifas__name">LOREM</p>
          <p class="tarifas__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pretium mi, vel pharetra lacus.
            Phasellus id mollis metus. Quisque vestibulum ipsum massa, quis.
          </p>
        </v-card-text>
      </v-card>

      <v-card class="tarifas__card">
        <v-img class="tarifas__image" src="https://placehold.co/800x700"></v-img>
        <v-card-text class="tarifas__text">
          <p class="tarifas__name">LOREM</p>
          <p class="tarifas__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pretium mi, vel pharetra lacus.
            Phasellus id mollis metus. Quisque vestibulum ipsum massa, quis.
          </p>
        </v-card-text>
      </v-card>

      <v-card class="tarifas__card">
        <v-img class="tarifas__image" src="https://placehold.co/800x700"></v-img>
        <v-card-text class="tarifas__text">
          <p class="tarifas__name">LOREM</p>
          <p class="tarifas__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pretium mi, vel pharetra lacus.
            Phasellus id mollis metus. Quisque vestibulum ipsum massa, quis.
          </p>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.tarifas {
  min-height: calc(100vh - 107px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F4F4F4;
  min-width: 100%;
  padding: 5% 2%;
  box-sizing: border-box;

  &__title {
    font-family: 'Jaro', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #3A9D64;
    margin-bottom: 7%;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__card {
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    width: 300px;
    margin-bottom: 32px;
  }

  &__image {
    border-radius: 8px;
    height: 200px;
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

@media (min-width: 768px) {
  .tarifas {
    &__content {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 7%;
        }

    &__card {
      width: 50%;
      max-width: 350px;
    }
  }
}

@media (min-width: 1024px) {
  .tarifas {
    &__title {
      font-size: 48px;
    }

    &__content {
      width: 80%;
      justify-content: space-evenly;
      gap: 5%;
    }

    &__card {
      width: 33.33%;
      max-width: 400px;
    }
  }
}
</style>
