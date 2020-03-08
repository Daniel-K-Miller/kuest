<template>
  <div class="tile-container" v-bind:class="pickBackgroundColor">
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
    color: Number
  },
  methods: {
    
  },
  computed: {
    pickBackgroundColor() {
      switch (this.$props.color) {
        case tileColors.RED:
          return "red-bg";
        case tileColors.BLUE:
          return "blue-bg";
        case tileColors.GREEN:
          return "green-bg";
        default:
          return "";
      }
    }
  },
  created() {
    
  }
};
</script>

<style scoped>
.tile-container {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
}
.tile-container:before {
  content: "";
  display: block;
  height: 90px;
  width: 100vw;
  position: absolute;
  right: 0;
  left: 0;
  top: -30px;
  transform: skewY(-1.5deg);
  transform-origin: 100;
  z-index: -1;
}
.tile-container:after {
  content: "";
  display: block;
  height: 90px;
  width: 100vw;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -30px;
  transform: skewY(0.5deg);
  transform-origin: 100;
  z-index: -1;
}
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px;
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

.red-bg {
  background-color: lightcoral;
}
.red-bg:before {
  background-color: lightcoral;
}
.red-bg:after {
  background-color: lightcoral;
}

.blue-bg {
  background-color: lightblue;
}
.blue-bg:before {
  background-color: lightblue;
}
.blue-bg:after {
  background-color: lightblue;
}

.green-bg {
  background-color: lightseagreen;
}
.green-bg:before {
  background-color: lightseagreen;
}
.green-bg:after {
  background-color: lightseagreen;
}
</style>
