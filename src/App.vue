<template>
  <div id="app">
    <img id="kuest-title" src="@/assets/title/title.svg">

    <!-- Starting Screen -->
    <LandingContent :initiated="initiated" @toggleInitiated="toggleInitiated"/>
  </div>
</template>

<script>
import LandingContent from "@/components/LandingContent.vue";
export default {
  components: {
    LandingContent
  },
  data() {
    return {
      initiated: false
    };
  },
  methods: {
    toggleInitiated() {
      this.initiated = true;
    }
  }
};
</script>

<style lang="scss">
@import "./SCSS/variables";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $inactiveLinkColor;
}
* {
  background-color: $backgroundColor;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $inactiveLinkColor;
    &.router-link-exact-active {
      color: $linkColor;
    }
  }
}
#kuest-title {
  width: 300px;
}
</style>
