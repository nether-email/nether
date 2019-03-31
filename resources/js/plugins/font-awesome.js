import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Vue.component('fa', FontAwesomeIcon);
window.fa = library;