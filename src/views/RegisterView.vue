<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { registerUser } from "../utils/createUsers"; 

// Variables del store y router

const router = useRouter();

// Variables del formulario

const nombre = ref("");
const apellidos = ref("");
const email = ref("");
const contrasenia = ref("");
const idRol = ref(1); // Valor por defecto porque un usuario normal es 1

const registrarUsuario = async (event: Event) => {
  event.preventDefault();

  await registerUser(
    nombre.value,
    apellidos.value,
    email.value,
    contrasenia.value,
    idRol.value
  );

  alert("Usuario registrado con éxito!");

  // Redirige al login después del registro
  
  router.push("/login");

};
</script>

<template>
  <div class="login">
    <form class="login__form" @submit="registrarUsuario">
      <input type="text" v-model="nombre" class="login__input login__input--full" placeholder="Nombre">
      <div class="login__row">
        <input type="text" v-model="apellidos" class="login__input" placeholder="Apellidos">
        <input type="email" v-model="email" class="login__input" placeholder="Correo">
      </div>
      <input type="password" v-model="contrasenia" class="login__input login__input--full" placeholder="Contraseña">

      <button type="submit" class="login__button">→</button>
    </form>
  </div>
</template>

  
  <style lang="scss" scoped>
 /* Estilos Mobile First (por defecto para dispositivos pequeños) */
.login {
  width: 100vw;
  height: calc(100vh - 80px - 98px); /* Resta la altura del header */
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
    flex-direction: column; /* En móviles los inputs estarán en una columna */
    gap: 20px; /* Espacio entre los inputs */
  }

  &__input {
    width: 100%; /* Los inputs ocupan todo el ancho disponible */
    max-width: 300px; /* Max-width para los inputs en móviles */
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

/* Media Query para pantallas de 768px o mayores */
@media (min-width: 768px) {
  .login {
    height: calc(100vh - 75px - 98px); /* Resta la altura del header */
    &__row {
      flex-direction: row; /* En pantallas medianas, los inputs se alinean horizontalmente */
    }
  }
}

/* Media Query para pantallas de 1024px o mayores */
@media (min-width: 1024px) {
  .login {
    &__row {
      flex-direction: row; /* En pantallas medianas, los inputs se alinean horizontalmente */
    }
  }

}

  </style>