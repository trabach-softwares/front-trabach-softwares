<template>
  <div id="app" class="app-container">
    <!-- Cabeçalho com o Menu -->
    <header>
      <Menu />
    </header>

    <!-- Conteúdo principal da aplicação -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Rodapé -->
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
  },
};
</script>

<style src="@/assets/styles/global.css"></style>
<style src="@/assets/styles/menu.css"></style>
<style src="@/assets/styles/main-content.css"></style>
<style src="@/assets/styles/footer.css"></style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o container ocupe pelo menos a altura da tela */
}

.main-content {
  flex: 1; /* Permite que o conteúdo principal cresça e empurre o footer para o fundo */
}
</style>
