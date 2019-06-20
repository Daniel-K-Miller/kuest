<template>
  <div id="test">
    <svg width="500" height="200"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    defaultAttributes: Object,
    playerData: Object,
    playerDataSpeciesUpdate: String,
    playerDataWeaponUpdate: String
  },
  data() {
    return {};
  },
  methods: {
    calcIndex(index) {
      console.log(index + 1);
    }
  },
  mounted() {
    let h = 200;
    d3.select("#test")
      .select("svg")
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
        return d * 3;
      })
      .attr("x", (d, i) => {
        return i * 100;
      })
      .attr("y", (d, i) => {
        return h - d * 3;
      })
      .attr("fill", "red");
  },
  watch: {
    playerDataSpeciesUpdate() {
      let h = 200;
      d3.select("svg")
        .selectAll("rect")
        .data([
          this.playerData.attributes.species.brute,
          this.playerData.attributes.species.resistance,
          this.playerData.attributes.species.life
        ])
        .attr("width", 75)
        .attr("height", (d, i) => {
          return d * 3;
        })
        .attr("x", (d, i) => {
          return i * 100;
        })
        .attr("y", (d, i) => {
          return h - d * 3;
        })
        .attr("fill", (d, i) => {
          return i === 0 ? `blue` : i === 1 ? `green` : `red`;
        });
    }
  }
};
</script>