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

  mounted() {
    const xScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(Object.values(this.playerData.attributes.species), (d, i) => {
          return i;
        })
      ])
      .range([0, 500]);

    let h = 200;
    let padding = 100;
    d3.select("#test")
      .select("svg")
      .append("svg")
      .attr("width", 500)
      .attr("height", h + padding)
      .selectAll("rect")
      .data(Object.values(this.playerData.attributes.species))
      .enter()
      .append("rect")
      .attr("width", 25)
      .attr("height", (d, i) => {
        return d * 3;
      })
      .attr("x", (d, i) => {
        return i * 50;
      })
      .attr("y", (d, i) => {
        return h - padding - d * 3;
      })
      .attr("fill", "red");

    d3.select("svg")
      .selectAll("text")
      .data(Object.keys(this.playerData.attributes.species))
      .enter()
      .append("text")
      .text(d => d)

      .attr("x", (d, i) => {
        return i * 50;
      })
      .attr("y", (d, i) => {
        return h - Object.values(this.playerData.attributes.species)[i] - 5;
      })
      .attr("class", "txt-label");
  },
  watch: {
    playerDataSpeciesUpdate() {
      let h = 200;
      let padding = 100;
      d3.select("svg")
        .selectAll("rect")
        .data(Object.values(this.playerData.attributes.species))
        .attr("height", (d, i) => {
          return d * 3;
        })
        .attr("y", (d, i) => {
          return h - 50 - d * 3;
        })
        .attr("fill", (d, i) => {
          return i === 0 ? `blue` : i === 1 ? `green` : `red`;
        });

      d3.select("svg")
        .selectAll("text")
        .data(Object.keys(this.playerData.attributes.species))
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => {
          return i * 50;
        })
        .attr("y", (d, i) => {
          return h + 10 - Object.values(this.playerData.attributes.species)[i];
        });
    }
  }
};
</script>

<style scope lang="scss">
.txt-label {
  fill: white;
}
</style>