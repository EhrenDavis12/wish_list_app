<template>
  <div>
    <div id="nav">
        <router-link to="/">App Groups</router-link>
        <router-link to="/wish_lists"> | Wish Lists</router-link>
        <router-link to="/logout"> | Logout</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
    }
  }
</script>

<style scoped lang="scss">
#nav {
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