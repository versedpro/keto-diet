
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
// import { faCheckCircle as fasCheckCircle } from '@fortawesome/pro-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter)
Vue.use(BootstrapVue)

library.add(faCheckCircle)
library.add(faCheck)
// library.add(fasCheckCircle)



// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('text-landing', require('./components/LandingTitle.vue'));
// Vue.component('articles', require('./components/Articles.vue'));
Vue.component('grafica-component', require('./components/graficos.vue'));
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = [
    {path: '/', component: require('./components/LandingTitle.vue')},
    {path: '/question', component: require('./components/Question.vue')},
    {path: '/question/get_plan', component: require('./components/Question.vue'), props: {planBox: true}},
    {path: '/summary', component: require('./components/Summary.vue')},
    {path: '/plan', component: require('./components/Plan.vue')},
]

const router = new VueRouter({
    routes
})

// const app = new Vue({
//     el: '#app'
// });

const app = new Vue({
    router
}).$mount('#app')