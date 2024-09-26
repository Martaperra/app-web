<template>
  <div class="container text-center mt-5">
    <h1 class="display-4">La pagina che stai cercando non esiste</h1>
    <p>
      La pagina che hai richiesto non è disponibile o potrebbe essere stata
      spostata.
    </p>
    <router-link to="/" class="btn btn-primary mt-3"
      >Torna·alla·Home</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
h1 {
  color: #ff6b6b;
}
</style>
