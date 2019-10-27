<template>
  <div>
    <div class="HorizontalBarChart">
      <p>Horizontal Graph</p>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import statusData from "../static/status.json";
export default {
  name: "render",
  components: {},
  props: {
    // values: values
  },
  asyncData({ params }) {
    return {
      statusData
    };
  },
  data() {
    return {
      sData: statusData,
      margin: 10
    };
  },

  methods: {},
  created() {},
  mounted() {
    var margin = { top: 50, right: 50, bottom: 50, left: 50 };
    var width = window.innerWidth - margin.left + margin.right;
    var height = window.innerHeight - margin.top + margin.bottom;
    const numberOfDaysWeek = 7;
    const numberOfDaysMon = 30;
    var svg = d3
      .select("HorizontalBarChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    d3.json("status.json").then(
      function(data) {
        var de = data["environments"];
        var di = data["incidents"];
        var x = d3
          .scaleLinear()
          .range([0, width])
          .domain([0, d3.max(d)]);
      },
      function(error) {}
    );
  }
};
</script>

<style>
svg {
  width: 1000px;
  height: 1000px;
}
</style>