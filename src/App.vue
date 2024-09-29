<template>
  <div id="app">
    <NavbarApp />
  </div>
  <div id="app">
    <BarraRicerca></BarraRicerca>
  </div>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
import NavbarApp from "@/components/NavbarApp.vue";
import BarraRicerca from "./components/BarraRicerca.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarApp,
    BarraRicerca,
    FooterComponent,
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
