/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import router from './Router';
import store from './store/index';
import SocialSharing from 'vue-social-sharing';
import VeeValidate from 'vee-validate';

window.Vue = require('vue');
window.flexslider = require('flexslider');
Vue.use(SocialSharing);
Vue.use(VeeValidate, {
    events: ''
});

const EventBus = new Vue();

router.beforeEach((to, from, next) => {
    if (to.query.popup === undefined && from.query.popup === undefined) {
        window.scrollTo(0, 0);
    }
    next();
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 404) {
        router.push({name: '404'});
    } else if (error.response.status === 500) {
        router.push({name: '500'});
    }
    return Promise.reject(error);
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('Application', require('./Application.vue'));
Vue.component('Login', require('./Login.vue'));
Vue.component('Share', require('./partials/Share.vue'));
Vue.component('Popup', require('./popups/Index.vue'));
Vue.component('Order', require('./components/Order.vue'));
Vue.component('OrderBtn', require('./components/OrderButton.vue'));

const app = new Vue({
    el: '#app',
    router,
    store
});
