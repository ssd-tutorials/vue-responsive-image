import Vue from 'vue';

export default class {

    constructor() {
        this.vue = new Vue();
    }

    fire(event, ...data) {
        this.vue.$emit(event, ...data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }

}