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
       // 设置资金密码
       {
        path: "/capital",
        name: "Capital",
        meta: {
          title: "设置资金密码"
        },
        component: () => import("../views/safe/capital")
      },
      // 绑定银行卡
      {
        path: "/bank",
        name: "Bank",
        meta: {
          title: "绑定银行卡"
        },
        component: () => import("../views/safe/bank")
      },
      // 绑定银行卡
      {
        path: "/bankAdd",
        name: "BankAdd",
        meta: {
          title: "添加银行卡"
        },
        component: () => import("../views/safe/bankAdd")
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
      },
      {
        path: "/authentication",
        name: "Authentication",
        meta: {
          title: "实名认证"
        },
        component: () => import("../views/authentication/index")
      },
       // 我的帐户
       {
        path: "/my",
        name: "My",
        meta: {
          title: "我的帐户"
        },
        component: () => import("../views/my/index")
      },
      // 充值
      {
        path: "/recharge",
        name: "Recharge",
        meta: {
          title: "充值"
        },
        component: () => import("../views/recharge/index")
      },
      // 订单
      {
        path: "/order",
        name: "Order",
        meta: {
          title: "租车订单"
        },
        component: () => import("../views/order/index")
      },
      {
        path: "/orderDetailed",
        name: "OrderDetailed",
        meta: {
          title: "订单详情"
        },
        component: () => import("../views/order/detailed")
      },
      {
        path: "/payStatus",
        name: "PayStatus",
        meta: {
          title: "支付状态"
        },
        component: () => import("../views/pay/status")
      },
      {
        path: "/payResult",
        name: "PayResult",
        meta: {
          title: "支付结果"
        },
        component: () => import("../views/pay/result")
      },
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
