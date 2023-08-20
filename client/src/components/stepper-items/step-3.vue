<template>
  <div>
    <div
      v-for="(item, index) in quiz"
      :key="index"
    >
      <h4 class="trivia_question">
        {{ item.id }} - {{ item.text }}
      </h4>

      <v-radio-group v-model="selectedOption[index]">
        <v-radio
          v-for="(option, optionIndex) in item.options"
          :key="optionIndex"
          :label="`${option.id}) ${option.text}`"
          :value="option.id"
          @change="setAnswers(selectedOption)"
        />
      </v-radio-group>
    </div>

    <v-divider />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Step3Item',
    data() {
      return {
        selectedOption: [],
      }
    },
    computed:{
      ...mapState('content', ['quiz']),
    },
    methods: {
      ...mapActions('content', ['setAnswers']),
    }
  }
</script>
<style>
.trivia_question {
  text-align: left;
}
</style>
