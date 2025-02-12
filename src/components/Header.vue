<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>




<template>
    <header class="nav-bar">
        <div class="nav-bar__container">
            <h1 class="nav-bar__logo">La Oficina</h1>
            <nav class="nav-bar__menu">
                <a href="#" class="nav-bar__link">Espacios</a>
                <a href="#" class="nav-bar__link">Quienes Somos</a>
                <a href="#" class="nav-bar__link">Tarifas</a>
            </nav>
            <div class="nav-bar__circle"></div>
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

    &__logo {
        position: absolute;
        left: 10px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: bold;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    &__link {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 14px;
    }

    &__circle {
        position: absolute;
        right: 10px;
        width: 30px;
        height: 30px;
        background-color: #D3D3D3;
        border-radius: 50%;
    }

    @media (min-width: 768px) {
        padding: 20px 40px;

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
    padding: 20px 80px 20px 20px;

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
