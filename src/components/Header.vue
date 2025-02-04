<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>


<template>
    <header class="nav-bar">
        <div class="nav-bar__container">
            <div class="nav-bar__logo">VIETA</div>
            <nav class="nav-bar__links">
                <a href="#" class="nav-bar__link">Cartelera</a>
                <a href="#" class="nav-bar__link">Experiencias</a>
                <a href="#" class="nav-bar__link">Membresía</a>
                <a href="#" class="nav-bar__link">Contacto</a>
                <a href="#" class="nav-bar__link nav-bar__link--login">Log in</a>
                <a href="#" class="nav-bar__link">Trabajadores</a>
            </nav>
        </div>
    </header>
</template>



<style lang="scss" scoped>
@use '../assets/styles/_variables.scss' as *;

body {
    margin: 0;
    background-color: $fondo;
}

.nav-bar {
    background-color: #000537;
    padding: 20px 0;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__logo {
        font-family: 'Jaro', sans-serif;
        color: white;
        font-size: 28px;
        font-weight: bold;
        margin-right: 40px;
    }

    &__links {
        display: flex;
        gap: 30px;
        font-family: 'Jaldi', sans-serif;
    }

    &__link {
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;

        &--login {
            margin-left: 40px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>