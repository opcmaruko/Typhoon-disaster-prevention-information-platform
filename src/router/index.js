import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vue2 from '@/components/vue2'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/vue2',
        name: 'vue2',
        component: vue2
    }, {
        path: '/list',
        name: 'list',
        component: list
    }]
})