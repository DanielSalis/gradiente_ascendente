 const state = {
  quiz: [
    {
      'title': 'Teste',
      'alternatives': [
        "a) teste teste",
        "b) teste teste 2",
        "c) teste teste 3",
      ],
      'answer': 'a) teste teste'
    },
    {
      'title': 'Teste2',
      'alternatives': [
        "a) teste teste",
        "b) teste teste 2",
        "c) teste teste 3",
      ],
      'answer': 'a) teste teste'
    }
  ],
  answers: [],
  rightAnswers: 0,
};

const getters = {
  getQuiz: (state) => state.quiz
}

const mutations = {
  setQuiz (state, value) {
    state.quiz = value
  },
  setAnswers (state, value) {
    state.answers = value
  },
  setRightAnswers (state, value) {
    state.rightAnswers = value
  }
}

const actions = {
  setQuiz(state, value) {
    state.commit("setQuiz", value);
  },
  setAnswers(state, value) {
    state.commit("setAnswers", value);
  },
  savePoints(state, value) {
    // salvar o numero de respostas certas como pontos no banco
    state.commit("setRightAnswers", value);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};
