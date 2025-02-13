<template>
  <div class="login">
    <form class="login__form">
      <input type="text" id="usuario" class="login__input" placeholder="Usuario">
      <input type="password" id="password" class="login__input" placeholder="Contraseña">

      <button type="submit" class="login__button">→</button>

      <router-link to="register"><a class="login__register">¿No tienes cuenta? Registrarte</a></router-link>
    </form>
  </div>
</template>

<script setup lang="ts">

</script>


<style lang="scss" scoped>
.login {
  width: 100vw;
  height: calc(100vh - 123px - 171px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EDE0D4;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 90%;
    max-width: 360px;
  }

  &__input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #4A3F35;
    background: transparent;
    font-size: 16px;
    padding: 5px;
    outline: none;
    color: #4A3F35;

    &::placeholder {
      color: #4A3F35;
      font-weight: bold;
      font-size: 14px;
      opacity: 0.7;
    }
  }

  &__button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #4A3F35;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__register {
    font-size: 12px;
    color: #4A3F35;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    &__form {
      gap: 20px;
      max-width: 400px;
    }

    &__input {
      font-size: 18px;
    }

    &__button {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px - 67px);
    
    &__form {
      max-width: 450px;
    }

    &__input {
      font-size: 20px;
    }

    &__button {
      font-size: 22px;
    }
  }
}

</style>
