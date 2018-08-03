import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue';
import Details from './pages/Details.vue';
import Section from './pages/Section.vue';
import Videos from './pages/Videos.vue';
import Albums from './pages/Albums.vue';
import Search from './pages/Search.vue';
import Infograph from './pages/Infograph.vue';
import Caricature from './pages/Caricature.vue';
import Articles from './pages/Articles.vue';
import InfoPage from './pages/InfoPage.vue';
import PageNotFound from './pages/errors/PageNotFound.vue';
import ServerError from './pages/errors/ServerError.vue';
import TagPage from './pages/TagPage';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/details/:id',
            name: 'details',
            component: Details,
            props: true,
        },
        {
            path: '/category/infograph',
            name: 'infograph',
            component: Infograph,
            props: {
                type: 'infograph'
            }
        },
        {
            path: '/category/caricature',
            name: 'caricature',
            component: Infograph,
            props: {
                type: 'caricature'
            }
        },
        {
            path: '/category/videos',
            name: 'videos',
            component: Videos,
        },
        {
            path: '/category/albums',
            name: 'albums',
            component: Albums,
        },
        {
            path: '/category/:slug',
            name: 'section',
            component: Section,
            props: true,
        },
        // {
        //     path: '/videos',
        //     name: 'videos',
        //     component: Videos,
        // },
        // {
        //     path: '/albums',
        //     name: 'albums',
        //     component: Albums,
        // },
        {
            path: '/search',
            name: 'search',
            component: Search,
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles,
        },
        {
            path: '/author/:id',
            name: 'author',
            component: Articles,
            props: true
        },
        {
            path: '/page/contact-us',
            name: 'contact_us',
            component: ContactUs,
            props: true,
        },
        {
            path: '/page/:slug',
            name: 'page',
            component: InfoPage,
            props: true,
        },
        {
            path: '/tags/:id',
            name: 'tags',
            component: TagPage,
            props: true,
        },
        {
            path: "/404",
            name: '404',
            component: PageNotFound
        },
        {
            path: "/500",
            name: '500',
            component: ServerError
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
