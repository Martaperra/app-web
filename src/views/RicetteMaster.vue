<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Le nostre Ricette</h1>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="ricetta in ricette" :key="ricetta.id">
        <div class="card h-100">
          <img
            :src="ricetta.image"
            class="card-img-top"
            alt="Immagine Ricetta"
          />
          <div class="card-body">
            <h5 class="card-title">{{ ricetta.title }}</h5>
            <p class="card-text">{{ ricetta.description }}</p>
            <p><strong>Tempo di cottura:</strong> {{ ricetta.cookingTime }}</p>
            <router-link :to="`/recipe/${ricetta.id}`" class="btn btn-primary">
              Dettagli Ricetta
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ricette: [
        {
          id: 1,
          title: "Fette di cavolfiore filanti con salsa verde e pomodorini",
          description:
            "Le fette di cavolfiore filanti sono gustosissime bisteccone vegetariane guarnite con formaggio (facoltativo), salsa verde e pomodorini. Un accordo di sapori carnoso e fresco allo stesso tempo.",
          image: "https://via.placeholder.com/300x200", // Placeholder per ora, correggi con un URL reale
          cookingTime: "40 minuti",
        },
        {
          id: 2,
          title: "Polpette di ceci e barbabietole",
          description:
            "Le polpette! Le adoro, sono uno di quei comfort food a cui non so proprio dire di no.",
          image: "https://via.placeholder.com/300x200", // Usa un URL reale per l'immagine
          cookingTime: "1 ora e 30 minuti",
        },
        {
          id: 3,
          title: "Lasagne vegane",
          description:
            "La ricetta del grande classico rivisitato in chiave vegan.",
          image: "https://via.placeholder.com/300x200", // Placeholder, sostituisci con URL valido
          cookingTime: "2 ore",
        },
        // Aggiungi altre ricette qui...
      ],
    };
  },
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
