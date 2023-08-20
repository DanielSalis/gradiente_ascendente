<template>
  <v-container class="centered-container">
    <div class="login__container">
      <h3>Informe seu e-mail e senha</h3>

      <v-text-field
        v-model="email"
        solo
        hide-details
        label="Email"
        placeholder="Email"
      />

      <v-text-field
        v-model="password"
        solo
        hide-details
        type="password"
        label="Senha"
        placeholder="Senha"
      />

      <v-btn
        color="primary"
        @click="auth"
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
  import {api} from '../utils/api';

  export default {
    name: 'LoginPage',
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
      async auth(){
        const user={
          email: this.email,
          password: this.password,
        };

        await api.post('/login', user).then((response)=>{
          console.log(response)
          this.$router.push('/panel')
        });
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
