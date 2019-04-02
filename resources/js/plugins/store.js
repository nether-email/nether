import {get, has, each} from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState({
        paths: [
            'token'
        ]
    })],

    state: {}
});
