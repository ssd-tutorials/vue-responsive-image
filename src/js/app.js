window._ = require('lodash');
window.Vue = require('vue');

import EventHandler from './core/EventHandler';
window.EventHandler = new EventHandler;

import ViewPort from './core/ViewPort';
window.ViewPort = new ViewPort;

Vue.component('image-tag', require('./components/Image.vue'));

const app = new Vue({
    el: '#app'
});