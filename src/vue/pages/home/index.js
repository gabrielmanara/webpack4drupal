import Message from '@components/Message'
import Vue from 'vue';


Vue.component('Message', Message);

const vm = new Vue({
    el: '#app',
});
