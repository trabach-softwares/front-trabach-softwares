import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de que o caminho está correto

createApp(App)
  .use(router)
  .mount('#app');
