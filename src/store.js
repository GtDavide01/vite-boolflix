import { reactive } from "vue";

export const store = reactive({
  listMovies: [],
  listSeries: [],
  searchKey: "",
  loading: false,
  voteFive: null,
  imgFront: "https://image.tmdb.org/t/p/w342",
});
