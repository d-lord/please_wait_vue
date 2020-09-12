import Vue from 'vue'
import Router from 'vue-router'
import Welcome from "@/views/Welcome";
import Game from "@/views/Game";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/play',
            name: 'game',
            component: Game
        }
    ]
})

export default router