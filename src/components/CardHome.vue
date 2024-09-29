<template>
  <b-container class="text-center my-5">
    <h2 class="mb-4" style="color: green">
      Lasciati ispirare dalle nostre ricette
    </h2>
    <b-row>
      <b-col md="4" @mouseover="hovered = 1" @mouseleave="hovered = 0">
        <!-- Usando router-link per collegarsi a /recipes -->
        <router-link
          to="/recipes"
          class="icon-container mb-3"
          style="text-decoration: none; color: inherit"
        >
          <h4 :class="{ 'text-hover': hovered === 1 }">Ricette Semplici</h4>
          <p :class="{ 'text-hover': hovered === 1 }">
            Ricette facili e veloci da preparare a casa.
          </p>
        </router-link>
      </b-col>
      <b-col md="4" @mouseover="hovered = 2" @mouseleave="hovered = 0">
        <div class="icon-container mb-3" @click="navigateTo('NotFound')">
          <h4 :class="{ 'text-hover': hovered === 2 }">Vegan Friendly</h4>
          <p :class="{ 'text-hover': hovered === 2 }">
            Alimentazione vegetale: consigli utili per iniziare
          </p>
        </div>
      </b-col>
      <b-col md="4" @mouseover="hovered = 3" @mouseleave="hovered = 0">
        <div class="icon-container mb-3" @click="navigateTo('recipes')">
          <h4 :class="{ 'text-hover': hovered === 3 }">Carica la tua foto</h4>
          <p :class="{ 'text-hover': hovered === 3 }">
            Una raccolta delle nostre ricette... fatte da voi!
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CardHome",
  data() {
    return {
      hovered: 0,
    };
  },
  methods: {
    navigateTo(route) {
      // Naviga alla rotta usando il nome definito nel router
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped>
.icon-container {
  display: flex;
  flex-direction: column; /* Allinea il testo verticalmente */
  justify-content: center;
  align-items: center;
  height: 100px; /* Altezza dell'icona */
  transition: box-shadow 0.3s ease;
  cursor: pointer; /* Cambia il cursore in puntatore */
}

h4,
p {
  margin-top: 10px; /* Margine sopra il titolo */
  transition: color 0.3s ease;
}

.text-hover {
  color: green; /* Cambia il colore del testo */
  text-shadow: 0 0 5px rgba(0, 128, 0, 0.8);
}

.icon-container:hover {
  box-shadow: 0 4px 20px rgba(0, 128, 0, 0.5); /* Ombra attorno al testo */
}
</style>
