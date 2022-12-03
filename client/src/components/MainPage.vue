<template>
  <div id="containerArea">
    <header-vue></header-vue>
    <div>
      <img src="https://via.placeholder.com/720x1000/ffff00.png" />
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from "./common/FooterVue.vue";
import HeaderVue from "./common/HeaderVue.vue";
export default {
  components: { HeaderVue, FooterVue },
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
</style>
