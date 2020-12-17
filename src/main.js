import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Product from './components/Product.vue'

const app = createApp(App)
app.component("Product",Product)
app.use(router)
app.mount('#app')