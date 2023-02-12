import Vue from 'vue';
import sass from '@/assets/style/theme/ikki.module.scss';

const _utils = {
    sass,
};

const utils = (Vue) => {
    Vue.$utils = _utils;
    window.$utils = _utils;
    Object.defineProperties(Vue.prototype, {
        $utils: {
            get() {
                return _utils;
            },
        },
    });
};

Vue.use(utils);

export default utils;
