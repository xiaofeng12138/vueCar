import VueAMap from 'vue-amap';
import Vue from 'vue'

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '60f854a8bee4cff7906eed51ee13265e',
  plugin: ['AMap.Geolocation','AMap.Walking'],
  v: '1.4.4',
  uiVersion:'1.0.11'
});