<!-- script -->
<script>
import AppCardVue from "./AppCard.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: {
    AppCardVue,
  },
};
</script>

<!-- Html -->
<template>
  <!-- main -->
  <main>
    <h2>FILM</h2>
    <div class="cardcontain">
      <AppCardVue
        v-for="(item, indice) in store.listMovies"
        :key="indice"
        :title="item.title"
        :originalTitle="item.original_title"
        :orginalLanguage="item.original_language"
        :vote="Math.ceil(item.vote_average / 2)"
        :img="store.imgFront + item.poster_path"
      />
    </div>
    <h2>SERIE</h2>
    <div class="cardcontain">
      <AppCardVue
        v-for="(item, indice) in store.listSeries"
        :key="indice"
        :title="item.name"
        :originalTitle="item.name"
        :orginalLanguage="item.original_language"
        :vote="Math.ceil(item.vote_average / 2)"
        :img="store.imgFront + item.poster_path"
      />
    </div>
  </main>
</template>

<!-- Css -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@200;400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
main {
  font-family: "Encode Sans Condensed", sans-serif;
  height: 88vh;
  overflow: auto;
}
.cardcontain {
  flex-wrap: wrap;
  width: 100%;
  display: flex;
}

h2 {
  color: #de1a26;
  padding: 2rem;
}
</style>
