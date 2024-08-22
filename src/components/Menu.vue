<template>
    <div class="menu">
      <div class="menu-logo">
        <img :src="logoSrc" alt="Logo do Site" class="menu-logo-img">
      </div>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span class="menu-toggle-icon"></span>
      </button>
      <nav class="menu-items">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu',
    data() {
      return {
        logoSrc: require('../assets/logos/svg/15.svg') // Usa require para carregar a imagem
      };
    },
    mounted() {
      const menuToggle = document.querySelector('.menu-toggle');
      const menuItems = document.querySelector('.menu-items');
  
      menuToggle.addEventListener('click', function() {
          menuItems.classList.toggle('active');
      });
    }
  };
  </script>
  
  <style scoped src="../assets/styles/menu.css"></style>
  