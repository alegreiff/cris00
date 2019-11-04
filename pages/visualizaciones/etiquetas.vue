<template>
  <v-container class="grey lighten-5">
    <v-row v-if="listacorta">
      <v-col cols="4">Etiquetas {{ listacorta.length }} </v-col>
      <v-col cols="4">
        Películas: {{ pelis }}
      </v-col>
      <v-col cols="4"> 
      <v-menu offset-x top>
  
        <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          {{ !pais ? 'Todos los países' : pais }}
        </v-btn>
      </template>
        <v-list>
        <v-list-item
          v-for="(item, index) in paises"
          :key="index"
          @click="pais=item"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
        
      </v-menu>  
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <client-only>
      <component :is="apexchart" width="100%" type="bar" :options="chartOptions" :series="series" />
    </client-only>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6"> {{ series[0].data }} </v-col>
      <v-col cols="6"></v-col>
      <v-col cols="6">{{ pais }}</v-col>
      <v-col cols="12">
        <v-btn @click="ordenaporpromedio()">Ordena por promedio</v-btn>
        

    <pre>
{{ chartOptions.xaxis.categories}}

    </pre>
        
      </v-col>
      
    </v-row>
   
    
  </v-container>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      pais: null,
      paises: null,
      pelis: null,

      listacorta: null,
      sort: false,
      series: [
        {
          name: "Tema",
          data: null
        }
      ],
      chartOptions: {
        legend: {
          show: true
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "100%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },

        xaxis: {
          categories: null
        },
        yaxis: {
          title: {}
        },
        fill: {
          opacity: 1
        }
      }
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
    ...mapState(["peliculas"]),
    ...mapGetters(["listaetiquetas", "datosbasicos", "megacategorias"]),
    lostags() {
      if (this.sort === true) {
        return this.lodash.orderBy(this.listacorta, ["promedio"], ["desc"]);
      } else {
        return this.lodash.orderBy(this.listacorta, ["contador"], ["desc"]);
      }
    },
    datosgrafico() {
      let resultado = [];
      let salida = [];
      let tema = [];
      let prom = [];
      if (this.lostags) {
        let counter = 0;
        for (const etiq of this.lostags) {
          counter++;
          if (counter < 31) {
            salida.push(etiq.contador);
            prom.push(parseInt(etiq.promedio.toFixed(0)));
            tema.push(etiq.termino);
          }
        }
      }
      resultado[0] = salida;

      resultado[1] = prom;
      resultado[2] = tema;
      return resultado;
    }
  },
  watch: {
    pais: function(val) {
      this.nuevalistaEtiquetas(val);
      if (val !== "Todos los países") {
        this.pelis = this.lodash.filter(this.peliculas, { pais: val }).length;
      } else {
        this.pelis = this.peliculas.length;
      }
    },
    datosgrafico: function(val) {
      this.series[0].data = val[0];

      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: val[2]
          }
        }
      };
    }
  },
  methods: {
    ordenaporpromedio() {
      this.sort = !this.sort;
    },
    nuevalistaEtiquetas(pais) {
      this.listacorta = this.$store.getters.listaetiquetasPAIS(pais);
    }
  },
  mounted() {
    let paises = this.lodash.cloneDeep(this.datosbasicos.paises);
    this.paises = ["Todos los países", ...paises];
    this.pelis = this.peliculas.length;

    this.listacorta = this.$store.getters.listaetiquetasPAIS(
      "Todos los países"
    );

    if (this.datosgrafico) {
      this.series[0].data = this.datosgrafico[0];

      //this.chartOptions.xaxis.categories = this.datosgrafico[2];
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: this.datosgrafico[2]
          }
        }
      };
    }
  }
};
</script>