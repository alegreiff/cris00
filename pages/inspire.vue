<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div>
        <div>
          {{ etiquetas[0] }}
        </div>
        <ul v-for="(peli, index) in pelicol" :key="index">
            <li> {{ peli.titulo }} </li>

          </ul>
      </div>
      <div class="text-center">
        <h1>

        </h1>
      </div>

      <v-card>
        <v-card-title class="headline">
          <!-- {{ missdatos.length }} -->
          
        </v-card-title>
        <v-card-text>
          
          <p>
            {{ peliculas[0] }}
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      missdatos: null
    };
  },
  components: {
    Logo,
    VuetifyLogo
  },
  computed: {
    ...mapState(["peliculas", "etiquetas"]),
    pelicol() {
      if (this.peliculas) {
        //return this.missdatos.length;
        return this.lodash.filter(this.peliculas, { abr: "per" });
      }
    }
  }
};
</script>
