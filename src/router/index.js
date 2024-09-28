import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; // Importa la vista Home
import RicetteMaster from "../views/RicetteMaster.vue"; // Importa la vista delle ricette
import RicetteDetail from "@/views/RicetteDetail.vue"; // Assicurati che il percorso sia corretto
import NotFound from "../views/NotFound.vue"; // Assicurati che il percorso sia corretto

const routes = [
  {
    path: "/", // Rotta principale
    name: "home", // Nome della rotta
    component: HomeView, // Componente associato alla rotta
  },
  {
    path: "/about", // Rotta per la pagina "About"
    name: "about", // Nome della rotta
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"), // Lazy load della vista
  },
  {
    path: "/recipes", // Rotta per la lista delle ricette
    name: "recipes", // Nome della rotta
    component: RicetteMaster, // Collega la vista RicetteMaster
  },
  {
    path: "/recipe/:id", // Rotta per la pagina di dettaglio della singola ricetta
    name: "recipe-detail", // Nome della rotta
    component: RicetteDetail, // Collega la vista RicetteDetail
    props: true, // Passa l'ID della ricetta come props
  },
  {
    path: "/:pathMatch(.*)*", // Questa rotta cattura tutte le rotte non definite
    name: "NotFound", // Nome della rotta
    component: NotFound, // Collega la vista NotFound
  },
];

// Crea l'istanza del router
const router = createRouter({
  history: createWebHistory(), // Usa createWebHistory per rimuovere l'hash dalla URL
  routes, // Assegna le rotte definite
});

export default router; // Esporta l'istanza del router
