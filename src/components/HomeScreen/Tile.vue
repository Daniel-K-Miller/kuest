<template>
  <div class="tile-container" v-bind:class="[pickBackgroundColor, selectFlexDirection]">
    <div class="text-container">
      <h1 class="heading">{{ heading }}</h1>
      <p class="text-body">{{ body }}</p>
    </div>
    <div class="img-container">
      <img v-bind:src="imageLink" />
    </div>
  </div>
</template>

<script>
import { tileColors } from "../../utils/enums";

export default {
  props: {
    heading: String,
    body: String,
    imageLink: String,
    index: Number
  },
  computed: {
    pickBackgroundColor() {
      switch (this.$props.index) {
        case tileColors.DARK:
          return "dark-bg";
        case tileColors.DARKER:
          return "darker-bg";
        case tileColors.CYAN:
          return "cyan-bg";
        case tileColors.DARKEST:
          return "darkest-bg";
        default:
          return "";
      }
    },
    selectFlexDirection() {
      if (this.$props.index % 2 > 0) {
        return "tile-row";
      } else {
        return "tile-row-reversed";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../SCSS/_variables.scss";

.tile-row {
  flex-direction: row;
}

.tile-row-reversed {
  flex-direction: row-reverse;
}

.tile-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 50px 0 100px 0;
  z-index: 1;
}
.tile-container:before {
  content: "";
  display: block;
  height: 90px;
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  top: -40px;
  transform: skewY(-2.5deg);
  transform-origin: 100;
  z-index: -1;
}
.tile-container:after {
  content: "";
  display: block;
  height: 90px;
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -30px;
  transform: skewY(1.5deg);
  transform-origin: 100;
  z-index: -1;
}
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0;
}
.heading {
  text-align: start;
}
.text-body {
  width: 40vw;
  text-align: justify;
}
img {
  width: 400px;
  height: 150px;
  border-radius: 12px;
}

.dark-bg,
.dark-bg:before,
.dark-bg:after {
  background-color: lighten($darkColor, 5);
}

.darker-bg,
.darker-bg:before,
.darker-bg:after {
  background-color: lighten($darkColor, 10);
}

.cyan-bg,
.cyan-bg:before,
.cyan-bg:after {
  background-color: lightseagreen;
  z-index: 10;
}
.cyan-bg {
  height: auto;
  z-index: 20;
}

.darkest-bg,
.darkest-bg:before,
.darkest-bg:after {
  background-color: lighten($darkColor, 15);
}
</style>