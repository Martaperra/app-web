<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Le nostre ricette</h1>

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

    <button class="btn btn-secondary" @click="openForm">
      Carica la tua foto
    </button>

    <!-- Assicurati che il ref sia impostato correttamente -->
    <FormComponent ref="form" />
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import GozlemeImage from "@/assets/GozlemeImage.jpg";
import PolpetteImage from "@/assets/PolpetteImage.jpg";
import LasagnaImage from "@/assets/LasagnaImage.jpg";

export default {
  name: "RicetteMaster",
  components: {
    FormComponent,
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
            "Le polpette! Le adoro, sono uno di quei comfort food a cui non so proprio dire di no.",
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
      this.$refs.form.openForm(); // Chiama il metodo openForm sul componente
    },
  },
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
