<template>
  <div id="containerArea">
    <header-vue></header-vue>
    <div id="mainArea">
      <ul>
        <li v-for="item in this.work" :key="item">
          <router-link to="/">
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
import HeaderVue from "./common/HeaderVue.vue";
export default {
  components: { HeaderVue, FooterVue },
  data() {
    return {
      work: [
        {
          title: "work01",
        },
        {
          title: "work0dasdasd2",
        },
        {
          title: "work0dasdasdasdasㅇㅇ3",
        },
        {
          title: "work04dasd",
        },
        {
          title: "fsdlfkjsdlfjsdlfjlsdfjlsdf",
        },
        {
          title: "sdjf;lsdjflskdjfs",
        },
        {
          title: "fasdfjsd;lfjsldkfjlksdjflasjflsakdf",
        },
        {
          title: "fasjdflsdjflksdf",
        },
        {
          title: "fsdjfsdlkfjsdlfjlsdjfsl",
        },
        {
          title: "fjsdflsf",
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
  height: 50vh;
  padding: 2rem 0;
  margin: 0 auto;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}

ul li {
  min-width: 100px;
  margin-right: 1rem;
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
  text-decoration: underline;
  text-underline-position: under;
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
