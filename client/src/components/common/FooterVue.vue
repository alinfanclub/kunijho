<template>
  <div id="footer">
    <h3>CONTECT</h3>
    <ul>
      <li>Jinuk Oh</li>
      <li>kunijho@naver.com</li>
      <li>Instagram @kunijho</li>
      <li>+82 (0)10 8933 4679</li>
      <li>In Korea(South)</li>
    </ul>
    <p>copyright(c) 2022 All rights reserved</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  width: 22rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
}
#footer ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
}
#footer ul li {
  padding: 1rem 0.5rem;
  text-align: left;
}
#footer p {
  padding-bottom: 1rem;
}
</style>
