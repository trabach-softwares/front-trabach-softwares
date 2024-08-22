<template>
  <div id="app">
    <header>
      <nav class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/informacoes">Informações</router-link>
      </nav>
    </header>
    
    <router-view/>

    <footer>
      © 2024 - Meu Projeto Vue
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/styles/menu.css"></style>
<style src="./assets/styles/footer.css"></style>