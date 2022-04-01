<template>
  <div class="row m-4">
    <h2 class="display-4">Lista de Juegos Disponibles</h2>
    <div
      class="co-12 col-md-6 col-lg-4 my-4"
      v-for="(game, i) in myData"
      :key="i"
    >
      <!-- Modal -->
      <OpinionModal :game="game" :id="i" />
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
import OpinionModal from "./OpinionModal.vue";
export default {
  name: "GridCards",
  components: {
    OpinionModal,
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
