<template>
  <div>
    <div
      v-for="(item, index) in quiz"
      :key="index"
    >
      <h4>{{ item.question }}</h4>

      <v-radio-group v-model="selectedOption[index]">
        <v-radio
          v-for="(option, optionIndex) in item.options"
          :key="optionIndex"
          :label="option"
          :value="option"
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
      answers() {
        return this.rightAnswers === this.response.length
      }
    },
    methods: {
      ...mapActions('content', ['setAnswers']),
    }
  }
</script>
<style>
</style>
