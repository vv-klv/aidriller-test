import AboutPage from '@/pages/AboutPage';
import AddressPage from '@/pages/AddressSearchPage';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/search',
    component: AddressPage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
