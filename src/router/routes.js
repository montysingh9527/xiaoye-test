const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    mate: {
      tabName: "首页",
    },
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/css",
    name: "css",
    component: () => import("src/pages/css/index.vue"),
    mate: {
      tabName: "CSS案例",
    },
    children: [
      {
        path: "ios",
        name: "css/ios",
        mate:{
          titlename:"CSS-仿开关按钮切换练习"
        },
        component: () => import("src/pages/css/component/ios.vue"),
      },
    ],
  },
  {
    path: "/card",
    name: "card",
    mate:{
      titlename:"CSS-过渡练习"
    },
    component: () => import("src/pages/css/component/card.vue"),
  },
  {
    path: "/btnindex",
    name: "btnindex",
    mate:{
      titlename:"按钮切换"
    },
    component: () => import("src/pages/vueTest/btnIndex/index.vue"),
  },
  {
    path: "/search",
    name: "search",
    mate:{
      titlename:"input搜索"
    },
    component: () => import("src/pages/vueTest/search/index.vue"),
  },
  {
    path: "/tabBar",
    name: "tabBar",
    mate:{
      titlename:"tab栏切换"
    },
    component: () => import("src/pages/vueTest/tabBar/index.vue"),
  },
  {
    path: "/mixin",
    name: "mixin",
    mate:{
      titlename:"mixins/slot"
    },
    component: () => import("src/pages/vueTest/mixinTest/index.vue"),
  },
  {
    path: "/filters",
    name: "filters",
    mate:{
      titlename:"过滤器filters"
    },
    component: () => import("src/pages/vueTest/filters/index.vue"),
  },
  {
    path: "/stars",
    name: "stars",
    mate:{
      titlename:"五角星评价"
    },
    component: () => import("src/pages/vueTest/stars/index.vue"),
  },
  {
    path: "/directive",
    name: "directive",
    mate:{
      titlename:"指令directives—tab栏切换"
    },
    component: () => import("src/pages/vueTest/directive/index.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    mate:{
      titlename:"派发器示例"
    },
    component: () => import("src/pages/vueTest/counter/index.vue"),
  },
  {
    path: "/calculator",
    name: "calculator",
    mate:{
      titlename:"派发器案例—计算器"
    },
    component: () => import("src/pages/vueTest/calculator/index.vue"),
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
