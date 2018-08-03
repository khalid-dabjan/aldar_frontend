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

Vue.use(Router);

let langs = [
    'ar',
    'en'
];

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: Home,
//         },
//         {
//             path: '/details/:id',
//             name: 'details',
//             component: Details,
//             props: true,
//         },
//         {
//             path: '/category/infograph',
//             name: 'infograph',
//             component: Caricature,
//         },
//         {
//             path: '/category/caricature',
//             name: 'caricature',
//             component: Infograph,
//         },
//         {
//             path: '/category/:slug',
//             name: 'section',
//             component: Section,
//             props: true,
//         },
//         {
//             path: '/videos',
//             name: 'videos',
//             component: Videos,
//         },
//         {
//             path: '/albums',
//             name: 'albums',
//             component: Albums,
//         },
//         {
//             path: '/search',
//             name: 'search',
//             component: Search,
//         },
//         {
//             path: '/articles',
//             name: 'articles',
//             component: Articles,
//         },
//         {
//             path: '/author/:id',
//             name: 'author',
//             component: Articles,
//             props: true
//         },
//         {
//             path: '/page/:slug',
//             name: 'page',
//             component: InfoPage,
//             props: true,
//         },
//         {
//             path: '/tags/:id',
//             name: 'tags',
//             component: TagPage,
//             props: true,
//         },
//         {
//             path: "/404",
//             name: '404',
//             component: PageNotFound
//         },
//         {
//             path: "/500",
//             name: '500',
//             component: ServerError
//         },
//         {
//             path: '*',
//             redirect: '/404'
//         }
//     ]
// });

let router = new Router({
    routes: [
        {
            path: '/:lang',
            name: 'home',
            component: Home,
        },
        {
            path: '/',
            redirect: '/ar'
        },
        {
            path: '/:lang/details/:id',
            name: 'details',
            component: Details,
            props: true,
        },
        {
            path: '/:lang/category/infograph',
            name: 'infograph',
            component: Caricature,
        },
        {
            path: '/:lang/category/caricature',
            name: 'caricature',
            component: Infograph,
        },
        {
            path: '/:lang/category/:slug',
            name: 'section',
            component: Section,
            props: true,
        },
        {
            path: '/:lang/videos',
            name: 'videos',
            component: Videos,
        },
        {
            path: '/:lang/albums',
            name: 'albums',
            component: Albums,
        },
        {
            path: '/:lang/search',
            name: 'search',
            component: Search,
        },
        {
            path: '/:lang/articles',
            name: 'articles',
            component: Articles,
        },
        {
            path: '/:lang/author/:id',
            name: 'author',
            component: Articles,
            props: true
        },
        {
            path: '/:lang/page/:slug',
            name: 'page',
            component: InfoPage,
            props: true,
        },
        {
            path: '/:lang/tags/:id',
            name: 'tags',
            component: TagPage,
            props: true,
        },

        {
            path: "/:lang/404",
            name: '404',
            component: PageNotFound
        },
        {
            path: "/:lang/500",
            name: '500',
            component: ServerError
        },
        // {
        //     path: '*',
        //     redirect: {
        //         name: '404'
        //     }
        // }
    ]
});

router.beforeEach(((to, from, next) => {
    let lang = langs.includes(from.params.lang) ? from.params.lang : 'ar';
    if (!to.params.lang) {
        // let lang = langs.includes(from.params.lang) ? from.params.lang : 'ar';
        console.log(lang);
        next({
            path: `/${lang}${to.fullPath}`,
            params: {
                lang,
                ...to.params
            }
        });
    } else {
        next({
            params: {
                lang,
                ...to.params
            }
        });
    }
}));

router.afterEach((to, from) => {
    Vue.config.lang = to.params.lang
});
export default router;