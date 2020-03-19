<template>
  <!-- Starting Screen -->
  <nav id="nav">
    <li>
      <router-link to="/about" id="kuest-link" draggable="false">
        <img
          src="@/assets/title/title.svg"
          id="kuest-title"
          draggable="false"
        />
      </router-link>
    </li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/about">News</router-link></li>
    <li><router-link to="/about">Updates</router-link></li>
    <li><router-link to="/about">Social</router-link></li>
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
@import "../SCSS/_variables.scss";

</style>
