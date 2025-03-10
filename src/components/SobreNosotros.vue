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
        <img class="about__image" src="../assets/imgs/jefes-lideres.jpg" height="100%" cover><img>
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
  height: 100vh;
  width: 100%;
  display: flex;
  min-width: 100%;
  justify-content: center;
  padding-left: 7%;
  padding-right: 10%;
  background-color: #EDE0D4;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__header {
    font-family: jaro;
    padding-top: 5%;
    font-size: 35px;
    font-weight: bold;
    color: #3a9d64;
    text-align: center;
    margin-top: 20%;
    margin-bottom: 75px;
  }

  &__content {
    flex-direction: column;
    text-align: center;
    align-content: space-around;
    box-shadow: 7px 7px 12px 0 rgba(0, 0, 0, 0.15);
    border: 1px solid #C2C6C8 !important;
    border-radius: 20px;
    background: white;
    margin-bottom: 50px;
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
    text-align: center;
  }

  &__description {
    margin-top: 2%;
    background: transparent;
    padding: 20px 20px 20px 0;
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
    padding-left: 7%;
    padding-right: 10%;

    &__content {
      display: flex;
      flex-direction: row;
      height: 100%;
      padding: 20px;
      margin-bottom: 100px;
        
    }

    &__image-col {
      max-width: 50%;
      padding: 20px;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    &__text-col {
      max-width: 50%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    &__header {
      font-size: 50px;
      padding-top: 5%;
      margin-top: 10%;
      margin-bottom: 100px;
    }

    &__sub-title {
      font-size: 35px;
      text-align: left;
    }

    &__description {
      font-size: 16px;
      padding: 15px 15px 15px 0;
      margin-top: 2%;
      text-align: left;
    }
  }
}

@media (min-width: 1024px) {
  .about {
    height: 100vh;
    &__content {
      width: 100%;
      padding: 20px;
      margin-bottom: 100px;
    }

    &__image-col {
      max-width: 50%;
      padding: 20px;
    }

    &__image {
      max-width: 600px;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    &__text-col {
      max-width: 50%;
      padding: 20px;
    }

    &__header {
      font-size: 70px;
      padding-top: 5%;
      margin-top: 10%;
      margin-bottom: 100px;
    }

    &__sub-title {
      font-size: 40px;
      text-align: left;
      margin-bottom: 1rem;
    }

    &__description {
      font-size: 16px;
      padding: 20px 20px 20px 0;
      margin-top: 2%;
      text-align: left;
      
    }
  }
}
</style>