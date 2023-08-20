import Vuex from "vuex";
import Vue from "vue";
import test from "./modules/test";
import quiz from "./modules/quiz";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    test: {
      ...test,
      namespaced: true,
    },
    quiz: {
      ...quiz,
      namespaced: true,
    }
  }
});