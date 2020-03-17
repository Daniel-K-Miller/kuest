<template>
  <!-- Starting Screen -->
  <nav id="nav">
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </ul>
  </nav>
  <!-- <router-view :initiated="initiated" @changeInitiated="changeInitiated"/> -->
</template>

<script>
export default {
  props: {
    initiated: Boolean
  },
  methods: {
    changeInitiated() {
      this.$emit("toggleInitiated");
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  padding: 0;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    height: 100px;
    a {
      flex: 1;
      background-color: pink;
      text-align: center;
      height: 100%;
    }
  }
}
</style>
