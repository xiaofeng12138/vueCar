import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入地图配置
import '@/plugin/amap.js'
import './utils/command.js'
import './router/premit'

Vue.config.productionTip = false;

import './components/back/index'  //引入全局组件

//全局引入UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
