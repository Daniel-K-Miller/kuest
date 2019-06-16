<template>
  <div id="test" v-if="player"></div>
</template>

<script>
import * as d3 from "d3";
export default {
  props: {
    defaultAttributes: Object,
    playerData: Object
  },
  data() {
    return {
      player: [20, 20, 20]
    };
  },
  mounted() {
    d3.select("#test")
      .append("svg")
      .attr("width", 500)
      .attr("height", 200)
      .selectAll("rect")
      .data(player)
      .append("rect")
      .attr("width", 75)
      .attr("height", 200)
      .attr("fill", "grey");
  }
};
</script>