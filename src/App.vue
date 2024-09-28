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

<style>
.btn-custom {
  background-color: #5cb85c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-custom:hover {
  background-color: #4cae4c;
  transform: scale(1.05);
}

.btn-custom:active {
  background-color: #4cae4c;
  transform: scale(0.98);
}

.btn-custom:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
