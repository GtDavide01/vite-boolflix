import { reactive } from "vue";

export const store = reactive({
  listMovies: [],
  listSeries: [],
  searchKey: "",
  loading: false,
  imgFront: "https://image.tmdb.org/t/p/w500",
});
