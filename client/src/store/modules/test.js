 const state = {
  test: true,
};

const getters = {
  getTest: (state)=> state.test
}

const mutations = {
  setTest (state, value) {
    state.test = value
  }
}

const actions = {
  async setTest(state, value) {
    state.commit("setTest", value);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};

// import { createStore } from 'vuex'
// export const store = createStore({
//   state () {
//     return {
//       test: 0
//     }
//   },
//   mutations: {
//     setTest (state, value) {
//       state.test = value
//     }
//   },
//   actions: {
//       async setTest(state, value) {
//     state.commit("setTest", value);
//   },
//   }
// })