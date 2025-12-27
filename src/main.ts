import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import VueApexCharts from 'vue3-apexcharts'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(VueQueryPlugin)
app.use(VueApexCharts)
app.mount('#root')

