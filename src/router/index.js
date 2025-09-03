import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LetterView from '../views/LetterView.vue'
import SearchResults from '../views/SearchResults.vue'
import Documents from '../views/Documents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/letter/:letter',
      name: 'Letter',
      component: LetterView
    },
    {
      path: '/search',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/articles',
      name: 'Documents',
      component: Documents
    }
  ],
})

export default router
