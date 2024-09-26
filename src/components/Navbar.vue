<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <router-link class="nav-link" to="/ricette-vegane"
            >Ricette Vegane</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categorie
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/antipasti"
              >Antipasti</router-link
            >
            <router-link class="dropdown-item" to="/primi-piatti"
              >Primi Piatti</router-link
            >
            <router-link class="dropdown-item" to="/secondi-piatti"
              >Secondi Piatti</router-link
            >
            <router-link class="dropdown-item" to="/dolci">Dolci</router-link>
          </div>
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
  name: "AppNavbar",
};
</script>

<style scoped>
/* Aggiungi eventuali stili personalizzati per la navbar qui */
</style>
