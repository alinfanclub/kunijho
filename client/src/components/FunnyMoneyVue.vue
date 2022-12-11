<template>
  <div>
    <header-vue-sub></header-vue-sub>
    <div id="mainArea">
      <h1>FUNNY MONEY</h1>
      <ul>
        <li v-for="(item, i) in this.codeNum" :key="i">
          <div>
            <p
              @click="
                this.modal = true;
                this.userClick = i;
              "
            >
              #{{ i + 1 }}
            </p>
          </div>
        </li>
      </ul>
      <div class="searchBtn">
        <a
          href="https://www.bok.or.kr/portal/singl/frgryMoneyNoSearch/search.do?menuNo=200378"
          target="blank"
          >certification</a
        >
      </div>
    </div>
    <div id="modal" v-if="modal" class="blackBg">
      <div class="whiteBg">
        <p>{{ this.codeNum[this.userClick].key }}</p>
        <ion-icon
          name="copy-outline"
          @click="copyToClipBoard(), ToastCallback()"
        ></ion-icon>
        <div @click="this.modal = false" class="closeBtn">
          <ion-icon name="close-circle"></ion-icon>
        </div>
      </div>
    </div>
    <div id="copyToast" :class="{ hidden: this.copyToast == false }">
      <p>copy complete</p>
    </div>
  </div>
</template>

<script>
import HeaderVueSub from "./common/HeaderVueSub.vue";
export default {
  components: { HeaderVueSub },
  data() {
    return {
      modal: false,
      userClick: "",
      copyToast: false,
      codeNum: [
        {
          key: "FA3987334C",
        },
        {
          key: "LA7683009K",
        },
        {
          key: "EK3746801L",
        },
        {
          key: "AK4357929A",
        },
        {
          key: "LC3631733C",
        },
        {
          key: "HC3232087L",
        },
        {
          key: "LC3112313D",
        },
        {
          key: "LC3108061H",
        },
        {
          key: "LC7238724K",
        },
      ],
    };
  },
  methods: {
    copyToClipBoard() {
      var obj = document.querySelector(".whiteBg p");
      var range = document.createRange();
      range.selectNode(obj.childNodes[0]); //텍스트 정보를 Range 객체에 저장
      var sel = window.getSelection();
      sel.removeAllRanges(); //기존 선택정보 삭제
      sel.addRange(range); //텍스트 정보 선택
      document.execCommand("copy"); //복사
      sel.removeRange(range); //선택 정보 삭제
    },
    ToastCallback() {
      this.copyToast = true;
      if (this.copyToast == true) {
        setTimeout(() => {
          this.copyToast = false;
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
#mainArea {
  padding-top: 2rem;
  width: 90vw;
  margin: 0 auto;
  text-align: center;
}
#mainArea h1 {
  padding-top: 2rem;
}
#mainArea ul {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  margin-top: 20vw;
}
#mainArea ul li {
  width: calc(33% - 15px);
  height: 20vw;
  cursor: pointer;
}
.blackBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.121);
}
.whiteBg {
  max-width: 500px;
  max-height: 500px;
  width: 70vw;
  height: 70vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.closeBtn {
  position: absolute;
  bottom: -15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 7vw;
  background-color: #fff;
  height: 7vw;
  border-radius: 50%;
  cursor: pointer;
}
.whiteBg p {
  margin-right: 5vw;
}
.searchBtn {
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  max-width: 100px;
  max-height: 33px;
  width: 30vw;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
#copyToast {
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 50vw;
  height: 10vw;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: all 0.5s;
}
#copyToast.hidden {
  bottom: -100%;
}
#copyToast p {
  color: #fff;
}

@media (min-width: 820px) {
  .closeBtn {
    position: absolute;
    bottom: -15%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    height: 40px;
  }
}
</style>
