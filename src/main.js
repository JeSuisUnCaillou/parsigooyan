import './style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createGtag } from 'vue-gtag'

const app = createApp(App)

const gtag = createGtag({ tagId: 'G-6ZTS9KR80W', pageTracker: { router } })
app.use(gtag)

app.use(createPinia())
app.use(router)

app.mount('#app')
