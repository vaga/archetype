import { createApp } from 'vue'
import App from './App.vue'
import { createAPI } from './api'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ShowView from './views/ShowView.vue'

const app = createApp(App)

app.use(
  createAPI('fnAEVbMXQEACTEZvWKrHm8yGvszNR9nsdF7nTK9_'),
)

app.use(
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: HomeView },
      { path: '/:id', component: ShowView, props: true },
    ],
  })
)

app.mount('#app')
