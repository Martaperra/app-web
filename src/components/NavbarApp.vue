<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img
        src="@/assets/logo.png"
        alt="Logo"
        width="30"
        height="30"
        class="d-inline-block align-text-top me-2"
      />
    </a>
    <a class="navbar-brand" href="#">Cucina Vegana</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/recipes"
            >Lista delle ricette</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contatti">Contatti</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarApp",
};
</script>

<style scoped>
/* Aggiungi eventuali stili personalizzati per la navbar */
</style>
