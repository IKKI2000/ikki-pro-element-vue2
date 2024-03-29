import Vue from 'vue';
import ikki from '@/ikki.vue';
import i18n from '@/plugins/i18n';
import '@/plugins/element';
import '@/plugins/fontawesome';
import router from '@/router';
import store from '@/store';
import '@/plugins/axios';
import '@/api';
import '@/utils';

process.env.NODE_ENV === 'development' && require('@/mock');

Vue.config.productionTip = false;

new Vue({
    i18n,
    router,
    store,
    render: (h) => h(ikki),
}).$mount('#ikki');
