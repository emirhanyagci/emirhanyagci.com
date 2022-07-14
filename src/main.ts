import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router.js"
//****************COMPOENNTS********************
import selectSection from "./components/selectSection.vue"

import sectionContainer from "./components/sectionContainer.vue"


const app = createApp(App);

app.component("select-section",selectSection)

app.component("section-container",sectionContainer)
app.use(router)
app.mount('#app')
