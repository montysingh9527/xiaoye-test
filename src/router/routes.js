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
        component: () => import("src/pages/css/component/ios.vue"),
      },
    ],
  },
  {
    path: "/card",
    name: "card",
    component: () => import("src/pages/css/component/card.vue"),
  },
  {
    path: "/btnindex",
    name: "btnindex",
    component: () => import("src/pages/vueTest/btnIndex/index.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("src/pages/vueTest/search/index.vue"),
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
