<template>
  <div id="containerArea">
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
export default {
  components: { FooterVue },
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
          title: "0000",
        },
        {
          title: "0000",
        },
        {
          title: "0000",
        },
        {
          title: "0000",
        },
        {
          title: "0000",
        },
        {
          title: "0000",
        },
        {
          title: "0000",
        },
        {
          title: "0000",
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
#containerArea > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

#mainArea {
  padding: 2rem 0;
  margin: 0 auto;
}
ul {
  display: grid;
  grid-template-columns: 10rem 10rem;
  text-align: center;
}

ul li {
  min-width: 100px;
  height: 6rem;
  display: flex;
  align-items: center;
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
ul li a:nth-of-type(3),
ul li a:nth-of-type(4),
ul li a:nth-of-type(5),
ul li a:nth-of-type(6),
ul li a:nth-of-type(7),
ul li a:nth-of-type(8),
ul li a:nth-of-type(9),
ul li a:nth-of-type(10) {
  pointer-events: none;
}
/* ul li p::after {
  bottom: 0;
  left: 0;
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #333;
} */
</style>
