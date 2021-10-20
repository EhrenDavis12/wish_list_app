<template>
  <v-app id="app" data-app>
    <h1>Welcome To the Wish List App</h1>
    <div v-if="isLoggedIn">
      <core-navbar />
    </div>
    <router-view/>
  </v-app>
</template>

<script>
  export default {
    computed: {
      isLoggedIn() {
        return this.$store.getters['auth/loggedIn'];
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
