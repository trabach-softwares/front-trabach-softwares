import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importa o store

createApp(App)
  .use(store) // Adiciona o store
  .mount('#app');
