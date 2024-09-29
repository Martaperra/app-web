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
  background-color: #4cae4c; /* Verde per il footer */
  margin-top: 50px;
}

.footer-container p {
  margin: 0;
}

.breadcrumb-item a {
  text-decoration: none;
  color: #348634;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.newsletter-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra il contenuto orizzontalmente */
  max-width: 500px; /* Limita la larghezza del contenitore della newsletter */
  margin: 20px auto; /* Centra il contenitore con margine sopra e sotto */
}

.input-group {
  display: flex;
  align-items: center; /* Allinea verticalmente gli elementi nel gruppo */
  gap: 10px; /* Spazio tra la barra di inserimento e il pulsante */
}

.btn-custom {
  background-color: #4cae4c; /* Verde per il pulsante */
  color: white;
  border: none;
  border-radius: 25px; /* Bordi completamente arrotondati */
  cursor: pointer;
  padding: 10px 15px; /* Spaziatura del pulsante */
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: #3e913b; /* Verde più scuro al passaggio del mouse */
}

.form-control {
  width: 200px; /* Imposta una larghezza fissa per il campo email */
  border-radius: 25px; /* Bordi arrotondati per il campo email */
}
</style>
