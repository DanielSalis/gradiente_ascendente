<template>
  <v-container class="centered-container">
    <div class="login__container">
      <h3>Informe seu e-mail e senha</h3>

      <v-text-field
        solo
        hide-details
        label="Email"
        placeholder="Email"
      />

      <v-text-field
        solo
        hide-details
        label="Senha"
        placeholder="Senha"
      />

      <v-btn
        color="primary"
        to="/panel"
      >
        Entrar
      </v-btn>

      <v-btn to="/register">
        Não tem conta? Crie uma
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginPage'
  }
</script>

<style lang="scss" scoped>
.login__container {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>
