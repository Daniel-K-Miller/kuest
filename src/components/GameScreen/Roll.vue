<template>
  <div class="sub-container">
    <transition name="fade" mode="out-in">
      <button type="button" id="roll-btn" @click="roll" v-if="!rolled">Roll for first opponent</button>
      <h2 id="foe" v-if="rolled">{{ rollString }}</h2>
    </transition>
    <transition name="fade">
      <h2 id="player" v-if="selected">{{ playerName }}</h2>
    </transition>
    <transition name="fade">
      <h2 id="vs" v-if="selected">VS</h2>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    opponent: String,
    playerName: String
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
      tick: 25,
      slowdown: 100,
      selected: false
    };
  },

  methods: {
    roll() {
      let internalCallback = ((tick, counter) => {
        return () => {
          if (tick-- >= 0) {
            if (this.interval > 300) {
              this.interval += this.slowdown;
            }
            setTimeout(internalCallback, counter);
            if (counter < 300) {
              counter += 10;
            }
            this.random();
            if (tick < 0) {
              document.getElementById("foe").style.color = "goldenrod";
              setTimeout(() => {
                document.getElementById("foe").style.transform =
                  "translate(40vw, 0)";
                document.getElementById("foe").style.transition = "all .5s";
                setTimeout(() => {
                  this.selected = true;
                }, 500);
              }, 2000);

              this.$emit("updateOpponent", this.rollString);
            }
          }
        };
      })(this.tick, this.interval);
      setTimeout(internalCallback);
      this.rolled = true;
    },
    random() {
      this.rollString = this.opponents[
        Math.floor(Math.random() * this.opponents.length)
      ];
    }
  },
  watch: {
    selected() {
      console.log("hello!");
    }
  }
};
</script>

<style lang="scss">
@import "../../SCSS/variables";

h2 {
  display: flex;
  color: white;
  font-size: 1.6em;
  margin: auto 0;
}
#player {
  color: lighten($mainColor, 20);
  transform: translate(-40vw, 0);
}
#vs {
  color: white;
  position: absolute;
  top: 35%;
}

#roll-btn {
  background-color: $inactiveLinkColor;
  color: $mainColor;
  font-size: 1.2em;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  border: solid 2px $mainColor;
}
</style>