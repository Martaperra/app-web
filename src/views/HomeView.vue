<template>
  <div>
    <!-- Logo e messaggio di benvenuto -->
    <img alt="Vue logo" src="../assets/logo.png" />

    <SliderComponent />
    <!-- Inserisci il carosello qui -->

    <!-- Mostra il dettaglio della ricetta se una ricetta è selezionata -->
    <RicetteDetail v-if="selectedRecipeId" :id="selectedRecipeId" />
  </div>
</template>

<script>
// @ è un alias per /src
import RicetteDetail from "@/views/RicetteDetail.vue"; // Assicurati che il percorso sia corretto
import SliderComponent from "@/components/SliderComponent.vue";

export default {
  name: "HomeView",
  components: {
    RicetteDetail,
    SliderComponent,
  },
  data() {
    return {
      selectedRecipeId: null, // Inizialmente nessuna ricetta selezionata
    };
  },
  methods: {
    selectRecipe(id) {
      this.selectedRecipeId = id; // Imposta l'ID della ricetta selezionata
    },
  },
};
</script>

<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
