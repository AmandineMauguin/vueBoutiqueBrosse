import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Product from './components/Product.vue'
import store from "./store/indexStore.js"


const app = createApp(App)
app.component("Product",Product)
app.use(router)
app.use(store)
app.mount('#app')