<template>
    <div class="login">
      <form class="login__form">
        <div class="login__row">
          <input type="text" id="usuario" class="login__input" placeholder="Usuario">
          <input type="text" id="nombre" class="login__input" placeholder="Nombre">
        </div>
        <div class="login__row">
          <input type="text" id="apellidos" class="login__input" placeholder="Apellidos">
          <input type="email" id="correo" class="login__input" placeholder="Correo">
        </div>
        <input type="password" id="password" class="login__input login__input--full" placeholder="Contraseña">
  
        <button type="submit" class="login__button">→</button>
      </form>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .login {
    width: 100vw;
    height: calc(100vh - 67px); /* Resta la altura del header */
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
  
    &__row {
      display: flex;
      gap: 40px; /* Espacio entre los inputs */
    }
  
    &__input {
      width: 220px; /* Para inputs en columnas */
      border: none;
      border-bottom: 1px solid #4A3F35;
      background: transparent;
      font-size: 16px;
      padding: 5px;
      outline: none;
      color: #4A3F35;
  
      &--full {
        width: 100%; /* La contraseña ocupa todo el ancho */
        max-width: 500px;
      }
  
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
  }
  </style>