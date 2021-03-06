import Vue from 'vue';
import App from './app/App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import './assets/main.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
