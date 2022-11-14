import { reactive } from "vue";

export const store = reactive({
  listMovies: [],
  listSeries: [],
  searchKey: "",
  loading: false,
});
