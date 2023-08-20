import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import Panel from '../pages/Panel.vue'
import Wallet from '../pages/Wallet.vue'
import CreatedAccount from '../pages/CreatedAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/panel',
    name: 'panel',
    component: Panel
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  },
  {
    path: '/created-account',
    name: 'createdAccount',
    component: CreatedAccount
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
