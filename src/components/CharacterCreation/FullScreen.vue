<template>
  <div id="fullScreen-container">
    <div id="imgAndText-container">
      <div id="image-container">
        <img :src="imgSrc" id="zoomedImg" />
      </div>
      <div id="text-container">
        <h1>{{ selection }}</h1>
        <h2>{{ description }}</h2>
      </div>
      <img src="@/assets/zoomOut.svg" class="info" @click="toggleZoom()" draggable="false" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    toggleZoom: Function,
    selection: String,
    defaultAttributes: Object
  },
  computed: {
    description() {
      return this.selection === "Gruvat" ||
        this.selection === "Tiekkot" ||
        this.selection === "Zhial"
        ? this.defaultAttributes.species[this.selection].description
        : this.defaultAttributes.weapon[this.selection].description;
    }
  }
};
</script>

<style scope lang="scss">
@import "../../SCSS/variables";
#fullScreen-container {
  position: relative;
  background: $backgroundColor;
  position: fixed;
  margin: auto auto;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  img {
    opacity: 1;
    width: 50vw;
    height: 80vh;
  }
  .info {
    position: absolute;
    width: 3.5vw;
    height: 3.5vw;
    filter: invert(1);
    left: $label-image-width - $info - 5px;
    top: 90%;
    left: 90vw;
    right: 0;
    margin: 0 auto;
    background-color: white;
    opacity: 0.5;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
}
#imgAndText-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
#image-container {
  margin: auto 0;
}
#text-container {
  background-color: $inactiveLinkColor;
  color: white;
  text-align: justify;
  width: 50vw;
  :first-child {
    margin-top: 10px;
  }
  p,
  h1,
  h2 {
    margin: 10px 20px;
  }
}
</style>
