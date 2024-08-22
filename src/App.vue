<template>
  <div id="app">
    <header>
      <nav class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/informacoes">Informações</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style src="@/assets/styles/global.css"></style>
<style src="@/assets/styles/menu.css"></style>
<style src="@/assets/styles/main-content.css"></style>
<style src="@/assets/styles/footer.css"></style> <!-- Se ainda não estiver no seu projeto -->
