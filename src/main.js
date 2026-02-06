import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(Toast).use(router);
app.mount('#app');
