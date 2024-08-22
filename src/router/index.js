import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Verifique o caminho correto

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
