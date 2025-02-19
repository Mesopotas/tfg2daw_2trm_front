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
  position: relative;
  bottom: 0;
  width: 100%;

  &__container {
    flex-direction: row;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;
  }

  &__list {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 0 50px;
    }

  &__item {
    margin-bottom: 5px;
  }

  &__link {
    color: white;
    text-decoration: none;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    &__container {
      flex-direction: row;
      justify-content: center;
      text-align: left;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 0 50px;
    }
  }

  @media (min-width: 1024px) {
    &__container {
      flex-direction: row;
      justify-content: center;
      text-align: left;
    }
    
  }
}
</style>
