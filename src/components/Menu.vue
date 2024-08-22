<template>
  <div ref="menuWrapper" class="menu-wrapper">
    <!-- Botão de abrir o menu -->
    <button @click="toggleMenu" class="menu-button">
      ☰
    </button>
    
    <!-- Navegação principal -->
    <nav :class="{ 'open': isMenuOpen }" class="menu">
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/logos/svg/24.svg" alt="Logo" class="logo" />
        </router-link>
      </div>
      
      <!-- Links do menu -->
      <ul>
        <li><router-link to="/" @click.native="closeMenu">Home</router-link></li>
        <li><router-link to="/informacoes" @click.native="closeMenu">Informações</router-link></li>
      </ul>
      
      <!-- Botão de fechar o menu -->
      <button @click="toggleMenu" class="close-button">×</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isMenuOpen: false,
      lastScrollTop: 0,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > this.lastScrollTop) {
        // Rolando para baixo
        if (!this.isMenuOpen) {
          this.$refs.menuWrapper.style.top = `-${this.$refs.menuWrapper.offsetHeight}px`;
        }
      } else {
        // Rolando para cima
        this.$refs.menuWrapper.style.top = '0';
      }
      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para evitar valores negativos
    },
    handleClickOutside(event) {
      const menuWrapper = this.$refs.menuWrapper;
      if (menuWrapper && !menuWrapper.contains(event.target) && this.isMenuOpen) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style src="../assets/styles/menu.css" scoped></style>
