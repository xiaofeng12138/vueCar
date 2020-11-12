import Vue from "vue";
import Vuex from "vuex";
import Location from './modules/location.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    Location
  }
});
