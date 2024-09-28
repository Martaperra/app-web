<template>
  <div>
    <h2 class="text-center mb-4">Cerca Ricette</h2>

    <div class="text-center mb-3">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Cerca una ricetta..."
        class="form-control"
      />
      <button class="btn btn-primary mt-2" @click="performSearch">Cerca</button>
    </div>

    <!-- Mostra i risultati solo dopo che la ricerca è stata eseguita -->
    <div v-if="showResults">
      <h3 class="text-center">
        Risultati della ricerca per "{{ searchQuery }}"
      </h3>
      <div class="row">
        <div
          class="col-md-4"
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
        >
          <div class="card mb-4">
            <img :src="recipe.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ recipe.name }}</h5>
              <p class="card-text">{{ recipe.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importa le immagini dal percorso corretto
import LasagnaImage from "@/assets/LasagnaImage.jpg";
import PolpetteImage from "@/assets/PolpetteImage.jpg";
import GozlemeImage from "@/assets/GozlemeImage.jpg";

export default {
  data() {
    return {
      searchQuery: "",
      showResults: false, // Variabile per controllare se mostrare i risultati
      recipes: [
        {
          id: 1,
          name: "Lasagna vegana",
          description: "Una deliziosa lasagna con ingredienti vegetali",
          image: LasagnaImage, // Usa l'immagine importata
        },
        {
          id: 2,
          name: "Polpette veg con barbabietola",
          description: "Gustose e semplici da preparare",
          image: PolpetteImage, // Usa l'immagine importata
        },
        {
          id: 3,
          name: "Gozleme",
          description: "Uno snack gustoso e leggero",
          image: GozlemeImage, // Usa l'immagine importata
        },
      ],
    };
  },
  computed: {
    filteredRecipes() {
      // Filtra le ricette in base alla query di ricerca
      return this.recipes.filter((recipe) => {
        return recipe.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    performSearch() {
      // Mostra i risultati solo se c'è una query di ricerca
      this.showResults = !!this.searchQuery;
    },
  },
};
</script>

<style scoped>
.form-control {
  max-width: 400px;
  margin: 0 auto;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}

h2 {
  margin-top: 20px;
}
</style>
