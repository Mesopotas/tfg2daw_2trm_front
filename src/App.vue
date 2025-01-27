<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>



<template>
  <div class="layout">
    <Header />

    <main class="content" />

    <Footer />
  </div>
</template>



<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content {
  flex: 1; 
  background-color: aqua;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  color: #212529;
}
</style>
