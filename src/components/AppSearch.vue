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
