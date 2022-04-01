<template>
  <div>
    <h1 class="text-center">
      Editando las opiniones de: {{ myOpinions[myOpinion].game }}
    </h1>
    <div class="m-4 p-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="newName"
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
          v-model="newOpinion"
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
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      nombre: "",
      opinion: "",
    };
  },
  methods: {
    ...mapMutations(["EDIT_OPINION"]),
    click() {
      this.EDIT_OPINION({
        i: this.$route.params.id,
        name: this.nombre,
        opinion: this.opinion,
      });
      alert("Opinión modificada con éxito");
      this.$router.push("/administracion");
    },
  },
  computed: {
    ...mapState(["myOpinions"]),
    myOpinion() {
      return this.$route.params.id;
    },
    newName: {
      get() {
        return this.myOpinions[this.myOpinion].name;
      },
      set(value) {
        this.nombre = value;
      },
    },
    newOpinion: {
      get() {
        return this.myOpinions[this.myOpinion].opinion;
      },
      set(value) {
        this.opinion = value;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
