import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Verifique o caminho correto
import Informacoes from '../views/Informacoes.vue'; // Importa a view de Informações

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/informacoes',
    name: 'Informacoes',
    component: Informacoes,
  },
  // Outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
