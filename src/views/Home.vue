<template>
  <div class="home">
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
import Highlight from "@/components/HomeScreen/Highlight.vue";

import Tile from "@/components/HomeScreen/Tile.vue";
import tileData from "@/data/home/tiles.json";

import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
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
