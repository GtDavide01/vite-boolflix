<script>
// import
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  components: {},
};
</script>

<template>
  <header>
    <h1>BOOLFLIX</h1>
    <div class="search">
      <input
        type="text"
        placeholder="Inserisci un titolo di film / serie"
        v-model="store.searchKey"
        @keyup.enter="$emit('searchMovieSerie')"
      />
      <button @click="$emit('searchMovieSerie')">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@200;400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $text-white;
  height: 12vh;
  h1 {
    width: 30%;
    font-family: "Encode Sans Condensed", sans-serif;
    color: #de1a26;
    padding: 1rem;
    font-size: 3rem;
  }
  .search {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    input {
      background-color: black;
      font-size: 1rem;
      width: 20%;
      height: 50%;
      color: white;
      border: none;
      border-radius: 10px;
      border-bottom: 2px solid #de1a26;
      padding: 0.8rem;
    }
    button {
      color: white;
      background-color: black;
      font-size: 1rem;
      padding: 0 10px;
      margin: 0 20px;
      cursor: pointer;
      border: none;
    }
  }
}
</style>
