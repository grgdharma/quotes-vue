import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app');

import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
import QuotoLists from './components/QuotoLists.vue'
import QuoteDetail from './components/QuoteDetail.vue'
// Collection of routes
const routes = [
    {
        path: '/', 
        component: TheWelcome, 
    },
    { 
        path: '/quotes', 
        component: QuotoLists, 
    },
    { 
        path: '/quote/:id', 
        name: 'quote',
        component: QuoteDetail, 
        props: true
    },
]
// Creating a router
const router = createRouter({
    history:createWebHistory(),
    routes:routes,
})

const app = createApp(App);
app.use(router);// use router on app
app.mount('#app');
