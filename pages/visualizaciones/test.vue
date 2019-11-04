<template>
<v-container class="grey lighten-5">
    <v-row>
        <v-col cols="12">
            Jaime le Gris
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            {{ megass()[5] }}
        </v-col>
    </v-row>
    
</v-container> 
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      kolor: null
    };
  },
  computed: {
    /* apexchart() {
      return () => {
        if (process.client) {
          return import("vue-apexcharts");
        }
      };
    }, */
    ...mapState(["peliculas"]),
    ...mapGetters(["listaetiquetas", "datosbasicos", "loscolores"])
  },
  watch: {},
  methods: {
    megass() {
      return this.$store.getters.megacategorias("Todos los países");
    }
  },
  created() {
    this.kolor = this.lodash.cloneDeep(this.loscolores);
  },
  mounted() {
    /* let series = [];
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
    }; */
  }
};
</script>