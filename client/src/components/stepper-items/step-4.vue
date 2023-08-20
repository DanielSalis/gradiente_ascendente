<template>
  <div>
    <h3>Parabéns! Você acertou {{ rightAnswers }} de {{ quiz.length }} questões e ganhou {{ rightAnswers }} pontos</h3>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Step4Item',
    computed: {
      ...mapState('quiz', ['quiz', 'rightAnswers']),
    }
  }
</script>
