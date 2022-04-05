import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myData: [],
    myOpinions: [],
  },
  getters: {},
  mutations: {
    SET_DATA(state, payload) {
      state.myData = payload;
    },
    SET_OPINION(state, payload) {
      state.myOpinions.push(payload);
    },
    DELETE_OPINION(state, payload) {
      state.myOpinions.splice(payload, 1);
    },
    EDIT_OPINION(state, payload) {
      state.myOpinions[payload.i].name = payload.name;
      state.myOpinions[payload.i].opinion = payload.opinion;
    },
  },
  actions: {
    async getData({ commit }) {
      const response = await fetch("./games.json");
      const data = await response.json();
      commit("SET_DATA", data);
    },
  },
  modules: {},
});
