<template>
  <div
    class="modal fade"
    :id="'opinionModal' + id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Escribe tu opinion para el juego: <br />{{ game.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Nombre:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="nombre"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Opiniones</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Tu opinión debe ir aquí..."
              rows="3"
              v-model="opinion"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="eraseOpinion()"
          >
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="saveOpinion(game.name)"
            data-bs-dismiss="modal"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      nombre: "",
      opinion: "",
    };
  },
  props: {
    game: {
      type: Object,
      default: () => {},
    },
    id: {
      type: Number,
      default: null,
    },
  },

  methods: {
    ...mapMutations(["SET_OPINION"]),
    saveOpinion(game) {
      const newOpinion = {
        name: this.nombre,
        game: game,
        opinion: this.opinion,
      };
      this.SET_OPINION(newOpinion);
      this.eraseOpinion();
    },
    eraseOpinion() {
      this.nombre = "";
      this.opinion = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
