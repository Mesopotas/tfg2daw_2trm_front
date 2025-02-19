<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col>
        <h1 class="about__header">¿Quiénes somos?</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="about__content">
      <v-col class="about__image-col">
        <v-img class="about__image" src="https://placehold.co/1700x1200"></v-img>
      </v-col>
      <v-col class="about__text-col">
        <h2 class="about__sub-title">LOREM</h2>
        <v-card-text class="about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pretium mi, vel pharetra lacus. Phasellus id mollis metus. Quisque
          vestibulum ipsum massa, quis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas in pretium mi, vel pharetra lacus. Phasellus
          id mollis metus. Quisque vestibulum ipsum massa, quisacus. Phasellus id
          mollis metus. Quisque vestibulum ipsum massa, quis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Maecenas in.
        </v-card-text>
      </v-col>
    </v-row>
    <v-divider />
  </v-container>
</template>

<style lang="scss" scoped>
.about {
  height: calc(100vh + 90px);
  width: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 7%;
  padding-right: 10%;
  background-color: #F4F4F4;
  flex-direction: column;
  align-items: center;
  text-align: center;



  &__header {
    font-family: jaro;
    align-items: center;
    padding-top: 5%;
    font-size: 35px;
    font-weight: bold;
    color: #3A9D64;
    text-align: center;
    margin-top: 20%;
    margin-bottom: 20px;
  }

  &__content {
    flex-direction: column;
    text-align: center;
    align-content: space-around


  }

  &__image-col {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  &__text-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  &__image {
    width: 100%;
    border-radius: 5px;
  }

  &__sub-title {
    font-size: 40px;
    font-weight: bold;
    color: black;
    text-align: left;
    text-align: center;
  }

  &__description {
    margin-top: 2%;
    background: transparent;
    padding: 20px;
    font-size: 16px;
    color: #000000;
    text-align: justify;
    max-width: 100%;
  }

}
@media (min-width: 768px) {
  .about {
    height: calc(100vh);
    width: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 7%;
    padding-right: 10%;
    background-color: #F4F4F4;
  &__image{
    max-width: 500px;
  }
  
}
}

@media (min-width: 1024px) {
  .about {
    &__content {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: row;
      align-items: flex-start;

    }

    &__image-col {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 20px;
      max-width: 50%;
      height: 100%;
    }

    &__image {
      width: 100%;
      max-width: 600px;
      height: auto;
      border-radius: 5px;
    }

    &__text-col {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 20px;
      max-width: 50%;
    }

    &__header {
      font-size: 70px;
    }

    &__sub-title {
      text-align: left;
      font-size: 40px;
      margin-bottom: 1rem;
    }

    &__description {
      max-width: 100%;
      text-align: left;
      font-size: 14px;
    }
  }
  @media (min-width: 1524px) {
    .about {
    &__description {
      font-size: 20px;
    }
  }
}

}
</style>