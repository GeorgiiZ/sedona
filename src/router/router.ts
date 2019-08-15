import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import Layout from '../pages/Layout.vue';
import Home from '../pages/home/Home.vue';
import SedonaPhoto from '../pages/sedona-photo/SedonaPhoto.vue';

Vue.use(Router);

const home: RouteConfig = { path: 'home', name: 'Home', component: Home }; 
const sedonaPhoto: RouteConfig = { path: 'sedona-photo', name: 'SedonaPhoto', component: SedonaPhoto };

const layout: RouteConfig = {
    path: '/',
    redirect: 'home',
    name: 'layout',
    component: Layout,
    children: [
        home,
        sedonaPhoto,
    ],
};

export default new Router({
    routes: [
        layout,
    ],
});