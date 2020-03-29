<template>
  <Home />
</template>

<script>
import Home from "@/views/Home.vue";
import store from "./store";
export default {
  components: {
    Home
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
            description:
              "A highly volatile species, if they sense danger they will not hesitate to attack."
          },
          Tiekkot: {
            stats: { brute: 30, resistance: 50, life: 10 },
            description:
              "Protectors of the snow like ridden fields, using the wilderness to their advantage, a species that is one with nature."
          },
          Zhial: {
            stats: { brute: 10, resistance: 30, life: 50 },
            description:
              "An unknown race harnessing a weird type of magic, some say they are just anomalies in the universe."
          }
        },
        weapon: {
          "Lepparrin's Lowertooth": {
            stats: {
              damage: 30,
              criticalHitChance: 50,
              accuracy: 10
            },
            description:
              "Broken from the beast, consider this a consilation for your eventual demise. You will be hunted."
          },
          "Kurkkuin Rind": {
            stats: { damage: 50, criticalHitChance: 10, accuracy: 30 },
            description:
              "A reinforced barrier used to separate friends from foes. Repurposed as a wearable plate offering protection against danger."
          },
          "Eiliin Tears": {
            stats: { damage: 10, criticalHitChance: 30, accuracy: 50 },
            description:
              "Ripples from the abyss collected by generations of harvesters. Not by choice, as the afflictions are ever binding."
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
  },
  created() {
    // stored variable mobile vuex state set
    const setMobile = function() {
      if (window.innerWidth >= store.state.mobile.maxWidth) {
        store.commit("setMobile", { isMobile: false });
      } else {
        store.commit("setMobile", { isMobile: true });
      }
    };

    // initial app mobile state
    setMobile();
    // event listener attached
    window.addEventListener("resize", () => {
      setMobile();
    });
  },
  destroyed() {
    window.removeEventListener("resize");
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
  color: $lightColor;
}
* {
  margin: 0;
  padding: 0;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body {
  background-color: $darkColor;
}
</style>
