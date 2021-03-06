<template>
  <div id="chart-container" class="divide">
    <svg :width="width" :height="175" />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    defaultAttributes: Object,
    playerData: Object,
    playerDataUpdate: Array,
    shortAtr: Array
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
        .range([this.padding, this.width - this.barWidth - this.padding]);
    },
    yScale() {
      return d3
        .scaleLinear()
        .domain([0, 50])
        .range([this.height - this.padding / 2, 0]);
    },
    yAxis() {
      return d3.axisLeft(this.yScale);
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
    d3.select("#chart-container")
      .select("svg")
      .append("svg")
      .attr("width", 400)
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
      .data(this.shortAtr)
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

    d3.select("#chart-container")
      .select("svg")
      .append("g")
      .attr("transform", `translate(${this.padding}, 0)`)
      .call(this.yAxis)
      .attr("color", "grey");
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
          switch (i) {
            case 0:
              // brute color
              return `#772828`;
            case 1:
              // resistance color
              return `#283777`;
            case 2:
              // life color
              return `#287753`;
            case 3:
              // damage color
              return `#772873`;
            case 4:
              // critical hit chance color
              return `#287577`;
            case 5:
              // accuracy
              return `#777528`;
          }
        });

      d3.select("svg")
        .selectAll("text")
        .data(this.dataName)
        .enter()
        .append("text")
        .attr("y", (d, i) => {
          return this.height + 10 - this.dataName[i];
        });
    }
  }
};
</script>

<style scope lang="scss">
@import "../../SCSS/variables";

.txt-label {
  fill: $accentColor;
}

#chart-container {
  background-color: lighten($darkColor, 10);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>