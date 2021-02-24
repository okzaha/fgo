import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    click1: 0,
    click2: 0,
    click3: 0,
    click4: 0,
    click5: 0,
    click6: 0,
    click7: 0
  },
  mutations: {
    click11: state => {
      return state.click1++, (state.click7 += 24);
    },
    click22: state => {
      return state.click2++,(state.click7 += 15);
    },
    click33: state => {
      return state.click3++,(state.click7 += 24);
    },
    click44: state => {
      return state.click4++,(state.click7 += 24);
    },
    click55: state => {
      return state.click5++,(state.click7 += 15);
    },
    click66: state => {
      return state.click6++, (state.click7 += 24);
    },
    click111: state => {
      return (state.click1 = 0),
        (state.click2 = 0),
        (state.click3 = 0),
        (state.click4 = 0),
        (state.click5 = 0),
        (state.click6 = 0),
        (state.click7 = 0);
    },
    click121: state => {
      if (state.click1 > 0) {
        return state.click1--,(state.click7 -= 24);
      }
    },
    click122: state => {
      if (state.click2 > 0) {
        return state.click2--,(state.click7 -= 15);
      }
    },
    click123: state => {
      if (state.click3 > 0) {
        return state.click3--,(state.click7 -= 24);
      }
    },
    click124: state => {
      if (state.click4 > 0) {
        return state.click4--,(state.click7 -= 24);
      }
    },
    click125: state => {
      if (state.click5 > 0) {
        return state.click5--,(state.click7 -= 15);
      }
    },
    click126: state => {
      if (state.click6 > 0) {
        return state.click6--,(state.click7 -= 24);
      }
    },
    click1111: state => {
      if (state.click7 > 0) {
        alert(
          "ขอบคุณที่ใช้บริการ สินค้าที่คุณลูกค้าสั่งนั้นจะถูกจัดส่งให้ในเร็วๆนี้ "
        );
      }
      else if (state.click7 <= 0) {
        alert(
          "กลุนาเลือกสินค้าก่อน "
        );
      }
    }
  }
});
