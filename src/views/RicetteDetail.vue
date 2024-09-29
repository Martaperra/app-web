<template>
  <div class="container mt-4">
    <div class="row mb-4">
      <!-- Pulsante "Torna alla lista delle ricette" sopra l'immagine -->
      <div class="col-12 text-left">
        <router-link to="/recipes" class="btn-custom btn btn-primary">
          Torna alla lista delle ricette
        </router-link>
      </div>
    </div>

    <div class="row">
      <!-- Colonna per l'immagine -->
      <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <img
          :src="recipe.image"
          class="img-fluid recipe-img"
          alt="Immagine Ricetta"
        />
        <!-- Form per caricare immagini sotto la ricetta -->
        <FormComponent />
      </div>

      <!-- Colonna per i dettagli della ricetta -->
      <div class="col-lg-6 col-md-6 col-sm-12">
        <h1>{{ recipe.title }}</h1>
        <p><strong>Descrizione:</strong> {{ recipe.description }}</p>
        <p><strong>Tempo di cottura:</strong> {{ recipe.cookingTime }}</p>

        <p><strong>Ingredienti:</strong></p>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>

        <p><strong>Procedimento:</strong></p>
        <p>{{ recipe.instructions }}</p>

        <!-- Pulsante "Torna alla lista delle ricette" sotto la ricetta -->
        <router-link to="/recipes" class="btn-custom btn btn-primary mt-2">
          Torna alla lista delle ricette
        </router-link>
      </div>
    </div>

    <ScrollToTop />
  </div>
</template>

<script>
import GozlemeImage from "@/assets/GozlemeImage.jpg";
import PolpetteImage from "@/assets/PolpetteImage.jpg";
import LasagnaImage from "@/assets/LasagnaImage.jpg";
import ScrollToTop from "@/components/ScrollToTop.vue";
import FormComponent from "@/components/FormComponent.vue"; // Import del form

export default {
  components: {
    ScrollToTop, // Componente per tornare in cima alla pagina
    FormComponent, // Componente del form
  },

  data() {
    return {
      recipe: {}, // Dettagli della ricetta caricati dinamicamente
    };
  },

  mounted() {
    const recipeId = this.$route.params.id;

    const allRecipes = [
      {
        id: 1,
        title: "Gozleme",
        description:
          "Le fette di cavolfiore filanti sono gustosissime bisteccone vegetariane guarnite con formaggio (facoltativo), salsa verde e pomodorini.",
        image: GozlemeImage,
        cookingTime: "40 minuti",
        ingredients: [
          "1 cavolfiore",
          "15 pomodorini",
          "80 foglie di prezzemolo",
          "6 capperi sott'olio",
          "qb aceto",
          "qb Sale",
          "1 fetta di pane integrale",
          "10 cucchiai olio extravergine di oliva",
        ],
        instructions:
          "Preriscaldate il forno a 180°. Tagliate a grosse fette (1,5 cm/2 cm di spessore) un cavolfiore e disponetele su una placca da forno foderata con la carta...",
      },
      {
        id: 2,
        title: "Polpette di ceci e barbabietole",
        description:
          "Polpette saporite e nutrienti a base di ceci e barbabietole.",
        image: PolpetteImage,
        cookingTime: "1 ora",
        ingredients: [
          "100 g barbabietole rosse, cotte, bollite",
          "100 g ceci in scatola (peso sgocciolato, già lessati)",
          "20 g pane grattugiato",
          "10 g senape",
          "1 cucchiaio olio extravergine d’oliva",
          "q.b. sale fino e spezie a piacere",
        ],
        instructions:
          "Per preparare le polpette di ceci e barbabietole, scolate e risciacquate bene i ceci precotti. Tagliate le barbabietole già cotte a pezzi più piccoli e unitele ai ceci in un tritatutto. Tritate fino a ottenere una purea omogenea. Trasferite il composto in una ciotola e aggiungete il pane grattugiato, la senape, il sale e il pepe, mescolando bene. Con le mani leggermente umide, formate delle polpette grandi come una noce. Disponetele nel cestello della friggitrice ad aria su un foglio di carta forno e cuocetele a 180°C per 15 minuti, girandole a metà cottura. Servite le polpette ben calde, accompagnandole con il contorno o la salsa che preferite.",
      },
      {
        id: 3,
        title: "Lasagna vegana",
        description:
          "La versione vegana del grande classico della cucina italiana.",
        image: LasagnaImage,
        cookingTime: "1 ora e 20 minuti",
        ingredients: [
          "300g Pasta fresca per lasagna",
          "100g Ragù vegetale",
          "200g Besciamella vegana",
          "100g Formaggio vegano",
        ],
        instructions:
          "Prepara il ragù e la besciamella vegana. Assembla la lasagna alternando strati di pasta, ragù e formaggio. Cuoci in forno a 180°C per 40 minuti.",
      },
    ];

    // Trova la ricetta in base all'ID
    this.recipe = allRecipes.find((r) => r.id == recipeId) || {};
  },
};
</script>

<style scoped>
/* Ottimizzazione delle dimensioni dell'immagine */
.recipe-img {
  width: 100%;
  max-height: 300px; /* Limitiamo l'altezza massima per rendere l'immagine più compatta */
  object-fit: cover; /* Manteniamo le proporzioni dell'immagine */
  border-radius: 10px; /* Angoli arrotondati */
  margin-bottom: 20px; /* Spaziatura sotto l'immagine */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Aggiunta di ombra per dare profondità */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animazione transizioni */
}

h1 {
  font-size: 2rem;
  color: #419043; /* Verde scuro per il titolo */
}

p {
  color: #666; /* Grigio per il testo */
  font-size: 1.1rem; /* Leggermente più grande per la leggibilità */
}

ul {
  padding-left: 20px; /* Spaziatura standard per le liste */
}

li {
  font-size: 1rem; /* Font delle liste coerente con il resto del testo */
  line-height: 1.5; /* Migliora la leggibilità */
}

.container {
  max-width: 1200px; /* Limite massimo di larghezza per contenere il layout */
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem; /* Ridimensionamento per schermi più piccoli */
  }

  p,
  li {
    font-size: 0.9rem; /* Testo più piccolo per dispositivi mobili */
  }
}

/* Stile del pulsante personalizzato */
.btn-custom {
  background-color: #4cae4c; /* Verde per il pulsante */
  color: white; /* Testo bianco per il pulsante */
  border: none; /* Rimuove i bordi */
  border-radius: 5px; /* Angoli arrotondati */
  cursor: pointer; /* Puntatore mouse per clic */
  padding: 10px 20px; /* Spaziatura interna del pulsante */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Effetti hover */
}

/* Effetto hover per il pulsante */
.btn-custom:hover {
  background-color: #3e913b; /* Verde più scuro al passaggio del mouse */
}
</style>
