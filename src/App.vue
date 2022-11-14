<!-- SCRIPT -->
<script>
// import
import axios from "axios";
import { store } from "./store";
import AppMainVue from "./components/AppMain.vue";
import AppHeaderVue from "./components/AppHeader.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeaderVue,
    AppMainVue,
  },
  methods: {
    //funzione per prelevare film e serie tramite chiamata api con axios
    getMovieSerie() {
      //chiamo  tutti i film che corrispondono con la search key
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=e18e0190f5c87edd4a7a89d769aefe6e&language=it&query=${this.store.searchKey}`
        )
        .then((resp) => {
          this.store.listMovies = resp.data.results;
          console.log(this.store.listMovies);
        });
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=e18e0190f5c87edd4a7a89d769aefe6e&language=it&query=${this.store.searchKey}`
        )
        .then((resp) => {
          this.store.listSeries = resp.data.results;
          console.log(this.store.listSeries);
        });
    },
    searchFilter() {},
  },
  created() {},
};
</script>
<!-- HTML -->
<template>
  <div class="boolflix">
    <AppHeaderVue @searchMovieSerie="getMovieSerie" />
    <AppMainVue />
  </div>
</template>
<!-- CSS -->
<style lang="scss">
@use "./styles/general.scss";
.boolflix {
  height: 100vh;
}
</style>
