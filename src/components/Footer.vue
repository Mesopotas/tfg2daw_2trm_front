<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>


<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container--content">
        <ul class="footer__list">
          <li class="footer__item"><a href="#" class="footer__link">Cookie Policy</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Privacy and Legal</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Corporate Responsibility</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Modern Slavery Statement</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@use '../assets/styles/_variables.scss' as *;

    //Width de 108px

.footer {
  background-color: $primary-color;
  padding: 20px 0;
  color: white;


  &__container {
    display: flex;
    justify-content: center;
    text-align: left;

    &--content {
      margin-left: 30px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 0 50px;
    padding: 0;
    list-style-type: disc;
  }

  &__item {
    margin-bottom: 10px;
  }

  &__link {
    color: white;
    text-decoration: none;
    font-size: 11px;

    &:hover {
      text-decoration: underline;
    }
  }


  @media (min-width: 768px) {

    //Width de 108px

    &__container {
      flex-direction: row;
      justify-content: center;
      text-align: left;
    }
    &__link {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }

    &__list {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 0 50px;
    }
  }

  @media (min-width: 1024px) {

    //Width de 108px

    &__link {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }

    &__list {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 0 50px;
    }
  }
}
</style>
