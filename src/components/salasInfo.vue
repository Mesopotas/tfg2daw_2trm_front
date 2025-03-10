<template>
  <v-container class="salasInfo" id="salaInfo-id">
    <h2 class="salasInfo__title">salasInfo</h2>

    <div class="salasInfo__content">
      <v-card class="salasInfo__card">
        <v-img class="salasInfo__image" src="https://placehold.co/800x700"></v-img>
        <v-card-text class="salasInfo__text">
          <p class="salasInfo__name">LOREM</p>
          <p class="salasInfo__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pretium mi, vel pharetra lacus.
            Phasellus id mollis metus. Quisque vestibulum ipsum massa, quis.
          </p>
        </v-card-text>
      </v-card>

      <v-card class="salasInfo__card">
        <v-img class="salasInfo__image" src="https://placehold.co/800x700"></v-img>
        <v-card-text class="salasInfo__text">
          <p class="salasInfo__name">LOREM</p>
          <p class="salasInfo__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pretium mi, vel pharetra lacus.
            Phasellus id mollis metus. Quisque vestibulum ipsum massa, quis.
          </p>
        </v-card-text>
      </v-card>

      <v-card class="salasInfo__card">
        <v-img class="salasInfo__image" src="https://placehold.co/800x700"></v-img>
        <v-card-text class="salasInfo__text">
          <p class="salasInfo__name">LOREM</p>
          <p class="salasInfo__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pretium mi, vel pharetra lacus.
            Phasellus id mollis metus. Quisque vestibulum ipsum massa, quis.
          </p>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.salasInfo {
  min-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F4F4F4;
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
    min-width: 100%;
  }

  &__card {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    width: 90%;
    max-width: 350px;
    margin-bottom: 24px;
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
