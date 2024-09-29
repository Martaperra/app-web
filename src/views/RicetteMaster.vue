<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4" style="color: #419043">Le nostre ricette</h1>

    <!-- Card grid responsivo -->
    <div class="row">
      <div
        class="col-md-6 col-lg-4 mb-4"
        v-for="ricetta in ricette"
        :key="ricetta.id"
      >
        <div class="card recipe-card h-100">
          <img
            :src="ricetta.image"
            class="card-img-top recipe-img"
            alt="Immagine Ricetta"
          />
          <div class="card-body">
            <h5 class="card-title">{{ ricetta.title }}</h5>
            <p class="card-text">{{ ricetta.description }}</p>
            <p><strong>Tempo di cottura:</strong> {{ ricetta.cookingTime }}</p>
            <router-link
              :to="`/recipe/${ricetta.id}`"
              class="btn-custom btn btn-primary"
            >
              Dettagli Ricetta
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <button
      class="btn-custom btn btn-primary mt-2"
      text="color: #419043"
      @click="openForm"
    >
      Carica la tua foto
    </button>

    <FormComponent ref="form" />
    <ScrollToTop></ScrollToTop>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import GozlemeImage from "@/assets/GozlemeImage.jpg";
import PolpetteImage from "@/assets/PolpetteImage.jpg";
import LasagnaImage from "@/assets/LasagnaImage.jpg";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  name: "RicetteMaster",
  components: {
    FormComponent,
    ScrollToTop,
  },
  data() {
    return {
      ricette: [
        {
          id: 1,
          title: "Gozleme - spinaci e formaggio vegetale",
          description:
            "Uno snack gustoso e leggero, per chi non ama i sapori strong!",
          image: GozlemeImage,
          cookingTime: "40 minuti",
        },
        {
          id: 2,
          title: "Polpette di ceci e barbabietole",
          description:
            "Un secondo facile e veloce da preparare",
          image: PolpetteImage,
          cookingTime: "1 ora e 30 minuti",
        },
        {
          id: 3,
          title: "Lasagne vegane",
          description:
            "Lasciatevi stupire dalla ricetta del grande classico rivisitato in chiave vegan.",
          image: LasagnaImage,
          cookingTime: "2 ore",
        },
      ],
    };
  },
  methods: {
    openForm() {
      this.$refs.form.openForm();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px; /* Mantiene un limite massimo della larghezza */
}

/* Card e immagine responsive */
.recipe-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transizione per l'effetto hover */
}

.recipe-card:hover {
  transform: scale(
    1.05
  ); /* Ingrandisci leggermente la card al passaggio del mouse */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Ombra più profonda */
}

.recipe-img {
  width: 100%;
  max-height: 200px; /* Limite di altezza per le immagini */
  object-fit: cover; /* Le immagini si adattano bene alla card */
  transition: transform 0.3s ease; /* Transizione per l'effetto hover */
}

.recipe-card:hover .recipe-img {
  transform: scale(
    1.05
  ); /* Ingrandisci l'immagine leggermente al passaggio del mouse */
}

h1 {
  font-size: 2rem;
  color: #419043;
}

p {
  color: #666;
  font-size: 1.1rem;
}

.btn-custom {
  background-color: #4cae4c; /* Colore verde */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-custom:hover {
  background-color: #3e913b; /* Colore verde più scuro al passaggio del mouse */
}
</style>
