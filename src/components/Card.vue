<template>
    <div class="film">
      <div class="film__columns">
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
      </div>
      <div class="film__columns">
  
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
        <div class="film__card">
          <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
          <h2 class="film__title">FILM NAME</h2>
        </div>
      </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "Card",
  };
  </script>
  
  <style lang="scss" scoped>
  @use '../assets/styles/_variables.scss' as variables;
  
  @import "./../assets/styles/main.scss";
  
  
  .film {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    background-color: #000537;
    padding: 20px;
    text-align: center;
  
    &__columns {
      display: flex;
    }
    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
  
    }
  
    &__image {
      width: 300px; // dimensiones
      height: 90%;
      background-color: #ccc;
    }
  
    &__title {
      margin-top: 18px;
      padding-top: 10px;
      font-size: 2em;
      color: white;
    }
  }
    @media (max-width: 1024px) {
      .film {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  
    @media (max-width: 768px) {
      
      .film {
        align-items: center;
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
  
      
      &__image {
      width: 65%;
      height: auto;
    }
  
      &__section {
        flex-direction: column;
      }
    }
    }
  
  </style>