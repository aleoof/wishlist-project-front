import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishlistView from '@/views/WishlistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumb: [{ name: 'Home' }],
      },
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView,
      meta: {
        breadcrumb: [{ name: 'Home', link: '/' }, { name: 'Wishlist' }],
      },
    },
  ],
})

export default router
