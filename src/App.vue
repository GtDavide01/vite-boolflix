<!-- SCRIPT -->
<script>
// import
import axios from "axios";
import { store } from "./store";
import AppSearchVue from "./components/AppSearch.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppSearchVue,
  },
  methods: {
    //funzione per prelevare film e serie tramite chiamata api con axios
    getMovieSerie() {
      axios.get(this.store.apiUrlMovies).then((resp) => {
        this.store.listMovies = resp.data.results;
      });
      axios.get(this.store.apiUrlSeries).then((resp) => {
        this.store.listSeries = resp.data.results;
      });
    },
    searchFilter() {},
  },
  created() {},
};
</script>
<!-- HTML -->
<template>
  <AppSearchVue @searchMovieSerie="getMovieSerie" />
</template>
<!-- CSS -->
<style lang="scss">
@use "./styles/general.scss";
</style>
