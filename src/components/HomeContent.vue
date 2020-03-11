<template>
  <div class="home-container">
    <span id="slogan-container">
      <h1>Your journey begins here...</h1>
      <p>How far can you progress?</p>
    </span>
    <p id="referral">
      For a quick-start guide and more information about Kuest visit the
      <router-link to="/about">about</router-link>&nbsp;section
    </p>
    <div>
      <img src="@/assets/models/gruvat.png" draggable="false" />
      <img src="@/assets/models/tiekkot.png" draggable="false" />
      <img src="@/assets/models/zhial.png" draggable="false" />
    </div>
    <Button :click="change" :text="'Play'" />
    <Tile
      v-for="(tile, index) in config.tiles"
      :key="tile.heading"
      :heading="tile.heading"
      :body="tile.body"
      imageLink="https://designshack.net/wp-content/uploads/placeholder-image.png"
      :index="index + 1"
    />
  </div>
</template>

<script>
import Tile from "./HomeScreen/Tile";
import Button from "./HomeScreen/Button";
import * as enums from "../utils/enums.js";
import config from "../../docs/config.json";

export default {
  components: {
    Tile,
    Button
  },
  name: "HomeContent",
  data: function() {
    return {
      enums: {
        tileColors: enums.tileColors
      },
      config
    };
  },
  methods: {
    change() {
      console.log("hellos");
      this.$emit("changeInitiated");
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../SCSS/variables";

h3 {
  margin: 40px 0 0;
  color: $lightColor;
  background-color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $accentColor;
}
#referral {
  margin-top: 20px;
  color: $accentColor;
}
#slogan-container {
  color: $secondaryColor;
}
img {
  width: 150px;
  background-color: $darkColor;
  padding: 1em;
  margin: 2em;
}
</style>
