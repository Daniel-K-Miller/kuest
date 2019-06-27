<template>
  <div id="fullScreen-container">
    <img :src="imgSrc">
    <img src="@/assets/info.svg" class="info" @click="toggleZoom()">
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    toggleZoom: Function
  }
};
</script>

<style scope lang="scss">
@import "../../SCSS/variables";
#fullScreen-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: $backgroundColor;
  position: fixed;
  margin: auto auto;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    width: 100vw;
    height: 100vh;
  }
  .info {
    position: absolute;
    width: 2.5vw;
    height: 2.5vw;
    filter: invert(1);
    left: $label-image-width - $info - 5px;
    top: 0;
    left: 39%;
    margin: 0 auto;
    background-color: white;
    border-radius: 50%;
    opacity: 1;
  }
}
</style>
