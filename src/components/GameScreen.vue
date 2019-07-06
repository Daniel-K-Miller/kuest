<template>
  <div class="main-container" @submit.prevent="handleSubmit">
    <Roll :opponent="opponent" @updateOpponent="opponent = $event" />
  </div>
</template>

<script>
import Roll from "@/components/GameScreen/Roll";
export default {
  components: { Roll },
  props: {
    playerData: Object
  },
  data() {
    return {
      opponent: undefined
    };
  },

  /* ; */
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss">
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

.shift-enter-active {
  transition: all 0.5s;
}

.shift-enter {
  transform: translate(40vw, 0);
}

// Component container
> body {
  width: 100vw;
  height: 100vh;
}

// sub-component containers
.sub-container {
  display: flex;
  background-color: $inactiveLinkColor;
  padding: 20px 0;
  height: 10vh;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  h2 {
    color: white;
    margin: auto;
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