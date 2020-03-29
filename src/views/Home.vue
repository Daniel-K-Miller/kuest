<template>
  <div class="home">
    <Nav />
    <Highlight />
    <Tile
      v-for="(tile, index) in tileData.tiles"
      :firstItem="index === 0 ? true : false"
      :lastItem="index === tileData.tiles.length - 1 ? true : false"
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
import Nav from "@/components/Navigation.vue";
import Highlight from "@/components/HomeScreen/Highlight.vue";

import Tile from "@/components/HomeScreen/Tile.vue";
import tileData from "@/data/home/tiles.json";

import Footer from "@/components/HomeScreen/Footer.vue";

export default {
  name: "home",
  components: {
    Nav,
    Highlight,
    Tile,
    Footer
  },
  data() {
    return {
      tileData
    };
  },
  props: {
    initiated: Boolean
  },
  methods: {
    changeInitiated() {
      this.$emit("changeInitiated");
    }
  }
};
</script>
