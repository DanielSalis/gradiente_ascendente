<template>
  <v-container class="centered-container">
    <h3>Bem vindo a ferramenta!</h3>

    <p class="mt-4">
      Já tem um token da OpenAI? Informe abaixo ou realize um cadastro para conseguir acumular pontos
    </p>

    <div class="home__container mt-8">
      <div class="home__container-token">
        <v-text-field
          solo
          hide-details
          label="Token"
          placeholder="Token"
        />
        <v-btn
          color="primary"
          large
        >
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
      OU
      <v-btn
        color="primary"
        to="/register"
      >
        Criar conta
      </v-btn>

      <v-btn to="/login">
        Já tenho uma conta
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>

<style lang="scss" scoped>
.home__container {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.home__container-token {
  align-items: center;
  column-gap: 8px;
  display: flex;
}
</style>
