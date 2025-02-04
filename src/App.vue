<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';

export default {
  components: {
    Header,
    Footer,
    Card,
  },
};
</script>



<template>
  <div class="layout">
    <Header />
    <Card />
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
  background-color: #000537;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  color: #000537;
}
</style>
