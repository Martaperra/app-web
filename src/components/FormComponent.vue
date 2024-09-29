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
          <p>
            <strong
              >Carica la foto della ricetta e raccontaci la tua
              esperienza!</strong
            >
          </p>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="file">Carica la foto*</label>
              <input
                type="file"
                id="file"
                @change="handleFileUpload"
                class="form-control"
                required
                aria-label="Carica la foto"
              />
            </div>

            <div class="form-group">
              <label for="comment">Lascia un commento alla foto</label>
              <textarea
                id="comment"
                v-model="comment"
                class="form-control"
                placeholder="Scrivi qui il tuo commento..."
                aria-label="Commento"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="name">Il tuo nome*</label>
              <input
                type="text"
                id="name"
                v-model="name"
                class="form-control"
                required
                placeholder="Inserisci il tuo nome..."
                aria-label="Nome"
              />
            </div>

            <div class="form-group">
              <label for="email">Il tuo indirizzo email*</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-control"
                required
                placeholder="Inserisci la tua email..."
                aria-label="Email"
              />
            </div>

            <div class="text-center mt-3">
              <button
                type="submit"
                class="btn btn-submit"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Invio..." : "Invia la foto" }}
              </button>
            </div>
          </form>
          <p v-if="submissionSuccess" class="text-success mt-3">
            Grazie per aver inviato la tua foto!
          </p>
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
      isSubmitting: false,
      submissionSuccess: false,
    };
  },
  methods: {
    openForm() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
      this.resetForm();
    },
    resetForm() {
      this.photo = null;
      this.comment = "";
      this.name = "";
      this.email = "";
      this.isSubmitting = false;
      this.submissionSuccess = false;
    },
    handleFileUpload(event) {
      this.photo = event.target.files[0];
    },
    async submitForm() {
      this.isSubmitting = true;

      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted!", {
        photo: this.photo,
        comment: this.comment,
        name: this.name,
        email: this.email,
      });
      this.submissionSuccess = true;
      this.isSubmitting = false;
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

.modal-content {
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.btn-submit {
  background-color: #4cae4c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-submit:hover {
  background-color: #419043;
}

.btn-submit:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.text-center {
  text-align: center;
}
</style>
