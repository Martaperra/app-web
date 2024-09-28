<template>
  <div id="app">
    <!-- Navbar visualizzata su tutte le pagine -->
    <NavbarApp />

    <!-- Contenuto dinamico delle pagine -->
    <router-view />
  </div>
</template>

<script>
// Importa la Navbar
import NavbarApp from "@/components/NavbarApp.vue";

export default {
  name: "App",
  components: {
    NavbarApp,
  },
};
</script>

<style>
/* Stili globali, se necessari */
</style>
