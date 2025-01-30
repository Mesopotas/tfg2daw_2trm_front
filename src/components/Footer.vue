<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>


<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container--logo">
        <img src="../assets/imgs/placeholderCircle.png" alt="">
      </div>
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
.footer {
  background-color: #00085A;
  padding: 20px 0;
  color: white;

  &__container {
    display: flex;
    justify-content: center;
    gap: 50px;
    text-align: left;

    &--content{
      margin-left: 30px;
    }

    &--logo {
      margin-right: 30px;

      img {
        max-width: 140px;
      }
    }

  }

  &__list {
    list-style-type: disc;
    padding: 0;
  }

  &__item {
    margin-bottom: 10px;
  }

  &__link {
    color: white;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>