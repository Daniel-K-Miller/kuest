<template>
  <div class="main-container" @submit.prevent="handleSubmit">
    <Roll :opponent="opponent" @updateOpponent="opponent = $event" :playerName="playerData.name" />
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
.main-container {
  margin-top: 10px;
}
.sub-container {
  display: flex;
  background-color: lighten($backgroundColor, 2);
  justify-content: center;
  align-content: center;
  position: relative;
  height: 50px;
  padding: 20px 0;

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
}

// button at bottom of page to create character
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