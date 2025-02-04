<script>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <div class="film">

    <div class="film__columns">
      <div class="film__card">
        <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
        <div class="film____content-title"><h2 class="film__title">Romance film Shit Nigga</h2></div>
      </div>
      <div class="film__card">
        <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
        <h2 class="film__title">Romance film Shit Nigga</h2>
      </div>
      <div class="film__card">
        <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
        <h2 class="film__title">Romance film Shit Nigga</h2>
      </div>
      <div class="film__card">
        <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
        <h2 class="film__title">Romance film Shit Nigga </h2>
      </div>
      <div class="film__card">
        <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
        <h2 class="film__title">Romance film Shit Nigga </h2>
      </div>
      <div class="film__card">
        <img class="film__image" src="https://fakeimg.pl/200x300" alt="Film" />
        <h2 class="film__title">Romance film Shit Nigga </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/_variables.scss' as *;

@media (min-width: 900px) {
  .film {
    display: flex;
    justify-content: center;
    background-color: #000537;
    padding: 20px;
    text-align: center;

    &__columns {
      display: grid;
      grid-template-columns: repeat(4, 1fr); 
      gap: 20px;
      max-width: 800px;
    }

    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 180px; 
    }

    &__image {
      width: 100%;
      height: 300px;
      background-color: #ccc;
    }

    &__title {
      margin-top: 10px;
      font-size: 16px;
      color: white;
      text-align: center;
    }
  }
}


@media (min-width: 500px) and (max-width: 899px) {
  .film {
    display: flex;
    justify-content: center;
    background-color: #000537;
    padding: 20px;
    text-align: center;

    &__columns {
      display: grid;
      grid-template-columns: repeat(2, 1fr); 
      gap: 20px;
      max-width: 800px;
    }

    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 180px; 
    }

    &__image {
      width: 100%;
      height: 300px;
      background-color: #ccc;
    }

    &__title {
      margin-top: 10px;
      font-size: 16px;
      color: white;
      text-align: center;
    }
  }
}

@media (max-width: 499px) {
  .film {
    display: flex;
    justify-content: center;
    background-color: #000537;
    padding: 20px;
    text-align: center;

    &__columns {
      display: grid;
      grid-template-columns: repeat(1, 1fr); 
      gap: 20px;
      max-width: 800px;
    }

    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 180px; 
    }

    &__image {
      width: 100%;
      height: 300px;
      background-color: #ccc;
    }

    &__title {
      margin-top: 10px;
      font-size: 16px;
      color: white;
      text-align: center;
    }
  }
}



</style>