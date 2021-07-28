import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children:[{
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../pages/Home/Index.vue')
    }]
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    children:[{
      path: 'login',
      alias: '/auth',
      component: () => import(/* webpackChunkName: "login" */ '../pages/Auth/Login.vue')
    },{
      path: 'register',
      component: () => import(/* webpackChunkName: "register" */ '../pages/Auth/register/index.vue'),
      children:[{
        path: '',
        name: 'postcode',
        component: () => import(/* webpackChunkName: "postcode" */ '../pages/Auth/register/postcode.vue')
      },{
        path: 'aanbod',
        name: 'aanbod',
        component: () => import(/* webpackChunkName: "aanbod" */ '../pages/Auth/register/aanbod.vue')
      },{
        path: 'kwetsbaar',
        name: 'kwetsbaar',
        component: () => import(/* webpackChunkName: "kwetsbaar" */ '../pages/Auth/register/kwetsbaar.vue')
      },{
        path: 'bevestiging',
        name: 'bevestiging',
        component: () => import(/* webpackChunkName: "bevestiging" */ '../pages/Auth/register/bevestiging.vue')
      }]
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
