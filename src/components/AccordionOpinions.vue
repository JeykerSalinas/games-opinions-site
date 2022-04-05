<template>
  <div class="m-4 p-4">
    <div class="accordion accordion-flush" id="accordionOpinion">
      <div v-for="(opinion, i) in opinions" :key="i" class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            :data-bs-target="'#collapse' + i"
          >
            Opinión creada por: {{ opinion.name }}. Para el juego:
            {{ opinion.game }}
          </button>
        </h2>
        <div
          :id="'collapse' + i"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionOpinion"
        >
          <div class="accordion-body text-start">
            <span class="fw-bold">Opinion: </span>{{ opinion.opinion }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionOpinions",
  props: {
    opinions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
