<template>
  <div>
    <header-vue-sub></header-vue-sub>
    <div id="mainArea">
      <h1>PINK HAMMER</h1>
      <ul>
        <li v-for="item in this.image" :key="item">
          <div>
            <img
              :src="item.name"
              loading="lazy"
              oncontextmenu="return false"
              onselectstart="return false"
            />
          </div>
          <div>
            <small>{{ item.caption }}</small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderVueSub from "./common/HeaderVueSub.vue";
export default {
  components: { HeaderVueSub },
  data() {
    return {
      image: [
        {
          name: require("../assets/pinkhammer_01.jpg"),
          caption: "pink hammer_printing on paper_210X210(cm)_2022",
        },
        {
          name: require("../assets/pinkhammer_02.jpg"),
          caption: "pink hammer_printing on paper_210X210(cm)_2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
#mainArea {
  padding-top: 2rem;
  width: 90vw;
  margin: 0 auto;
  text-align: center;
}
#mainArea h1 {
  padding-top: 2rem;
}
#mainArea ul li {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
}
#mainArea ul li > div {
  text-align: center;
  width: 80vw;
  margin: 0.2rem auto;
}
#mainArea img {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  user-select: none;
}
</style>
