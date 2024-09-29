<template>
  <footer class="footer-container text-center py-4 mt-5">
    <p>&copy; 2024 Blog di Cucina Vegana. Tutti i diritti riservati.</p>

    <div
      class="newsletter-container shadow-sm p-3 mb-5 bg-body-tertiary rounded"
    >
      <form
        action="mailto:info@cucinavegana.com"
        method="post"
        enctype="text/plain"
      >
        <p><strong>Iscriviti alla nostra Newsletter:</strong></p>
        <div class="input-group">
          <label for="email" class="mr-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Inserisci la tua e-mail"
            required
            class="form-control"
          />
          <input class="btn btn-custom" type="submit" value="Iscriviti" />
        </div>
      </form>
    </div>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-center">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/ricette">Lista delle ricette</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/not-found">Contattaci</router-link>
        </li>
      </ol>
    </nav>
    <p class="text-muted">info@cucinavegana.com | +39 055 234 567</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-container {
  background-color: #4cae4c;
  margin-top: 50px;
}

.footer-container p {
  margin: 0;
}

.breadcrumb-item a {
  text-decoration: none;
  color: #384138;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.newsletter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 20px auto;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-custom {
  background-color: #4cae4c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: #3e913b;
}

.form-control {
  width: 200px;
  border-radius: 5px;
}
</style>
