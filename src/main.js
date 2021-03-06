// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Map, Marker, load } from 'vue-google-maps'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'



Vue.config.productionTip = false
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, // 加入 store
    template: '<App/>',
    components: { App }
})