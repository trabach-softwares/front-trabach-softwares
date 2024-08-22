<template>
  <div class="page-wrapper">
    <main class="content">
      <!-- Seu conteúdo principal aqui -->
      <Carousel />
      <InstagramBanner />
      <Lives />
      <Ranking />
      <ProdutosCarrossel /> <!-- Adicione o carrossel de produtos aqui -->
      <!-- <YouTubePreview /> -->
      <UltimasNovidades />
      <Espacos />
      <Galeria />
      <ParceirosOficiais />
    </main>
    <Footer /> <!-- Adiciona o footer ao final do conteúdo -->
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Lives from '../components/Lives.vue';
import InstagramBanner from '../components/InstagramBanner.vue';
import UltimasNovidades from '../components/UltimasNovidades.vue';
import Espacos from '../components/Espacos.vue';
import ProdutosCarrossel from '@/components/ProdutosCarrossel.vue'; // Ajuste o caminho conforme necessário
import ParceirosOficiais from '@/components/ParceirosOficiais.vue';
import { mapGetters } from 'vuex';
import Footer from '../components/Footer.vue'; // Certifique-se de que o caminho está correto
import Ranking from '@/components/Ranking.vue';
import Galeria from '@/components/Galeria.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Lives,
    Ranking,
    InstagramBanner,
    UltimasNovidades,
    Galeria,
    Espacos,
    ProdutosCarrossel,
    ParceirosOficiais,
  },
  computed: {
    ...mapGetters('produtos', ['getProdutos']), // Obtém os produtos do Vuex
  },
  created() {
    this.$store.dispatch('produtos/atualizarProdutos', [
      { name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100,00', image: 'path/to/product1.jpg' },
      // Adicione mais produtos conforme necessário
    ]);
  },
};
</script>

<style src="../views/Home.vue"></style>
