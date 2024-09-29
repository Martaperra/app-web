<template>
  <div>
    <h2 class="text-center mb-4" style="color: green">Cerca Ricette</h2>

    <div
      class="text-center mb-3 d-flex justify-content-center align-items-center"
    >
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Cerca una ricetta..."
        class="form-control me-2"
      />
      <button class="btn-custom btn btn-primary" @click="performSearch">
        Cerca
      </button>
    </div>

    
    <div v-if="showResults" class="text-center">
      <h3>Risultati della ricerca per "{{ searchQuery }}"</h3>
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
      <button class="btn btn-secondary mt-3" @click="resetSearch">
        Nascondi Risultati
      </button>
    </div>
  </div>
</template>

<script>
import LasagnaImage from "@/assets/LasagnaImage.jpg";
import PolpetteImage from "@/assets/PolpetteImage.jpg";
import GozlemeImage from "@/assets/GozlemeImage.jpg";

export default {
  data() {
    return {
      searchQuery: "",
      showResults: false,
      recipes: [
        {
          id: 1,
          name: "Lasagna vegana",
          description: "Una deliziosa lasagna con ingredienti vegetali",
          image: LasagnaImage,
        },
        {
          id: 2,
          name: "Polpette veg con barbabietola",
          description: "Gustose e semplici da preparare",
          image: PolpetteImage,
        },
        {
          id: 3,
          name: "Gozleme",
          description: "Uno snack gustoso e leggero",
          image: GozlemeImage,
        },
      ],
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter((recipe) => {
        return recipe.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    performSearch() {
      this.showResults = !!this.searchQuery;

      if (this.showResults) {
        setTimeout(() => {
          this.resetSearch();
        }, 3000);
      }
    },
    resetSearch() {
      this.searchQuery = "";
      this.showResults = false;
    },
  },
};
</script>

<style scoped>
.form-control {
  max-width: 400px;
  margin: 0;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}

h2 {
  margin-top: 20px;
}

.btn-custom {
  background-color: #5cb85c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-custom:hover {
  background-color: #4cae4c;
  transform: scale(1.05);
}

.btn-custom:active {
  background-color: #4cae4c;
  transform: scale(0.98);
}

.btn-custom:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
