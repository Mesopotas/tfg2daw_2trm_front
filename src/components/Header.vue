<script lang="ts">
import { defineComponent } from 'vue';
import LogoCanvas from './LogoCanvas.vue';

export default defineComponent({
  components: {
    LogoCanvas,
  },
});
</script>




<template>
    <header class="nav-bar">
        <div class="nav-bar__container">
            <router-link to="home"> <LogoCanvas/></router-link>
            <nav class="nav-bar__menu">
                <a href="/home#oficina-id" class="nav-bar__link">Espacios</a>
                <a href="/home#about-if" class="nav-bar__link">Quienes Somos</a>
                <a href="/home#salaInfo-id" class="nav-bar__link">salasInfo</a>
            </nav>
            <router-link to="login"> <div class="nav-bar__circle"></div></router-link>

        </div>
    </header>
</template>



<style lang="scss" scoped>

@use '../assets/styles/_variables.scss' as *;

.nav-bar {
    background-color: $primary-color;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        position: relative;
    }

    a{
        position: relative;
    }

    &__logo {
        position: absolute;
        left: 10px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: bold;
        top: -13px;
        width: 102px;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
        padding-left: 65px;
    }

    &__link {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 14px;
    }

    &__circle {
        right: 10px;
        width: 30px;
        height: 30px;
        background-color: #D3D3D3;
        border-radius: 50%;
    }

    @media (min-width: 768px) {
        padding: 20px 20px;

        &__menu {
            flex-direction: row;
            justify-content: center;
            gap: 20px;
        }

        &__link {
            font-size: 16px;
        }

        &__circle {
            width: 35px;
            height: 35px;
        }
    }
}

@media (min-width: 1024px) {
    .nav-bar {
    padding: 20px 20px 20px 20px;

    &__container {
        width: 90%;
    }

    &__logo {
        font-size: 20px;
    }

    &__menu {
        gap: 40px;
    }

    &__link {
        font-size: 18px;
    }

    &__circle {
        width: 40px;
        height: 40px;
    }
}
}
</style>

