<template>
  <v-container>
    <h4>Olá, {nome do aluno}</h4>

    <v-stepper
      v-model="currentStep"
      class="mt-2"
      vertical
    >
      <section
        v-for="step in steps"
        :key="step.number"
      >
        <v-stepper-step
          :complete="currentStep > step.number"
          :step="step.number"
        >
          {{ step.name }}
        </v-stepper-step>

        <v-stepper-content :step="step.number">
          <v-btn
            color="primary"
            @click="currentStep++"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </section>
    </v-stepper>
  </v-container>
</template>

<script>
  export default {
    name: 'PanelPage',
    data() {
      return {
        currentStep: 1,
        steps: [
          {
            name: "Saber mais",
            number: 1
          },
          {
            name: "Sobre a página",
            number: 2
          },
          {
            name: "Quiz",
            number: 3
          },
          {
            name: "Resultado",
            number: 4
          },
        ]
      };
    },
  }
</script>

<style lang="scss" scoped>
.login__container {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>
