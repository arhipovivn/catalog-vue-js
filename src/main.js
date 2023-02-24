import { createApp } from 'vue'
import store from './vuex/store'
import App from './App.vue'
import '@/assets/styles/styles.scss'
const app=createApp(App)
app.use(store)
app.mount('#app')

