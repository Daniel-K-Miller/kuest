<template>
  <div class="home-container">
    <Highlight />
    <Tile
      v-for="(tile, index) in config.tiles"
      :firstItem="index === 0 ? true : false"
      :lastItem="index === config.tiles.length - 1 ? true : false"
      :key="tile.heading"
      :heading="tile.heading"
      :body="tile.body"
      imageLink="https://designshack.net/wp-content/uploads/placeholder-image.png"
      :index="index + 1"
    />
    <Footer />
  </div>
</template>

<script>
import Highlight from "./HomeScreen/Highlight";
import Tile from "./HomeScreen/Tile";
import Footer from "./HomeScreen/Footer";
import * as enums from "../utils/enums.js";
import config from "../../docs/config.json";

export default {
  components: {
    Highlight,
    Tile,
    Footer
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
