<template>
  <div id="app">
    <!-- Navbar visualizzata su tutte le pagine -->
    <NavbarApp />
  </div>
  <div id="app">
    <BarraRicerca></BarraRicerca>
  </div>

  <!-- Contenuto dinamico delle pagine -->
  <router-view />
</template>

<script>
// Importa la Navbar
import NavbarApp from "@/components/NavbarApp.vue";
import BarraRicerca from "./components/BarraRicerca.vue";

export default {
  name: "App",
  components: {
    NavbarApp,
    BarraRicerca,
  },
};
</script>

<style src="./assets/css/stile.css"></style>
