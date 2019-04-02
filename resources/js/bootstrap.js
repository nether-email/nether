window.Vue = require('vue');

require('./plugins/axios');
require('./plugins/font-awesome');
require('./plugins/echo');

import router from './plugins/router';
import store from './plugins/store';

const app = new Vue({
    router, store,
    el: '#app'
});
