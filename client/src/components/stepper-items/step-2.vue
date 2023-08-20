<template>
  <div v-if="content">
    <p>{{ content }}</p>

    <v-divider />

    <h4 class="mt-4">
      Quer ganhar pontos? Responda o Quiz
    </h4>
  </div>

  <p v-else>
    Não foi possível obter o resultado, tente novamente mais tarde.
  </p>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Step2Item',
    computed:{
      ...mapState('content', ['content']),
    },
  }
</script>
