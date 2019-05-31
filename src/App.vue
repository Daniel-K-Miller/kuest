<template>
  <div id="app">
    <img id="kuest-title" src="@/assets/title/title.svg" draggable="false">

    <!-- Starting Screen -->
    <LandingContent
      v-if="initiated === false"
      :initiated="initiated"
      @toggleInitiated="toggleInitiated"
    />
    <!-- Character Creation -->
    <CharacterCreation v-if="initiated === true && player.level === 0" :playerData="player"/>
  </div>
</template>

<script>
import LandingContent from "@/components/LandingContent.vue";
import CharacterCreation from "@/components/CharacterCreation.vue";
export default {
  components: {
    LandingContent,
    CharacterCreation
  },
  data() {
    return {
      initiated: false,
      player: {
        name: "",
        species: "",
        weapon: "",
        level: 0,
        attributes: { life: 0, brute: 0, resistance: 0 },
        weaponAttributes: { damage: 0, criticalHitChance: 0, accuracy: 0 }
      }
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
  margin: 0;
  padding: 0;
}
body {
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
