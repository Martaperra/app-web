<template>
  <div v-if="showForm" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Carica la foto</h5>
          <button type="button" class="close" @click="closeForm">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <p>Carica la foto della ricetta e scrivici che ne pensi.</p>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="file">Carica la foto</label>
              <input type="file" id="file" v-on="photo" class="form-control" />
            </div>

            <div class="form-group">
              <label for="comment">Lascia un commento alla foto</label>
              <textarea
                id="comment"
                v-model="comment"
                class="form-control"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="name">Il tuo nome</label>
              <input
                type="text"
                id="name"
                v-model="name"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Il tuo indirizzo email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-control"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary mt-3">
              Invia la foto
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      photo: null,
      comment: "",
      name: "",
      email: "",
    };
  },
  methods: {
    openForm() {
      this.showForm = true; // Mostra il modulo
    },
    closeForm() {
      this.showForm = false; // Nascondi il modulo
    },
    submitForm() {
      console.log("Form submitted!", {
        photo: this.photo,
        comment: this.comment,
        name: this.name,
        email: this.email,
      });
      this.closeForm(); // Chiudi il modulo dopo l'invio
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
