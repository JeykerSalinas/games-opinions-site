import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myData: [],
  },
  getters: {},
  mutations: {
    SET_DATA(state, payload) {
      state.myData = payload;
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
