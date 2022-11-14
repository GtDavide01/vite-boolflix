import { reactive } from "vue";

export const store = reactive({
  listMovies: [],
  listSeries: [],
  searchKey: "",
  loading: false,
  apiUrlMovies:
    "https://api.themoviedb.org/3/search/movie?api_key=e18e0190f5c87edd4a7a89d769aefe6e&language=it&query=`$(searchKey)`",
  apiUrlSeries:
    "https://api.themoviedb.org/3/search/tv?api_key=e18e0190f5c87edd4a7a89d769aefe6e&language=it&query=`$(searchKey)`",
});
