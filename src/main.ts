import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// Crear la instancia de Pinia
const pinia = createPinia();

// Crear la app e incluir Pinia
createApp(App).use(pinia).mount('#app');
