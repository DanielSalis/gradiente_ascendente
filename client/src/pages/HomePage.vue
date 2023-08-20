<template>
  <v-container>
    <h3>Bem vindo a ferramenta!</h3>

    <p>Já tem um token da OpenAI? Informe abaixo ou realize um cadastro para conseguir acumular pontos</p>

    <div class="home__container">
      <v-text-field>Token</v-text-field>
      ou
      <v-btn  color="primary">Criar conta</v-btn>
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
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
