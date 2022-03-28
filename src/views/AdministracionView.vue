<template>
  <div class="">
    <h2 class="display-4 m-4 p-4 text-center">
      Administrando la Lista de opiniones
    </h2>
    <div v-if="myOpinions.length === 0" class="m-4">
      <div class="alert alert-danger m-4" role="alert">
        No existen opiniones por administrar.
      </div>
    </div>
    <div v-else><TableOpinions :opinions="myOpinions" /></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TableOpinions from "../components/TableOpinions.vue";
export default {
  computed: {
    ...mapState(["myOpinions"]),
  },
  components: {
    TableOpinions,
  },
};
</script>

<style lang="scss" scoped></style>
