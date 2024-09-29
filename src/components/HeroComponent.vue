<template>
  <div
    class="hero-section d-flex align-items-center justify-content-center text-center text-light"
  >
    <div class="overlay"></div>
    <div class="content">
      <h1>Benvenuti nel mondo della cucina vegana!</h1>
      <p class="lead">Scopri ricette sane, gustose e veloci da preparare.</p>
      <button class="btn btn-primary btn-lg mt-4">Scopri di più</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style scoped>
.hero-section {
  height: 100vh;
  background-image: url("@/assets/SfondoHome.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.content {
  position: relative;
  z-index: 1; /* Mantiene il contenuto sopra l'overlay */
}

h1 {
  font-size: 3rem;
  font-weight: bold;
}

.lead {
  font-size: 1.5rem;
}

.btn {
  background-color: #5cb85c; /* Colore di base del pulsante */
  border-color: #5cb85c; /* Colore del bordo */
}

.btn:hover {
  background-color: #4cae4c; /* Colore verde scuro al passaggio del mouse */
  border-color: #4cae4c; /* Colore del bordo al passaggio del mouse */
}

.btn-link:hover {
  color: #255e25; /* Colore del testo al passaggio del mouse */
  text-decoration: underline;
}
</style>
