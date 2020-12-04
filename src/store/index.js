import Vue from "vue";
import Vuex from "vuex";
import Location from './modules/location.js'
import App from './modules/app.js'
import Config from './modules/config'
Vue.use(Vuex);

import Account from './modules/account'
export default new Vuex.Store({
  modules: {
    Account,
    Location,
    App,
    Config
  }
});
