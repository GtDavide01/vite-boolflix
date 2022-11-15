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
    overview: String,
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
          <li class="yellow"><i class="fa-solid fa-star"></i></li>
          <li v-for="number in 4"><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 2">
        <ul>
          Vote :
          <li class="yellow" v-for="number in 2">
            <i class="fa-solid fa-star"></i>
          </li>
          <li v-for="number in 3"><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 3">
        <ul>
          Vote :
          <li class="yellow" v-for="number in 3">
            <i class="fa-solid fa-star"></i>
          </li>
          <li v-for="number in 2"><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 4">
        <ul>
          Vote :
          <li class="yellow" v-for="number in 4">
            <i class="fa-solid fa-star"></i>
          </li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
      </span>
      <span v-if="vote === 5">
        <ul>
          Vote :
          <li class="yellow" v-for="number in 5">
            <i class="fa-solid fa-star"></i>
          </li>
        </ul>
      </span>
      <span>Descrizione : {{ overview }}</span>
    </div>
  </div>
</template>

<!-- Css -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@200;400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
.card {
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  width: calc(100% / 6 - 30px);
  margin: 15px;
  cursor: pointer;
  .imgcard {
    img {
      display: block;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .infocard {
    overflow-y: auto;
    transition: 2s;
    display: flex;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    color: white;
    width: 100%;
    height: 100%;
    flex-direction: column;
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
      margin: 10px 0;
    }
    ul {
      display: flex;
      text-decoration: none;
      list-style-type: none;
      .yellow {
        color: yellow;
      }
      li {
        margin: 0 3px;
      }
    }
  }
}

.card:hover .infocard {
  display: flex;
}
</style>
