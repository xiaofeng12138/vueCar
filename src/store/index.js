import Vue from "vue";
import Vuex from "vuex";
import Location from './modules/location.js'
import App from './modules/app.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    Location,
    App
  }
});
