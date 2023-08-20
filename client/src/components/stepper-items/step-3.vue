<template>
  <div>
    <div
      v-for="(item, index) in response"
      :key="index"
    >
      <span>{{ item.title }}</span>
      <div
        v-for="(answer, annsindex) in item.alternatives"
        :key="annsindex"
        @click="handleAlternativeClick(item, answer)"
      >
        <span>{{ answer }}</span>
      </div>
    </div>

    <v-divider />
  </div>
</template>

<script>
  export default {
    name: 'Step3Item',
    data() {
      return {
        rightAnswers: 0,
        response: [
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
        ]
      }
    },
    computed:{
      answers() {
        return this.rightAnswers === this.response.length
      }
    },
    methods: {
      handleAlternativeClick(item, answer){
        console.log(answer)
        if (answer === item.answer) {
          this.rightAnswers++;
          console.log("acertou");
        }
      }
    }
  }
</script>
<style>
</style>
