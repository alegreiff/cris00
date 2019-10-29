<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12" md="8" >
        <h2>Jaime</h2>
        <v-btn small v-for="(tema, index) in base" :key="index" @click="selecciona(tema, index)">{{ tema.termino }} ({{ tema.contador }})&nbsp; </v-btn>
      </v-col>
      <v-col cols="12" md="4">
        {{ peliss  }}
        <hr>
        {{ resultado  }}
        <h2>Biko</h2>
        <v-btn small color="red" v-for="(tema, index) in busca" :key="index" @click="desselecciona(tema, index)" >{{ tema.termino }} ({{ tema.contador }})&nbsp; </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" >
        <h2>Jaime</h2>
      </v-col>
      <v-col cols="12" md="6">
        <h2>Biko</h2>
      </v-col>
    </v-row>
    
  </v-container>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      base: null,
      busca: [],
      resultado: null,
      peliss: null,
      tx: null
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
    ...mapGetters([
      "listaetiquetas",
      "lospaises",
      "losyears",
      "bubbledata",
      "bubblepaises"
    ])
  },
  watch: {
    base: function(val) {
      //console.log(val);
      //
    }
  },
  methods: {
    selecciona(elemento, index) {
      //console.log(elemento);
      this.base.splice(index, 1);
      this.busca.push(elemento);
      this.base = this.lodash.orderBy(this.base, ["contador"], ["desc"]);
      if (this.busca.length > 0) {
        this.buscatemas();
      } else {
        this.peliss = null;
        this.resultado = null;
      }
    },
    desselecciona(elemento, index) {
      //console.log(elemento);
      this.busca.splice(index, 1);
      this.base.push(elemento);
      this.base = this.lodash.orderBy(this.base, ["contador"], ["desc"]);
      if (this.busca.length > 0) {
        this.buscatemas();
      } else {
        this.peliss = null;
        this.resultado = null;
      }
    },
    buscatemas() {
      let contador = 0;
      let filmes = [];
      for (const peli of this.peliculas) {
        let palabras = this.lodash.map(this.busca, "termino");
        this.tx = peli.temas;
        if (palabras.every(this.contiene)) {
          filmes.push(peli.titulo);
          contador++;
        }
      }
      this.peliss = filmes;
      this.resultado = contador;
    },
    contiene(termino) {
      return this.tx.includes(termino);
    }
  },
  mounted() {
    if (this.listaetiquetas) {
      this.base = this.lodash.cloneDeep(this.listaetiquetas);
    }
  }
};
</script>