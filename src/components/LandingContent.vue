<template>
  <!-- Starting Screen -->
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view :initiated="initiated" @changeInitiated="changeInitiated"/>
  </div>
</template>

<script>
export default {
  component: "LandingContent",
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