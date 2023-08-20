import { api } from '../../utils/api';

 const state = {
  content: null,
  quiz: [],
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
  },
  setContent (state, value) {
    state.content = value
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
  async fetchContent(state, contentUrl) {
    await api.post("/content/resume-and-trivia", { contentUrl })
      .then((response) => {
        const { data } = response
        console.log(data);

        const { resume, trivia } = data;
        state.commit("setContent", resume);
        state.commit("setQuiz", trivia);
        return data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      })
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};
