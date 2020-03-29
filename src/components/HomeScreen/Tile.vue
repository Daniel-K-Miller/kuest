<template>
  <div
    class="tile-container"
    v-bind:class="[pickBackgroundColor, selectFlexDirection, setMarginAndPadding]"
  >
    <div class="text-container">
      <h1 class="heading">{{ heading }}</h1>
      <p class="text-body">{{ body }}</p>
    </div>
    <div class="img-container">
      <img v-bind:src="imageLink" draggable="false" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    body: String,
    imageLink: String,
    index: Number,
    firstItem: Boolean,
    lastItem: Boolean
  },
  computed: {
    pickBackgroundColor() {
      if (this.$props.index % 3 === 0) {
        return "primary-color";
      } else if (this.$props.index % 2 === 0) {
        return "secondary-color";
      } else {
        return "tertiary-color";
      }
    },
    selectFlexDirection() {
      if (this.$props.index % 2 > 0) {
        return "tile-row";
      } else {
        return "tile-row-reversed";
      }
    },
    setMarginAndPadding() {
      if (this.$props.firstItem === true) {
        return "top-margin";
      } else if (this.$props.lastItem === true) {
        return "bottom-margin";
      } else {
        return "";
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
  align-items: center;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0px 0 90px 0;
  z-index: 1;
  padding-bottom: 150px;
  h1,
  p {
    width: 30vw;
    padding: 0 30px;
  }
}
.tile-container:before {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  top: -20%;
  transform: skewY(-1.5deg);
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
  height: auto;
  border-radius: 12px;
}

.primary-color,
.primary-color::before,
.primary-color:after {
  background-color: lighten($color: $darkColor, $amount: 10);
}

.secondary-color,
.secondary-color::before,
.secondary-color:after {
  background-color: lighten($color: $darkColor, $amount: 15);
}

.tertiary-color,
.tertiary-color::before,
.tertiary-color:after {
  background-color: lighten($color: $darkColor, $amount: 20);
}

.top-margin {
  padding-top: 75px;
}
.top-margin::before {
  content: "";
  display: block;
  height: 0px;
}

.bottom-margin {
  margin-bottom: 75px;
  padding-bottom: 0;
}

.bottom-margin::after {
  content: "";
  display: block;
  height: 75px;
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -75px;
  transform-origin: 100;
  z-index: -1;
}

@media only screen and (max-width: 900px) {
  .tile-container {
    flex-direction: column;
    .text-container {
      margin-bottom: 30px;
      h1 {
        margin-bottom: 5px;
      }
    }
    .text-container,
    h1,
    p {
      width: 55vw;
      height: auto;
      padding: 0;
    }
    img {
      width: 60vw;
    }
  }
  .darkester-bg:before {
    z-index: -1;
  }
}

@media only screen and (max-width: 560px) {
  .tile-container {
    img {
      width: 85vw;
    }
    .text-container,
    h1,
    p {
      width: 75vw;
    }
  }
}

@media only screen and (max-width: 350px) {
  .tile-container {
    img {
      width: 100vw;
      border-radius: 0;
    }
    .text-container,
    h1,
    p {
      width: 85vw;
    }
    h1 {
      font-size: 1.5em;
    }
  }
}
</style>
