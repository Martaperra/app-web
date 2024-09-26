<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Link alla pagina delle ricette -->
    <router-link to="/recipes" class="btn btn-primary mt-3">
      Vai alla lista delle ricette
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style>
/* Aggiungi eventuali stili personalizzati qui */
</style>
