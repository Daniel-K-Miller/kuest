import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobile: {
      isMobile: null,
      maxWidth: 550 + 1
    }
  },
  mutations: {
    setMobile(state, { isMobile }) {
      // check isMobile is populated
      if (
        isMobile === undefined ||
        isMobile === null ||
        typeof isMobile !== "boolean"
      ) {
        return;
      }
      state.mobile.isMobile = isMobile;
    }
  },
  actions: {}
});
