import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/ref',
  name: 'ref',
  component: () => import('../views/ref.vue')
},
{
  path: '/reactive',
  name: 'reactive',
  component: () => import('../views/reactive.vue')
},
{
  path: '/Fragment',
  name: 'Fragment',
  component: () => import('../views/Fragment.vue')
},
{
  path: '/Teleport',
  name: 'Teleport',
  component: () => import('../views/Teleport.vue')
},
{
  path: '/TodoMvc',
  name: 'TodoMvc',
  component: () => import('../views/TodoMvc.vue')
},
{
  path: '/demo6',
  name: 'demo6',
  component: () => import('../views/demo6.vue')
}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
