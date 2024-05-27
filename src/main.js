import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from '../src/router/router'

//Theme
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'

//Components
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.component('InputText', InputText)
app.component('Button', Button)
app.component('TabMenu', TabMenu)

app.mount('#app')
