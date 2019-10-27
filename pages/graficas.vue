<template>
  <div class="example">
      <client-only placeholder="Loading...">
      <apexcharts
        width="500"
        height="350"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexcharts>
    </client-only>
    <client-only>
        <apexcharts type=radialBar height=350 :options="chartOptionsa" :series="seriesa" />
    </client-only>
  </div>
</template>

<script>
//import VueApexCharts from 'vue-apexcharts'

export default {
  name: "Chart",
  components: {
    //apexcharts: VueApexCharts,
    Apexcharts: () => import("vue-apexcharts")
  },
  data: function() {
    return {
      seriesa: [76, 67, 61, 90],
      chartOptionsa: {
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
        labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 160,
          offsetY: 10,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            horizontal: 1
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false
              }
            }
          }
        ]
      },
      chartOptions: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>