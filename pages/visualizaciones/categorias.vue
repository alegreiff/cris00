<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="4" color="primary">{{ indiceMega }} </v-col>
      <v-col cols="4">{{ temaseleccionado }} --- {{ megacategorias.length }}  </v-col>
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
      <v-col cols="6" >
<v-card>
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="headline">Categorías 
                {{ !pais ? 'Todos los países' : pais }}
                {{ megacategorias.length }}</v-list-item-title>
              <v-list-item-subtitle>subtexto</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-list dense>
               <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in megacategorias"
            :key="i"
          >

            <v-list-item-content>
              <v-list-item-title> {{ item.nombre }} [{{ item.contador }}] </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
            </v-list>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text>Lista de películas con tema: </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
      <v-col cols="6" class="pa-2">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">
                Categorías 
                {{ !pais ? 'Todos los países' : pais }}
                {{ megacategorias.length }}
              </v-list-item-title>
              <v-list-item-subtitle>subtexto</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <no-ssr>
            <component :is="apexchart" width="100%" type="donut" :options="opciones" 
            :series="series"
            @dataPointSelection="clicMegaCategorias"
            />
            </no-ssr>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text>Temas agrupados en categorías</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
        
            
        </v-row>
        <v-row v-if="listatemas && datodetalle && series2">
          <v-col cols="5">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"> {{ megaseleccionado }} </v-list-item-title>
              <v-list-item-subtitle>subtexto</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <no-ssr>
            <component :is="apexchart" width="100%" height=700 type="bar" :options="opciones2" 
              :series="series2"
              @dataPointSelection="clicTemas"
            />
            </no-ssr>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text>Temas agrupados en categorías</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
            <v-col cols="7">
          <v-card v-if="temaseleccionado">
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="headline">Tema: {{ temaseleccionado }}</v-list-item-title>
              <v-list-item-subtitle>subtexto</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <!-- <v-list dense>
               <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in peliculasmuestra"
            :key="i"
          >

            <v-list-item-content>
              <v-list-item-title v-text="item.titulo"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
            </v-list> -->
            <v-data-table
    :headers="headers"
    :items="peliculasmuestra"
    :items-per-page="10"
    :single-expand="true"
    :expanded.sync="expanded"
    item-key="titulo"
    show-expand
    class="elevation-1"
    @click:row="clicked"
  >
   <template v-slot:expanded-item="{ headers, item  }" >
      <td :colspan="headers.length" class="misstemas"> 
        <div class="misspeli">
          <div>Temas: {{ (item.temas).join(' | ') }} </div>
          <div>Género: {{ item.genero }} </div>
          <div>Formato: {{ item.formato }} </div>
          <div>Duración: {{ item.duracion }} min.</div>
          <div>Años de estreno: {{ item.year }} </div>
        </div>
        
        </td>
    </template>
    </v-data-table>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text>Lista de películas con tema: {{ temaseleccionado }} en <strong> &nbsp;{{ pais }}</strong></v-btn>
          </v-card-actions>
        </v-card>
                
            </v-col>
            <v-col cols="6">
                
            </v-col>
        </v-row>
        </v-container>
    
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        {
          text: "Título",
          align: "left",
          sortable: true,
          value: "titulo",
          width: 300
        },
        { text: "País", value: "pais", width: 120 },
        { text: "Visitas", value: "visitas" },
        { text: "", value: "data-table-expand" }
      ],
      pais: null,
      paises: null,
      megacategorias: null,
      megaseleccionado: null,
      peliculasmuestra: null,
      temaseleccionado: null,
      kolor: null,
      indiceMega: -1,
      datodetalle: null,
      series: [],
      series2: [
        {
          name: "Películas",
          data: [1, 2, 3]
        }
      ],
      opciones: {
        legend: {
          show: false
        },

        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true
              }
            }
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "top"
              }
            }
          }
        ]
      },
      opciones2: {
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: []
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
    ...mapGetters(["listaetiquetas", "datosbasicos", "loscolores"]),
    listatemas() {
      if (this.indiceMega >= 0) {
        console.log("INDICE MEGA es mayor o igual a CERO");
        this.datodetalle = this.megacategorias[this.indiceMega].datos;
        return this.megacategorias[this.indiceMega].temas;
      } else {
        this.datodetalle = null;
        return null;
      }
    }
  },
  watch: {
    pais: function(val) {
      this.indiceMega = -8;
      this.megacategorias = this.$store.getters.megacategorias(val);
      let series = [];
      let nombrelabels = [];
      for (const dato of this.megacategorias) {
        series.push(dato.contador);
        nombrelabels.push(dato.nombre);
      }
      this.series = series;
      this.opciones = {
        colors: this.kolor,
        ...this.opciones,
        labels: nombrelabels
      };
    },
    datodetalle: function(val) {
      if (val !== null) {
        let series = [];
        let nombrelabels = [];
        for (const dato of val) {
          series.push(dato.veces);
          nombrelabels.push(dato.termino);
        }
        this.series2[0].data = series;
        this.opciones2 = {
          colors: this.kolor,
          ...this.opciones2,
          ...{
            xaxis: {
              categories: nombrelabels
            }
          }
        };
      }
    }
  },
  methods: {
    clicked(value) {
      console.log(value);
      this.expanded.push(value);
    },
    clicMegaCategorias(a, b, c) {
      console.log(c);
      (this.temaseleccionado = null), (this.indiceMega = c.dataPointIndex);
      this.megaseleccionado = this.opciones.labels[c.dataPointIndex];
    },
    clicTemas(a, b, c) {
      this.temaseleccionado = this.opciones2.xaxis.categories[c.dataPointIndex];
      this.peliculasmuestra = this.resultadox(this.temaseleccionado);
    },
    resultadox(tema) {
      let pais = this.pais;

      /* pais === null ? "Todos los países" : pais; */

      console.log(`el país es ${pais}`);
      return this.$store.getters.filtropelis(tema, pais);
    }
  },
  created() {
    this.kolor = this.lodash.cloneDeep(this.loscolores);
    this.pais = "Todos los países";
    this.megacategorias = this.$store.getters.megacategorias(this.pais);
    let paises = this.lodash.cloneDeep(this.datosbasicos.paises);
    this.paises = ["Todos los países", ...paises];
  },
  mounted() {
    let series = [];
    let nombrelabels = [];
    for (const dato of this.megacategorias) {
      series.push(dato.contador);
      nombrelabels.push(dato.nombre);
    }
    this.series = series;
    this.opciones = {
      colors: this.kolor,
      ...this.opciones,
      labels: nombrelabels
    };
  }
};
</script>
<style lang="css">
.misstemas {
  font-weight: bolder;
}
.misspeli {
  padding: 1em;
}
</style>