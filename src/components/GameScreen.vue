<template>
  <div class="main-container" @submit.prevent="handleSubmit">
    <div class="sub-container">
      <transition name="fade" mode="out-in">
        <button
          type="button"
          id="roll-btn"
          @click="roll(function() { rollString = opponents[
            Math.floor(Math.random() * opponents.length)
          ]; })"
          v-if="!rolled"
        >Roll for first opponent</button>

        <h2 id="foe" v-if="rolled && tick > 0 && rollString">{{ rollString }}</h2>
      </transition>
    </div>
  </div>
</template>

<script>
import Name from "@/components/CharacterCreation/Name.vue";

export default {
  components: {},
  props: {
    playerData: Object
  },
  data() {
    return {
      rollString: undefined,
      opponents: [
        "Starter Bot",
        "Hard mode Bot",
        "Medium mode Bot",
        "bee bot",
        "tee bot",
        "tee pot",
        "nee mot",
        "see phot",
        "not not",
        "test pot"
      ],
      rolled: false,
      interval: 10,
      tick: 20
    };
  },

  /* ; */
  methods: {
    roll(callback) {
      let internalCallback = ((tick, counter) => {
        return () => {
          if (tick-- >= 0) {
            if (this.interval > 300) {
              this.interval += 300;
            }
            setTimeout(internalCallback, counter);
            if (counter < 200) {
              counter += 10;
            }
            callback();
            if (tick < 0) {
              document.getElementById("foe").style.color = "goldenrod";

              this.rolled = false;
            } else {
              document.getElementById("foe").style.color = "white";
            }
          }
        };
      })(this.tick, this.interval);
      setTimeout(internalCallback);
      this.rolled = true;
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scope lang="scss">
@import "../SCSS/variables";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to,
.fade-leave-active {
  opacity: 0;
}
// Component container
> body {
  width: 100vw;
  height: 100vh;
}

// sub-component containers
.sub-container {
  background-color: $inactiveLinkColor;
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;
  h3 {
    font-size: 1.2em;
    padding: 0.5em;
    width: $label-image-width;
  }
  h2 {
    color: white;
  }
}

// button at bottom of page to create character
#roll-btn {
  background-color: $inactiveLinkColor;
  color: $mainColor;
  font-size: 1.2em;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  border: solid 2px $mainColor;
}
</style>