<template>
  <v-container>
    <h4>Olá</h4>

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
              {'navigation-buttons': showReturnButton }
            ]"
          >
            <v-btn
              v-if="showReturnButton"
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
              @click="advance"
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

  import { mapState, mapActions } from 'vuex'
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
    computed: {
      ...mapState('quiz', ['quiz', 'answers']),
      showReturnButton() {
        return this.currentStep > 1 && this.currentStep < this.steps.length
      },
    },
    methods: {
      ...mapActions('quiz', ['savePoints']),
      advance() {
        switch(this.currentStep)
        {
        case 3:
          this.checkAnswers()
          break;
        case 4:
          this.$router.push("/wallet")
        }

        this.currentStep++;
      },
      checkAnswers() {
        let rightAnswers = this.quiz.filter((question, index) => {
          return question.answer == this.answers[index]
        })

        console.log(rightAnswers.length);
        this.savePoints(rightAnswers.length);
      }
    }
  }
</script>
