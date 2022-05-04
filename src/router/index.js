import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home')
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('../views/question')
      },
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('../views/userinfo')
      },
      {
        path: '/video',
        name: 'Video',
        component: () => import('../views/video')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
