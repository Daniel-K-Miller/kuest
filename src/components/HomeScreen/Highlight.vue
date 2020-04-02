<template>
  <div class="highlight">
    <img id="background-image"
      src="https://designshack.net/wp-content/uploads/placeholder-image.png"
    />
    <img id="main-image"
      src="https://designshack.net/wp-content/uploads/placeholder-image.png"
    />
    <Button :text="`Play`" :click="event" />
  </div>
</template>

<script>
import Button from "./Button";

export default {
  components: { Button },
  methods: {
    event() {
      console.log("hit");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../SCSS/_variables.scss";

.highlight {
  position: relative;
  display: flex;
}

.highlight button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: -5px 0 0 0;
  z-index: 3;
}

.highlight #background-image {
  width: 100%;
  opacity: 0.2;
  left: 0;
  z-index: -1;
  filter: blur(2px);
  filter: grayscale(1);
}

.highlight #main-image {
  position: absolute;
  height: 100%;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.highlight #background-image {
  height: 469.94px;
}

@media only screen and (max-width: 1000px) {
  .highlight #main-image {
    width: 70vw;
    border: none;
    z-index: 1;
  }

  .highlight #background-image {
    height: 57vw;
  }
}

@media only screen and (max-width: 650px) {
  .highlight #main-image {
    width: 85vw;
    border: none;
    z-index: 2;
  }
}

@media only screen and (max-width: 500px) {
  .highlight #main-image {
    width: 100%;
    border: none;
  }

  .highlight #background-image {
    visibility: hidden;
  }
}
</style>
