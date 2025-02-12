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
          <v-img
            class="about__image"
            src="https://placehold.co/1700x1000"

          ></v-img>
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
      <v-divider/>
    </v-container>
  </template>
  
  <style lang="scss" scoped>
  .about {
    height: calc(100vh - 67px);
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 7%;
    padding-right: 10%;
    background-color: #F4F4F4;


    
    &__header {
        font-family: jaro;
        align-items: center;
        padding-top: 5%;
      font-size: 70px;
      font-weight: bold;
      color: #3A9D64;
      text-align: center;

      margin-bottom: 20px;
    }
    
    &__content {
      width: 100%;
      margin: 0;
      align-items: center
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
      margin-bottom: 20px;
    }
    
    &__description {
      font-size: 20px;
      color: #000000;
      text-align: left;
    }
  }
  </style>
  