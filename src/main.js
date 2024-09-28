import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importa BootstrapVue 3
import BootstrapVue3 from "bootstrap-vue-3";

// Importa Bootstrap e BootstrapVue 3 CSS e JS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"; // Corretto ora che il pacchetto è installato
import "bootstrap/dist/js/bootstrap.bundle.js"; // Include Bootstrap + Popper

const app = createApp(App);

// Usa BootstrapVue 3 nel tuo progetto Vue.js
app.use(router);
app.use(store);
app.use(BootstrapVue3); // Inizializza BootstrapVue 3

app.mount("#app"); // Monta l'app Vue
