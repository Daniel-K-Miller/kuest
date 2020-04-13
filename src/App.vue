<template>
  <div>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import store from "./store";
import Nav from "./components/Navigation";
export default {
  components: {
    Nav
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
          species: {
            brute: 0,
            resistance: 0,
            life: 0
          },
          weapon: {
            damage: 0,
            criticalHitChance: 0,
            accuracy: 0
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
