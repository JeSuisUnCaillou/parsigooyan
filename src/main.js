import './style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createGtag } from 'vue-gtag'
import { registerSW } from 'virtual:pwa-register'

// Register service worker with auto-update and reload
registerSW({
  onNeedRefresh() {
    // New content is available, reload the page automatically
    window.location.reload()
  },
  onOfflineReady() {
    console.log('App is offline. It can\'t access the definitions database.')
  },
})

const app = createApp(App)

const gtag = createGtag({ tagId: 'G-6ZTS9KR80W', pageTracker: { router } })
app.use(gtag)

app.use(createPinia())
app.use(router)

app.mount('#app')
