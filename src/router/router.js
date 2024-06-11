import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/pages/LoginView.vue'
import RegisterView from '../components/pages/RegisterView.vue'
import HomeView from '@/components/pages/HomeView.vue'
import SearchView from '@/components/pages/SearchView.vue'
import ReservationsView from '@/components/pages/ReservationsView.vue'
import PublicationsView from '@/components/pages/PublicationsView.vue'
import ProfileView from "@/components/pages/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    {
      path: '/home',
      component: HomeView,
      meta: { requiresAuth: true },
      props: route => ({ userRole: route.query.role }),
      children: [
        { path: '', redirect: '/home/search' }, // Redirige a 'search' por defecto
        { path: 'search', component: SearchView },
        { path: 'reservations', component: ReservationsView },
        { path: 'publications', component: PublicationsView },
        { path: 'profile', component: ProfileView }
      ]
    },
    { path: '/:notFound(.*)', redirect: '/login' }
  ]
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authenticated'); // Puedes cambiar esto para usar un mejor método de autenticación

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
