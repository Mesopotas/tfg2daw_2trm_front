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
  height: calc(100vh - 67px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F4F4F4;
  width: 100%;
  min-width: 100%;
  text-align: center;
  padding-top: 5%;

  &__title {
    font-family: jaro;
    font-size: 70px;
    font-weight: bold;
    color: #3A9D64;
    text-align: center;
    margin-bottom: 5%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__card {
    text-align: center;
    padding: 20px;
    width: 300px;
    background-color: #F4F4F4;
    border: none;
    margin-bottom: 5%;
  }

  &__text {
    margin-top: 10px;
  }

  &__name {
    font-size: 40px;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  &__description {
    font-size: 16px;
    color: #000000;
    text-align: center;
    align-items: center;
  }
}

@media (min-width: 768px) {

  .tarifas {
    height: calc(100vh - 83px);

    &__content {
      flex-direction: row;
      justify-content: space-evenly;
      width: 80%;
    }

    &__card {
      margin-bottomom: 15%;
    }
  }
}
</style>