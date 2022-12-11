<template>
  <div id="headerArea">
    <router-link to="/">
      <img
        src="@/assets/sign.png"
        alt=""
        oncontextmenu="return false"
        onselectstart="return false"
        loading="lazy"
      />
    </router-link>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
#headerArea {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  user-select: none;
  padding: 2rem 0;
}
/* #headerArea {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  margin-top: 20px;
  width: 100px;
} */
</style>
