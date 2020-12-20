import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/amandine/",
            name:"Home",
            component:Home, 
        },
        {
            path:"/amandine/shopping",
            name:"Shop",
            component:Shop, 
        },
        {
            path:"/amandine/contact",
            name:"Contact",
            component:Contact, 
            alias: "/contact-us",
        },
        {
            path:"/amandine/us-contact",
            redirect:{name :"Contact"},
        },
        {
            path: "/amandine/:catchAll(.*)",
            component: NotFound,
        },
    ]
});

export default router