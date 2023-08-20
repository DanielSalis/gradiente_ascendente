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
          <component
            :is="`step-${step.number}`"
          />

          <div
            :class="[
              'mt-4',
              {'panel_navigation': currentStep > 1 }
            ]"
          >
            <v-btn
              v-if="currentStep>1"
              size="small"
              @click="()=>{
                currentStep--;
              }"
            >
              Voltar
            </v-btn>

            <v-btn
              color="primary"
              size="small"
              @click="currentStep++"
            >
              {{ step.buttonText }}
            </v-btn>
          </div>
        </v-stepper-content>
      </section>
    </v-stepper>
  </v-container>
</template>

<script>
  import Step1 from "../components/stepper-items/step-1.vue";
  import Step2 from "../components/stepper-items/step-2.vue";
  import Step3 from "../components/stepper-items/step-3.vue";
  import Step4 from "../components/stepper-items/step-4.vue";

  export default {
    name: 'PanelPage',
    components: {
      'step-1': Step1,
      'step-2': Step2,
      'step-3': Step3,
      'step-4': Step4,
    },
    data() {
      return {
        currentStep: 1,
        steps: [
          {
            name: "Saber mais",
            number: 1,
            buttonText: "Gerar conteúdo",
          },
          {
            name: "Sobre a página",
            number: 2,
            buttonText: "Acessar Quiz"
          },
          {
            name: "Quiz",
            number: 3,
            buttonText: "Ver resultado"
          },
          {
            name: "Resultado",
            number: 4,
            buttonText: "Trocar pontos"
          },
        ]
      };
    },
  }
</script>

<style lang="scss" scoped>
.panel_navigation {
  display: flex;
  justify-content: space-between;
}
</style>
