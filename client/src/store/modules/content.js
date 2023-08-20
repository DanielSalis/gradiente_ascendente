// import { api } from '../../utils/api';

 const state = {
  content: "",
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
  async fetchContent(state, urlParam) {
    // const response = await api.get("/get", urlParam)
    console.log(urlParam)

    // const { summary, quiz } = response;
    const { summary, questions } = {
      questions: [
        {
          'question': 'Teste',
          'options': [
            "a) teste teste",
            "b) teste teste 2",
            "c) teste teste 3",
          ],
          'answer': 'a) teste teste'
        },
        {
          'question': 'Teste2',
          'options': [
            "a) teste teste",
            "b) teste teste 2",
            "c) teste teste 3",
          ],
          'answer': 'a) teste teste'
        }
      ],
      summary: "bla bla bla"
    }

    console.log(questions);
    state.commit("setContent", summary);
    state.commit("setQuiz", questions);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};
