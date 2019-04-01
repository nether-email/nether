import head from 'lodash/head';

// Inject into Vue.
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: window.routes || [],
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    const matched = head(to.matched);

    // Redirect home if we find no matching route.
    if (! matched) {
        next('/');
    }

    next();
})

export default router;