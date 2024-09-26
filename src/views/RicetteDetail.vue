<template>
  <div class="container mt-4">
    <img :src="recipe.image" class="img-fluid mb-4" alt="Immagine Ricetta" />

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

    <router-link to="/recipes" class="btn btn-secondary mt-3">
      Torna alla lista delle ricette
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {}, // Qui verranno caricati i dettagli della ricetta
    };
  },
  mounted() {
    const recipeId = this.$route.params.id;

    const allRecipes = [
      {
        id: 1,
        title: "Fette di cavolfiore filanti con salsa verde e pomodorini",
        description:
          "Le fette di cavolfiore filanti sono gustosissime bisteccone vegetariane guarnite con formaggio (facoltativo), salsa verde e pomodorini. Un accordo di sapori carnoso e fresco allo stesso tempo.",
        image: "https://via.placeholder.com/300x200",
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
          "Preriscaldate il forno a 180°. Tagliate a grosse fette (1,5 cm/2 cm di spessore) un cavolfiore e disponetele su una placca da forno foderata con la carta, ungendo con olio evo le fette da ambo le parti. " +
          "Versate nella teglia mezzo bicchiere di acqua, avendo cura che rimanga sulla carta da forno. Spolverate di sale e infornate. " +
          "Nel frattempo occupatevi della salsa verde: in un mixer unite le foglie di prezzemolo, una fetta di pane (o del pane raffermo) bagnato con aceto e strizzato, uno spicchio di aglio schiacciato, i capperi, 6 cucchiai di olio, sale e pepe. Frullate fino ad ottenere una salsa verde liscia e cremosa. " +
          "Sfornate i cavolfiori dopo 20-25 minuti quando cotti. Disponete sopra qualche fettina di scamorza e infornate nuovamente solo per fondere il formaggio. " +
          "Mentre la scamorza si scioglie, affettate i pomodorini a spicchi e conditeli con olio e sale. " +
          "Sfornate le fette di cavolfiore con formaggio filante e disponete sopra qualche cucchiaiata di salsa verde, infine i pomodorini e una spolverata di pepe.",
      },
      {
        id: 2,
        title: "Lasagna alla Bolognese",
        description: "Lasagna ricca con ragù alla bolognese e besciamella.",
        image: "https://via.placeholder.com/300x200",
        cookingTime: "1 ora e 30 minuti",
        ingredients: [
          "400g Pasta fresca per lasagna",
          "300g Ragù alla bolognese",
          "200g Besciamella",
          "100g Parmigiano Reggiano",
        ],
        instructions:
          "Prepara il ragù, la besciamella e assembla la lasagna con strati di pasta, ragù e formaggio.",
      },
      {
        id: 3,
        title: "Pizza Margherita",
        description: "Pizza classica con pomodoro, mozzarella e basilico.",
        image: "https://via.placeholder.com/300x200",
        cookingTime: "20 minuti",
        ingredients: [
          "300g Impasto per pizza",
          "100g Salsa di pomodoro",
          "200g Mozzarella",
          "Basilico fresco",
          "Olio extravergine d'oliva",
          "Sale",
        ],
        instructions:
          "Stendi l'impasto, aggiungi il pomodoro, la mozzarella e cuoci in forno a 250°C per 10-12 minuti.",
      },
      // Aggiungi altre ricette qui...
    ];

    // Trova la ricetta in base all'ID
    this.recipe = allRecipes.find((r) => r.id == recipeId) || {};
  },
};
</script>

<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
