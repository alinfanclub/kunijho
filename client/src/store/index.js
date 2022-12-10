import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      loading: true,
    };
  },
});

export default store;
