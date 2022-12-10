<template>
  <div id="containerArea">
    <header-vue-main></header-vue-main>
    <div id="mainArea">
      <ul>
        <li v-for="item in this.work" :key="item">
          <router-link :to="`/works/${item.adr}`">
            <p>{{ item.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from "./common/FooterVue.vue";
import HeaderVueMain from "./common/HeaderVueMain.vue";
export default {
  components: { FooterVue, HeaderVueMain },
  data() {
    return {
      work: [
        {
          title: "PINK HAMMER 2022",
          adr: "pinkhammer",
        },
        {
          title: "FUNNY MONEY 2022",
          adr: "funnymoney",
        },
        {
          title: "----",
        },
        {
          title: "----",
        },
        {
          title: "----",
        },
        {
          title: "----",
        },
        {
          title: "----",
        },
        {
          title: "----",
        },
        {
          title: "----",
        },
        {
          title: "----",
        },
      ],
    };
  },
};
</script>

<style scoped>
#containerArea {
  width: 100%;
}
#containerArea > div#mainArea {
  display: flex;
  align-items: center;
  justify-content: center;
}

#mainArea {
  max-width: 90vw;
  padding: 2rem 0;
  margin: 0 auto;
}
ul {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  text-align: center;
  justify-content: space-around;
}

ul li {
  width: 43vw;
  height: 6rem;
  display: flex;
  align-items: center;
}
#mainArea ul li:nth-child(3),
#mainArea ul li:nth-child(4),
#mainArea ul li:nth-child(5),
#mainArea ul li:nth-child(6),
#mainArea ul li:nth-child(7),
#mainArea ul li:nth-child(8),
#mainArea ul li:nth-child(9),
#mainArea ul li:nth-child(10) {
  pointer-events: none;
}
ul li a {
  width: 100%;
}
ul li p {
  width: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

#footer {
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
}
</style>
