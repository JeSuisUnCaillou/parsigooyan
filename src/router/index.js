import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LetterView from '../views/LetterView.vue'
import SearchResults from '../views/SearchResults.vue'
import Documents from '../views/Documents.vue'
import WordOfTheDateView from '../views/WordOfTheDateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // If the user used browser back/forward, restore their position
    if (savedPosition) {
      return savedPosition
    }
    // Otherwise, scroll to top
    return { top: 0 }
  },
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
    },
    {
      path: '/word-of-the-date/:date?',
      name: 'WordOfTheDate',
      component: WordOfTheDateView
    }
  ],
})

export default router
