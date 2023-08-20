<template>
  <v-container class="centered-container">
    <h3>Olá, {aluno}!</h3>

    <p class="mt-4">
      Seu saldo atual é de <b>10</b> pontos
    </p>

    <p>Vouchers disponíveis:</p>

    <v-tabs
      v-model="currentTab"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.name"
      >
        {{ tab.name }}
      </v-tab>

      <v-tabs-items v-model="currentTab">
        <v-tab-item
          v-for="tab in tabs"
          :key="tab.name"
        >
          <v-radio-group v-model="voucherSelected">
            <v-radio
              v-for="(option, index) in tab.vouchers"
              :key="option"
              :label="option"
              :value="index"
            />
          </v-radio-group>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>

    <div class="navigation-buttons">
      <v-btn to="/">
        Voltar
      </v-btn>

      <v-btn color="primary">
        Recuperar voucher
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'WalletPage',
    data() {
      return {
        currentTab: null,
        voucherSelected: null,
        tabs: [{
                 name:"Voucher Quero Bolsa",
                 vouchers: ["Desconto de 3% na mensalidade: 175 pontos", "Desconto de 5% na mensalidade: 250 pontos"]
               },
               {
                 name:"Voucher Amazon",
                 vouchers: ["Desconto de 15% em livros selecionados: 200 pontos"]
               }]
      }
    }
  }
</script>

<style lang="scss" scoped>
.login__container {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>
