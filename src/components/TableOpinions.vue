<template>
  <div class="m-4 p-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, i) in opinions" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ opinion.name }}</td>
          <td>{{ opinion.game }}</td>
          <td>{{ opinion.opinion }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteOpinion(opinion)">
              Eliminar
            </button>
          </td>
          <td>
            <button class="btn btn-info">
              <router-link :to="'/edit_opinion/' + (i + 1)">Editar</router-link>
            </button>
          </td>
        </tr>
      </tbody>
      <router-view></router-view>
    </table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TableOpinions",
  methods: {
    ...mapMutations(["DELETE_OPINION"]),
    deleteOpinion(opinion) {
      this.DELETE_OPINION(opinion);
    },
  },
  props: {
    opinions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
