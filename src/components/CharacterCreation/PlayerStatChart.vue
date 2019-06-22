<template>
  <div id="test">
    <svg :width="width" :height="height"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    defaultAttributes: Object,
    playerData: Object,
    playerDataUpdate: Array
  },
  data() {
    return {
      barWidth: 40,
      padding: 100,
      width: 500,
      height: 200
    };
  },
  computed: {
    xScale() {
      return d3
        .scaleLinear()
        .domain([
          0,
          d3.max(this.dataVal, (d, i) => {
            return i;
          })
        ])
        .range([0, this.width - this.barWidth]);
    },
    dataVal() {
      return Object.values(this.playerData.attributes.species).concat(
        Object.values(this.playerData.attributes.weapon)
      );
    },
    dataName() {
      return Object.keys(this.playerData.attributes.species).concat(
        Object.keys(this.playerData.attributes.weapon)
      );
    }
  },

  mounted() {
    d3.select("#test")
      .select("svg")
      .append("svg")
      .attr("width", 500)
      .attr("height", this.height + this.padding)
      .selectAll("rect")
      .data(this.dataVal)
      .enter()
      .append("rect")
      .attr("width", this.barWidth)
      .attr("height", (d, i) => {
        return d * 3;
      })
      .attr("x", (d, i) => {
        return this.xScale(i);
      })

      .attr("y", (d, i) => {
        return this.height - this.padding - d * 3;
      })
      .attr("fill", "red");

    d3.select("svg")
      .selectAll("text")
      .data(this.dataName)
      .enter()
      .append("text")
      .text(d => d)

      .attr("x", (d, i) => {
        return this.xScale(i);
      })
      .attr("y", (d, i) => {
        return this.height - this.padding / 2 + 20;
      })
      .attr("class", "txt-label");
  },
  watch: {
    playerDataUpdate() {
      d3.select("svg")
        .selectAll("rect")
        .data(this.dataVal)
        .attr("height", (d, i) => {
          return d * 3;
        })
        .attr("y", (d, i) => {
          return this.height - 50 - d * 3;
        })
        .attr("fill", (d, i) => {
          return i === 0 ? `blue` : i === 1 ? `green` : `red`;
        });

      d3.select("svg")
        .selectAll("text")
        .data(this.dataName)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => {
          return i * 50;
        })
        .attr("y", (d, i) => {
          return this.height + 10 - this.dataName[i];
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