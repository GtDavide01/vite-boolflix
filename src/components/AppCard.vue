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
      <p>Language : {{ orginalLanguage }}</p>
      <span v-if="vote === 1">
        <ul>
          Vote :
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 2">
        <ul>
          Vote :
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 3">
        <ul>
          Vote :
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 4">
        <ul>
          Vote :
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 5">
        <ul>
          Vote :
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
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@200;400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
.card {
  position: relative;
  border-radius: 20px;
  width: calc(100% / 6 - 30px);
  margin: 15px;
  .imgcard {
    img {
      border-radius: 20px;
      padding: 10px;
      width: 100%;
    }
  }
  .infocard {
    display: flex;
    border-radius: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    color: white;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    display: none;
    h2 {
      font-family: "Encode Sans Condensed", sans-serif;
      font-size: 1.7rem;
      padding: 10px 0;
      text-transform: uppercase;
      color: #de1a26;
    }
    p,
    span {
      color: white;
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
.card:hover .imgcard {
  display: none;
}
.card:hover .infocard {
  display: flex;
}
</style>
