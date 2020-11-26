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
      },
      {
        path:'/login',
        name:'Login',
        meta:{
          title:'登录'
        },
        component:resolve=>require(['@/views/account/login.vue'],resolve)
      },
      {
        path:'/register',
        name:'Register',
        meta:{
          title:'注册'
        },
        component:resolve=>require(['@/views/account/register.vue'],resolve)
      },
      {
        path:'/forget',
        name:'Forget',
        meta:{
          title:'重置密码'
        },
        component:resolve=>require(['@/views/account/forget.vue'],resolve)
      },
      {
        path:'/user',
        name:'User',
        component:resolve=>require(['@/views/personal/index.vue'],resolve)
      },
      {
        path:'/user',
        name:'User',
        component:resolve=>require(['@/views/personal/index.vue'],resolve)
      },
      {
        path:'/safe',
        name:'Safe',
        component:resolve=>require(['@/views/safe/index.vue'],resolve)
      },
      {
        path:'/password',
        name:'Password',
        component:resolve=>require(['@/views/safe/password.vue'],resolve)
      }
  ]

},
  
];

const router = new VueRouter({
  routes
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
