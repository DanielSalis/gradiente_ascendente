<template>
  <v-app>
    <div class="default-layout">
      <router-view />
    </div>
  </v-app>
</template>

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
  min-height: 100vh;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin: auto;
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
