<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
    <div class="centro">
      <div class="centro__imagen"></div>
      <h3 class="centro__nombre">Ofice</h3>
      <p class="centro__ubicacion">Zaragoza</p>
      <p class="centro__direccion">Calle los palosmares mis dos cojones 22º</p>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .centro {
    background-color: #ddd;
    padding: 15px;
    width: 200px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin: 25px;
  
    &__imagen {
      width: 100%;
      height: 150px;
      background-color: gray;
      margin-bottom: 10px;
    }
  
    &__nombre {
      font-weight: bold;
      font-size: 25px;
    }
  
    &__ubicacion {
      font-size: 16px;
      color: black;
    }
  
    &__direccion {
      font-size: 14px;
      color: black;
    }
  }
  </style>
  