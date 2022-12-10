<template>
  <div>
    <header-vue-sub></header-vue-sub>
    <div id="mainArea">
      <ul>
        <li v-for="item in this.image" :key="item">
          <img :src="item.name" loading="lazy" />
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
        },
        {
          name: require("../assets/pinkhammer_02.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
#mainArea img {
  width: 100%;
}
</style>
