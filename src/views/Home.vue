<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1>Transforme Sua Presença Online com Páginas Web Incríveis</h1>
      <p>Oferecemos soluções personalizadas para criar páginas web que atraem e convertem clientes.</p>
      <button class="cta-button">Saiba Mais</button>
    </div>
  </div>
</template>

<script>
import heroImage from '../assets/imagens/pexels-junior-teixeira-1064069-2047905.jpg';

export default {
  name: 'Home',
  data() {
    return {
      heroImage
    };
  }
};
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 50em; /* Altura ajustada para a seção hero */
  background-image: url(../assets/imagens/pexels-junior-teixeira-1064069-2047905.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start; /* Alinha o conteúdo ao topo */
  justify-content: center;
  padding-top: 50px; /* Espaço para o menu */
}

.hero-content {
  color: #fff;
  text-align: center;
  padding: 0 20px; /* Padding horizontal */
  margin-top: 0; /* Remove a margem superior para o ajuste */
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.cta-button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-section {
    height: 30em; /* Ajusta a altura para telas menores */
    padding-top: 60px; /* Aumenta o espaço para o menu em telas menores */
  }

  .hero-content h1 {
    font-size: 1.8rem; /* Ajusta o tamanho da fonte para telas menores */
  }

  .hero-content p {
    font-size: 1rem; /* Ajusta o tamanho da fonte para telas menores */
  }

  .cta-button {
    padding: 8px 16px; /* Ajusta o padding do botão para telas menores */
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 20em; /* Ajusta a altura para telas muito pequenas */
    padding-top: 70px; /* Aumenta o espaço para o menu em telas muito pequenas */
  }

  .hero-content h1 {
    font-size: 1.5rem; /* Ajusta o tamanho da fonte para telas muito pequenas */
  }

  .hero-content p {
    font-size: 0.875rem; /* Ajusta o tamanho da fonte para telas muito pequenas */
  }

  .cta-button {
    padding: 6px 12px; /* Ajusta o padding do botão para telas muito pequenas */
  }
}
</style>
