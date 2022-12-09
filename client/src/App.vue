<template>
  <div>
    <header-vue></header-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderVue from "./components/common/HeaderVue.vue";
export default {
  components: { HeaderVue },
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
