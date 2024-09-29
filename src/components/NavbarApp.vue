<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand d-flex align-items-center">
      <img
        src="@/assets/logo.png"
        alt="Logo"
        width="30"
        height="30"
        class="d-inline-block align-text-top me-2"
      />
      Cucina Vegana
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
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
