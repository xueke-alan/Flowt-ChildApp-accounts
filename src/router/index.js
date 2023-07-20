import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import qiankunConfig from "../../public/qiankun.config.json";
const baseUrl = qiankunConfig.baseUrl;
const routes = [
  {
    path: '/user',
    name: 'user',
    component: UserView, HomeView, AboutView
  }, {
    path: '/home',
    name: 'home',
    component: HomeView, AboutView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  // base: window.__POWERED_BY_QIANKUN__ ? '/code' : '/', // 重点4：qiankun进入子应用时，返回true,
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? `/${baseUrl}` : '/'),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
