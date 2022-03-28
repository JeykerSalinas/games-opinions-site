<template>
  <div class="home">
    <GridCards :myData="myData" />
  </div>
</template>

<script>
// @ is an alias to /src
import GridCards from "@/components/GridCards.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState(["myData"]),
  },
  components: {
    GridCards,
  },
};
</script>
