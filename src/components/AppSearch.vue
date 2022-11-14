<script>
// import
import { store } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="search">
    <input
      type="text"
      placeholder="Inserisci un titolo di film / serie"
      v-model="store.searchKey"
    />
    <button @click="$emit('searchMovieSerie')">invia</button>
  </div>
  <div class="card" v-for="(item, indice) in store.listMovies" :key="indice">
    <p>
      {{ item.title }}
    </p>
    <p>{{ item.original_title }}</p>
    <p>{{ item.original_language }}</p>
    <p>{{ item.vote_average }}</p>
  </div>
  <h1>Serie</h1>
  <div class="card" v-for="(item, indice) in store.listSeries" :key="indice">
    <p>
      {{ item.name }}
    </p>
    <p>{{ item.original_name }}</p>
    <p>{{ item.original_language }}</p>
    <p>{{ item.vote_average }}</p>
  </div>
</template>
<style lang="scss" scoped>
.search {
  text-align: center;
  margin: 30px;
  input,
  button {
    padding: 20px;
    font-size: 3rem;
  }
}
</style>
