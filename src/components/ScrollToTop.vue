<template>
  <div>
    <button
      v-if="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, // Inizialmente il pulsante non è visibile
    };
  },
  mounted() {
    // Aggiungi l'evento di scroll quando il componente è montato
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Rimuovi l'evento di scroll quando il componente è distrutto
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Controlla se la pagina è scorsa verso il basso
      this.isVisible = window.scrollY > 300; // Cambia il valore per la soglia
    },
    scrollToTop() {
      // Scrolla lentamente verso l'alto
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #498849;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.scroll-to-top:hover {
  background-color: #498849; /* Colore scuro al passaggio del mouse */
}
</style>
