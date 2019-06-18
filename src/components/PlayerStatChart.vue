<template>
  <div id="test">
    <svg width="500" height="200">
      <rect
        v-for="item in this.playerData.attributes.species"
        width="20"
        height="100"
        fill="blue"
        x="100"
        :key="item"
      ></rect>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    defaultAttributes: Object,
    playerData: Object
  },
  data() {
    return {};
  },
  updated() {
    /* let h = 200;
    d3.select("#test")
      .append("svg")
      .attr("width", 500)
      .attr("height", h)
      .selectAll("rect")
      .data([
        this.playerData.attributes.species.brute,
        this.playerData.attributes.species.resistance,
        this.playerData.attributes.species.life
      ])
      .enter()
      .append("rect")
      .attr("width", 75)
      .attr("height", (d, i) => {
        return d;
      })
      .attr("x", (d, i) => {
        return i * 100;
      })
      .attr("fill", "red"); */
  },
  mounted() {}
};
</script>