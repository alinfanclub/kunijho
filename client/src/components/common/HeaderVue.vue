<template>
  <div id="headerArea">
    <img
      src="@/assets/sign.png"
      alt=""
      oncontextmenu="return false"
      onselectstart="return false"
      loading="lazy"
    />
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
  margin-top: 20px;
  width: 100px;
  user-select: none;
}
</style>
