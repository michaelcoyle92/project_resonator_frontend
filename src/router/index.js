
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/items',
    name: 'items-index',
    component: () => import('../views/ItemsIndex.vue')
  },
  {
    path: '/items/:id',
    name: 'items-show',
    component: () => import('../views/ItemsShow.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/reverb',
    name: 'reverb',
    component: () => import('../views/ReverbView.vue')
  },
  {
    path: '/nopage',
    name: 'Nopage',
    component: () => import('../views/NoPage.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/nopage',
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
