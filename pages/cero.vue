<template>
  <v-layout>
    <v-flex >

<client-only>
      <component :is="apexchart" width="100%" type="bubble" :options="bubleoptions" :series="bubbledata" />
    </client-only>


      
      <v-data-table
    :headers="headers"
    :items="listaetiquetas"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
  <hr>
  <v-data-table
    :headers="headersPaises"
    :items="lospaises"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
  <hr>
  <v-data-table
    :headers="headersYears"
    :items="losyears"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
      
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      bubleseries: [
        {
          name: "Chile",
          data: [[1980, 1, 1600]]
        },
        {
          name: "Colombia",
          data: [
            [2011, 14, 9665],
            [1990, 5, 4600],
            [2002, 8, 9200],
            [2006, 2, 1600],
            [2019, 4, 7200]
          ]
        },
        {
          name: "Ecuador",
          data: [[2005, 5, 4555], [2011, 6, 9200]]
        }
      ],
      bubleoptions: {
        dataLabels: {
          enabled: false
        },

        fill: {
          opacity: 0.8
        },
        title: {
          text: "Películas, países, visitas"
        },
        tooltip: {
          enabled: true,

          marker: {
            show: true
          },
          z: {
            title: "Visualizaciones"
          }
        },
        xaxis: {
          tickAmount: 5,
          type: "category",
          categories: ["ollo", "alona"],
          title: {
            text: "Año de estreno de la película"
          }
        },
        yaxis: {
          max: 75,
          /* seriesName: "Número de películas",
          show: true,
          showAlways: true,
          labels: {
            show: true
          }, */
          title: {
            text: "Número de películas"
          }
        }
      },
      headersYears: [
        {
          text: "Año",
          align: "left",
          sortable: true,
          value: "year",
          width: 120
        },
        { text: "Ocurrencias", value: "peliculas", width: 120 },
        { text: "Visitas", value: "visitas" }
      ],
      headersPaises: [
        {
          text: "País",
          align: "left",
          sortable: true,
          value: "pais",
          width: 120
        },
        { text: "Ocurrencias", value: "peliculas", width: 120 },
        { text: "Visitas", value: "visitas" },
        { text: "Corto", value: "corto", width: 60 },
        { text: "Largo", value: "largo", width: 60 },
        { text: "Documental", value: "documental", width: 60 },
        { text: "Ficcion", value: "ficcion", width: 60 }
      ],
      headers: [
        {
          text: "Término",
          align: "left",
          sortable: true,
          value: "termino",
          width: 200
        },
        { text: "Ocurrencias", value: "contador", width: 200 },
        { text: "Visitas", value: "visitas" }
      ]
    };
  },

  computed: {
    apexchart() {
      return () => {
        if (process.client) {
          return import("vue-apexcharts");
        }
      };
    },
    ...mapGetters([
      "listaetiquetas",
      "lospaises",
      "losyears",
      "bubbledata",
      "bubblepaises"
    ])
  }
};
</script>