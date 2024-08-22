<template>
  <div id="app">
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
