<template>
  <div class="login">
    <form class="login__form">
      <input type="text" id="usuario" class="login__input" placeholder="Usuario">
      <input type="password" id="password" class="login__input" placeholder="Contraseña">

      <button type="submit" class="login__button">→</button>

      <a href="#" class="login__register">¿No tienes cuenta? Registrarte</a>
    </form>
  </div>
</template>

<script setup lang="ts">

</script>


<style lang="scss" scoped>

.login {
  width: 100vw;
  height: calc(100vh - 67px); /* Es el total de la pantalla, menos el espacio del header (67px) */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EDE0D4;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__input {
    width: 360px;
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
    font-size: 20px;
    cursor: pointer;
    color: #4A3F35;

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
}


</style>
