<template>
  <div class="">
    <h2 class="display-4 m-4 p-4">Lista de opiniones</h2>
    <div v-if="myOpinions.length === 0" class="m-4">
      <div class="alert alert-danger m-4 text-start" role="alert">
        No existen opiniones por mostrar.
      </div>
    </div>
    <div v-else>
      <AccordionOpinions :opinions="myOpinions" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AccordionOpinions from "../components/AccordionOpinions.vue";
export default {
  name: "OpinionesView",
  computed: {
    ...mapState(["myOpinions"]),
  },
  components: { AccordionOpinions },
};
</script>
