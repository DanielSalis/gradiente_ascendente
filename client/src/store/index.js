import Vuex from "vuex";
import Vue from "vue";
import test from "./modules/test";

Vue.use(Vuex);

//new store
export default new Vuex.Store({
  modules: {
    test: {
      ...test,
      namespaced: true,
    }
  }
});