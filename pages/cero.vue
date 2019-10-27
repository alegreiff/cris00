<template>
  <v-layout>
    <v-flex >
      <v-data-table
    :headers="headers"
    :items="listaetiquetas"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>

      <!-- <div>
        <p v-for="(etiqueta, index) in listaetiquetas" :key="index">
          {{ etiqueta.contador }} -- {{ etiqueta.termino }} -- {{ etiqueta.visitas }}
        </p>
      </div> -->
      
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Término",
          align: "left",
          sortable: true,
          value: "termino"
        },
        { text: "Ocurrencias", value: "contador" },
        { text: "Visitas", value: "visitas" }
      ]
    };
  },

  computed: {
    ...mapGetters(["listaetiquetas"])
  }
};
</script>