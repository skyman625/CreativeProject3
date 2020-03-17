import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleCharStats from '../views/SingleCharStats.vue'
import Compare from '../views/Compare.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/singleCharStats',
  name: 'SingleCharStats',
  component: SingleCharStats
  },
  {
  path: '/compare',
  name: 'Compare',
  component: Compare
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
