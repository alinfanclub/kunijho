<template>
  <div>
    <header-vue-sub></header-vue-sub>
    <div v-if="this.$store.state.loading == true" class="blackBg">
      <spinner-vue></spinner-vue>
    </div>
    <div id="mainArea">
      <h1>PINK HAMMER</h1>
      <ul>
        <li v-for="item in this.image" :key="item">
          <div>
            <img
              :src="item.name"
              class="image"
              loading="lazy"
              oncontextmenu="return false"
              onselectstart="return false"
              @load="load"
            />
            <div id="skeleton" v-if="this.$store.state.loading"></div>
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
import SpinnerVue from "./etc/SpinnerVue.vue";
export default {
  components: { HeaderVueSub, SpinnerVue },
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
      a: false,
    };
  },
  methods: {
    load() {
      this.$store.state.loading = false;
    },
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
#mainArea ul {
  margin-top: 10vw;
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
@keyframes ske {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

#skeleton {
  max-width: 500px;
  width: 80vw;
  max-height: 500px;
  height: 80vw;
  margin: 0 auto;
  user-select: none;
  background: #ddd;
  content: "";
  border-radius: 15px;
  animation: ske 1s infinite ease-in-out;
}
.blackBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.121);
}
</style>
