import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "index", component:resolve=>require(['@/views/index/index.vue'],resolve),
  children:[
    {
      path:'/user',
      name:'User',
      component:resolve=>require(['@/views/personal/index.vue'],resolve)
    }
  ]

},
  
];

const router = new VueRouter({
  routes
});

export default router;
