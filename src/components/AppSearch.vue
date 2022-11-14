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
  methods: {},
};
</script>
<template>
  <div class="all">
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
        <img :src="store.imgFront + item.backdrop_path" alt="" />
      </p>
      <p>
        {{ item.title }}
      </p>
      <p>{{ item.original_title }}</p>
      <p>{{ item.original_language }}</p>
      <p v-if="Math.ceil(item.vote_average / 2) === 1">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </p>
      <p v-if="Math.ceil(item.vote_average / 2) === 2">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </p>
      <p v-if="Math.ceil(item.vote_average / 2) === 3">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </p>
      <p v-if="Math.ceil(item.vote_average / 2) === 4">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </p>
      <p v-if="Math.ceil(item.vote_average / 2) === 5">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </p>
    </div>
    <h1>Serie</h1>
    <div class="card" v-for="(item, indice) in store.listSeries" :key="indice">
      <p>
        {{ item.name }}
      </p>
      <p>{{ item.original_name }}</p>
      <p>{{ item.original_language }}</p>
      <p>{{ store.voteFive }}</p>
    </div>
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
  template {
    display: flex;
  }
}
</style>
