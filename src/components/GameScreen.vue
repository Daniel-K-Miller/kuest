<template>
  <div class="main-container" @submit.prevent="handleSubmit">
    <div class="sub-container">
      <button
        type="button"
        id="roll-btn"
        @click="roll(function() { rollString = opponents[
            Math.floor(Math.random() * opponents.length)
          ]; }, 10, 10)"
      >Roll for first opponent</button>
      <h2>{{ rollString }}</h2>
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
      decrementingNum: 500,

      count: 10
    };
  },

  /* ; */
  methods: {
    roll(callback, factor, times) {
      let interval = 20;
      let internalCallback = (function(tick, counter) {
        return function() {
          if (--tick >= 0) {
            if (interval > 300) {
              interval -= 300;
            }
            setTimeout(internalCallback, counter);
            if (counter < 200) {
              counter += 10;
            }
            callback();
          }
        };
      })(25, interval);

      setTimeout(internalCallback);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scope lang="scss">
@import "../SCSS/variables";

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