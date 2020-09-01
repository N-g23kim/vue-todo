import Vue from 'vue'
import Router from 'vue-router'
import About from './components/todo-about'
import Content from './components/todo-content'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Content
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});
