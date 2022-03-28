<template>
  <div class="row m-4">
    <div
      class="co-12 col-md-6 col-lg-4 my-4"
      v-for="game in myData"
      :key="game.name"
    >
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
          <button class="btn btn-primary">Opinar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridCards",
  props: {
    myData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
