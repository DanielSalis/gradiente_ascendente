<template>
  <v-container>
    <h3>Informe seus dados abaixo</h3>

    <div class="register__container mt-8">
      <v-text-field
        solo
        hide-details
        label="Nome"
        placeholder="Nome"
      />

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

      <v-btn color="primary">
        Criar conta
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'RegisterPage'
  }
</script>

<style lang="scss" scoped>
.register__container {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>
