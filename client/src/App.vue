<template>
  <v-app>
    <div class="default-layout">
      <router-view />
    </div>
  </v-app>
</template>

<script>
  export default {
    created(){
      console.log("route", this.$route.query.param)
    }
  }
</script>

<style lang="scss">
:deep(.v-application--wrap) {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.default-layout {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 8px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
