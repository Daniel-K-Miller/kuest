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
    <CharacterCreation
      v-if="initiated === true && player.level === 0"
      :playerData="player"
      :defaultAttributes="defaultAttributes"
      :shortAtr="shortAtr"
    />
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
        attributes: {
          species: { brute: 0, resistance: 0, life: 0 },
          weapon: { damage: 0, criticalHitChance: 0, accuracy: 0 }
        }
      },
      defaultAttributes: {
        species: {
          Gruvat: {
            stats: { brute: 50, resistance: 30, life: 10 },
            description: "A race of aggressive little monsters."
          },
          Tiekkot: {
            stats: { brute: 30, resistance: 50, life: 10 },
            description:
              "A defensive species made to harness the power of unity."
          },
          Zhial: {
            stats: { brute: 10, resistance: 30, life: 50 },
            description: "A unknown race harnessing a weird type of magic."
          }
        },
        weapon: {
          "Lepparrin's Lowertooth": {
            stats: {
              damage: 30,
              criticalHitChance: 50,
              accuracy: 10
            },
            description: "A nice little blade."
          },
          "Kurkkuin Rind": {
            stats: { damage: 50, criticalHitChance: 10, accuracy: 30 },
            description: "A nice little hide."
          },
          "Eiliin Tears": {
            stats: { damage: 10, criticalHitChance: 30, accuracy: 50 },
            description: "A nice little bunch of magical orbs."
          }
        }
      }
    };
  },
  methods: {
    toggleInitiated() {
      this.initiated = true;
    }
  },
  computed: {
    shortAtr() {
      // used to provide shorthand attribute names
      let combo = Object.keys(this.player.attributes.species).concat(
        Object.keys(this.player.attributes.weapon)
      );

      let array = [];

      combo.forEach(d => {
        switch (d) {
          case `brute`:
            array.push(`brute`);
            break;
          case `resistance`:
            array.push(`resist`);
            break;
          case `life`:
            array.push(`life`);
            break;
          case `damage`:
            array.push(`dmg`);
            break;
          case `criticalHitChance`:
            array.push(`crit`);
            break;
          case `accuracy`:
            array.push(`acc`);
            break;
        }
      });
      return array;
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
