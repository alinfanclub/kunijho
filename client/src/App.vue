<template>
  <div>
    <router-view></router-view>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from "./components/common/FooterVue.vue";
export default {
  components: { FooterVue },
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #333;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Mukta", sans-serif;
}
</style>
