<template>
  <div class="main-container" @submit.prevent="handleSubmit">
    <Roll :opponent="opponent" @updateOpponent="opponent = $event" :playerName="playerData.name" />
    <Stats :data="playerData" />
  </div>
</template>

<script>
import Roll from "@/components/GameScreen/Roll";
import Stats from "@/components/GameScreen/Stats";
export default {
  components: { Roll, Stats },
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
  background-color: lighten($darkColor, 2);
  justify-content: center;
  align-content: center;
  position: relative;
  height: 50px;
  padding: 20px 0;
}

// button at bottom of page to create character
</style>