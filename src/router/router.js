import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/pages/LoginView.vue'
import RegisterView from '../components/pages/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/:notFound(.*)', redirect: '/login' }
  ]
})

export default router
