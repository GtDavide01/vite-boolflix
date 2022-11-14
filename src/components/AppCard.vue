<!-- script -->
<script>
import { store } from "../store";
export default {
  name: "AppCard",
  data() {
    return {
      store,
    };
  },
  props: {
    title: String,
    originalTitle: String,
    orginalLanguage: String,
    vote: String,
    img: String,
  },
};
</script>

<!-- Html -->
<template>
  <div class="card">
    <div class="imgcard">
      <img :src="img" alt="" />
    </div>
    <div class="infocard">
      <h2>{{ title }}</h2>
      <p>{{ originalTitle }}</p>
      <span>{{ originalLanguage }}</span>
      <span v-if="vote === 1">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 2">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 3">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 4">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 5">
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
    </div>
  </div>
</template>

<!-- Css -->
<style lang="scss" scoped>
.card {
  border-radius: 20px;
  width: calc(100% / 4 - 40px);
  margin: 20px;
  .imgcard {
    img {
      border-radius: 20px;
      padding: 10px;
      width: 100%;
    }
  }
  .infocard {
    color: white;
    text-align: center;
    padding: 10px;
    h2 {
      font-size: 1.2rem;
      padding: 10px 0;
      text-transform: uppercase;
    }
    p,
    span {
      color: grey;
      padding: 5px;
    }
    ul {
      display: flex;
      text-decoration: none;
      list-style-type: none;
      li {
        color: yellow;
      }
    }
  }
}
</style>
