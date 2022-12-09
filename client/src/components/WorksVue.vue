<template>
  <div id="containerArea">
    <div id="mainArea">
      <ul>
        <li v-for="(item, i) in this.work" :key="i">
          <router-link :to="`/works/${item.adr}`">
            <p class="num">#&nbsp;{{ i + 1 }}</p>
            <p class="text">{{ item.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="btn">
      <button>certification</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      work: [
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
        {
          title: "FA3987334C",
        },
      ],
    };
  },
};
</script>

<style>
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
  grid-template-columns: 100px 100px 100px;
  text-align: center;
}

ul li {
  min-width: 100px;
  height: 6rem;
  display: flex;
  align-items: center;
  text-align: center;
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
ul li p.text {
  display: none;
}
ul li p.num:hover p.text {
  display: block;
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
.btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

button {
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #333;
}
button:hover {
  background-color: #333;
  color: #fff;
}
</style>
