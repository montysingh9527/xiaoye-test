
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/css',
    name:"css",
    component: () => import('src/pages/css/index.vue'),
    children: [
      { path: 'css/ios', component: () => import('src/pages/css/component/ios.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
