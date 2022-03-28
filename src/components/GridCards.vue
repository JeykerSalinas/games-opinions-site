<template>
  <div class="row m-4">
    <h2 class="display-4">Lista de Juegos Disponibles</h2>
    <div
      class="co-12 col-md-6 col-lg-4 my-4"
      v-for="(game, i) in myData"
      :key="i"
    >
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'opinionModal' + i"
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
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="saveOpinion(game.name)"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--card-->
      <div class="card w-auto" style="width: 18rem">
        <img :src="game.background_image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rating: {{ game.rating }}</li>
          <li class="list-group-item">Released: {{ game.released }}</li>
          <li class="list-group-item">Update: {{ game.updated }}</li>
        </ul>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#opinionModal' + i"
          >
            Opinar
          </button>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "GridCards",
  data() {
    return {
      nombre: "",
      opinion: "",
    };
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
    },
  },
  props: {
    myData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
