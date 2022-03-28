<template>
  <div>
    <h1 class="text-center">Editando las opiniones de: JUEGO</h1>
    <div class="m-4 p-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="this.myOpinions[this.myOpinion].name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Opiniones</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="this.myOpinions[this.myOpinion].opinion"
        ></textarea>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary me-3">
          <router-link
            class="text-white text-decoration-none"
            to="/administracion"
            >Regresar</router-link
          >
        </button>
        <button @click="click" class="btn btn-info">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      nombre: "jeyker",
    };
  },
  methods: {
    click() {
      console.log("Holis");
    },
  },
  computed: {
    ...mapState(["myOpinions"]),
    myOpinion() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
