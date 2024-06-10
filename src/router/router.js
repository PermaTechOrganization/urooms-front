import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/pages/LoginView.vue'
import RegisterView from '../components/pages/RegisterView.vue'
import HomeView from '@/components/pages/HomeView.vue'
import SearchView from '@/components/pages/SearchView.vue'
import ReservationsView from '@/components/pages/ReservationsView.vue'
import PublicationsView from '@/components/pages/PublicationsView.vue'
import PerfilView from "@/components/pages/PerfilView.vue";
import CommentsView from '@/components/pages/CommentsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    {
      path: '/home',
      component: HomeView,
      children: [
        { path: '', redirect: '/home/search' }, // Redirige a 'search' por defecto
        { path: 'search', component: SearchView },
        { path: 'reservations', component: ReservationsView },
        { path: 'publications', component: PublicationsView },
        { path: 'perfil', component: PerfilView },
        {
          path: 'comments/:id',
          component: CommentsView,
          name: 'Comments'
        }
      ]
    },
    { path: '/:notFound(.*)', redirect: '/login' }
  ]
})

export default router
