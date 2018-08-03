import mock from "./mocks/postsMock";
import sectionMock from "./mocks/sectionStoreMock";
import albumsMock from "./mocks/albumsMock";
import navMock from './mocks/navStoreMock';
import tagsMock from "./mocks/tagsMock";
import pollMock from "./mocks/pollMock";
import weatherMock from "./mocks/weatherMock";
import marketsMock from "./mocks/marketsMock";
import matchesMock from "./mocks/matchesMock";
import commoditiesMock from "./mocks/commoditiesMock";
import detailsMock from './mocks/detailsStoreMock';
import breadcrumb from './mocks/breadcrumbMock';
import pageMock from './mocks/pageMock';
import footerNavMock from './mocks/footerNavMock';

const state = {
    home_slider: [],
    home_news: [],
    home_business: [],
    home_local: [],
    home_sports: [],
    home_culture: [],
    home_videos: [],
    home_articles: [],
    home_infograph: [],
    home_women: [],
    home_religion: [],
    home_accidents: [],
    home_health: [],
    home_tech: [],
    home_world: [],
    home_picks: [],

    sections_to_load: [
        'home_slider',
        'home_investigation'
    ],
    loaded_sections_counter: 0,

    section_posts: [],
    section_block_posts: [],

    // section_morocco: [],
    // section_1_morocco: [],
    // section_world: [],
    // section_1_world: [],
    // section_business: [],
    // section_1_business: [],
    // section_politics: [],
    // section_1_politics: [],
    // section_sports: [],
    section_infograph: [],

    featured_videos: [],
    featured_albums: [],

    search_results: [],

    category: {},
    videos_list: [],
    album_slider: [],
    album_list: [],
    infograph_list: [],

    // nav_items: [],
    header: [],//nav

    home_investigation: [],
    hashtags: [],
    poll: {},
    weather: {},
    markets: [],
    winCompanies: [],
    lossCompanies: [],
    valueCompanies: [],
    quantityCompanies: [],

    matches: {},
    commodities: [],

    details: {},
    most_read: [],
    related: [],
    breadcrumb: [],

    articles_list: [],

    page: {},

    footer_navigation: [],

    token: null,
    orderOpened: false,
    orderUrl: '',
    showLoading: true
};

// actions
const actions = {
    // fetchSlider({commit}) {
    //     return new Promise((resolve, reject) => {
    //         axios.get('block/home_slider').then(({data}) => {
    //             commit('fill', {items: data, propName: 'slider'});
    //             resolve(data);
    //         });
    //     });
    // },
    fetchSection({commit, state}, {name, count, offset, isMore, prop}) {
        return new Promise((resolve, reject) => {
            let queryString = {};
            if (count) {
                queryString['count'] = count;
            }
            if (offset) {
                queryString['offset'] = offset;
            }
            let propName = prop ? prop : name;
            axios.get(`block/${name}`, {params: queryString}).then(({data}) => {
                commit('fill', {items: data, propName, isAppend: isMore});
                if (state.sections_to_load.includes(name)) {
                    commit('incrementLoadedSections');
                }
                // if (state.loaded_sections_counter === state.sections_to_load.) {
                //     commit('incrementLoadedSections');
                // }
                resolve(data);
            });
        });

    },
    // fetchVideos({commit}) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             //waiting API
    //             let items = mock(4);
    //             commit('fill', {items, propName: 'videos'});
    //             resolve(items);
    //         }, 300);
    //     });
    // },
    // fetchArticles({commit}) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             //waiting API
    //             let items = mock(4);
    //             commit('fill', {items, propName: 'articles'});
    //             resolve(items);
    //         }, 300);
    //     });
    // },
    // fetchInfograph({commit}) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             //waiting API
    //             let items = mock(6);
    //             commit('fill', {items, propName: 'infograph'});
    //             resolve(items);
    //         }, 300);
    //     });
    // },
    search({commit}, {q, count, offset, isMore, isOrder}) {
        let queryString = {};
        if (count) {
            queryString['count'] = count;
        }
        if (offset) {
            queryString['offset'] = offset;
        }
        queryString['q'] = q;
        return new Promise(resolve => {
            axios.get(`search`, {params: queryString}).then(({data}) => {
                if (!isOrder) {
                    commit('fill', {items: data, propName: 'search_results', isAppend: isMore});
                }
                resolve(data);
            });
        });
    },
    getTag({commit}, {id, count, offset, isMore}) {
        let queryString = {};
        if (count) {
            queryString['count'] = count;
        }
        if (offset) {
            queryString['offset'] = offset;
        }
        return new Promise(resolve => {
            axios.get(`post/tag/${id}`, {params: queryString}).then(({data}) => {
                commit('fill', {items: data, propName: 'search_results', isAppend: isMore});
                resolve(data);
            });
        });
    },
    //
    fetchCategoryPosts({commit}, {slug, count, offset, isMore}) {
        let name = `section_posts`;
        let queryString = {};
        if (count) {
            queryString['count'] = count;
        }
        if (offset) {
            queryString['offset'] = offset;
        }
        return new Promise(resolve => {
            axios.get(`category/${slug}`, {params: queryString}).then(({data}) => {
                commit('fill', {items: data, propName: name, isAppend: isMore});
                resolve(data);
            });
        });
    },
    fetchCategory({commit}, {slug}) {
        return new Promise(resolve => {
            axios.get(`getCategory/${slug}`).then(({data}) => {
                commit('fill', {items: data, propName: 'category'});
                resolve(data);
            });
        });

    },
    fetchVideosList({commit}, {count, offset, isMore}) {
        return new Promise((resolve, reject) => {
            let queryString = {};
            if (count) {
                queryString['count'] = count;
            }
            if (offset) {
                queryString['offset'] = offset;
            }
            axios.get(`videos`, {params: queryString}).then(({data}) => {
                commit('fill', {items: data, propName: 'videos_list', isAppend: isMore});
                resolve(data);
            });
        });

    },
    fetchAlbumSlider({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //api
                let items = albumsMock(5);
                commit('fill', {items, propName: 'album_slider'});
                resolve(items);
            }, 300);
        });
    },
    fetchAlbumsList({commit}, {count, offset, isMore}) {
        return new Promise((resolve, reject) => {
            let queryString = {};
            if (count) {
                queryString['count'] = count;
            }
            if (offset) {
                queryString['offset'] = offset;
            }
            axios.get(`albums`, {params: queryString}).then(({data}) => {
                commit('fill', {items: data, propName: 'album_list', isAppend: isMore});
                resolve(data);
            });
        });
    },
    fetchInfographList({commit}, {count, isMore}) {
        setTimeout(() => {
            let items = mock(count);
            commit('fill', {items, propName: 'infograph_list', isAppend: isMore});
        }, 300);
    },
    fetchNav({commit}, name) {
        axios.get(`/nav/${name}`).then(({data}) => {
            commit('fill', {items: data, propName: name});
        });

        setTimeout(() => {
            //waiting API
            let items = navMock();
            commit('fill', {items, propName: 'nav_items'});
        }, 300);
    },
    //
    fetchInvestigations({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //waiting API
                let items = mock(4);
                commit('fill', {items, propName: 'investigations'});
                resolve(items);
            }, 300);
        });
    },
    fetchTrendingHashtags({commit}) {
        axios.get('/tag/trending').then(({data}) => {
            commit('fill', {items: data, propName: 'hashtags'});
        });
    },
    fetchPoll({commit}) {
        setTimeout(() => {
            //waiting API
            let items = pollMock();
            commit('fill', {items, propName: 'poll'});
        }, 300);
    },
    submitPoll(context, answer) {
        //waiting API
        console.log(answer);
    },
    fetchWeather({commit}) {
        return new Promise((resolve, reject) => {
            axios.get('https://api.dotemirates.com/weather').then(({data}) => {
                commit('fill', {items: data, propName: 'weather'});
                resolve();
            });
        });
    },
    fetchMarkets({commit}) {
        axios.get('https://api.dotemirates.com/markets').then(({data}) => {
            commit('fill', {items: data, propName: 'markets'});
        });
    },
    fetchCompanies({commit}, type) {
        axios.get('https://api.dotemirates.com/companies?type=' + type).then(({data}) => {
            commit('fill', {items: data, propName: `${type}Companies`});
        });
    },
    fetchMatches({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //waiting API
                let items = matchesMock();
                commit('fill', {items, propName: 'matches'});
                resolve(items);
            }, 300);
        });
    },
    fetchCommodities({commit}) {
        axios.get('https://api.dotemirates.com/commodities').then(({data}) => {
            console.log(data);
            commit('fill', {items: data, propName: 'commodities'});
        });
    },
    submitNewsletter({commit}, emailAddress) {
        return new Promise((resolve, reject) => {
            axios.post('newsletter', {email: emailAddress}).then(({data}) => {
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
    },

    fetchDetails({commit}, id) {
        commit('fill', {items: {}, propName: 'details'});
        return new Promise(resolve => {
            axios.get(`post/details/${id}`).then(({data}) => {
                commit('fill', {items: data, propName: 'details'});
                resolve(data);
            });
        });
    },
    fetchMostRead({commit}) {
        commit('fill', {items: [], propName: 'most_read'});
        axios.get(`post/mostViewed`).then(({data}) => {
            commit('fill', {items: data, propName: 'most_read'});
        });
    },
    fetchRelated({commit}, id) {
        commit('fill', {items: [], propName: 'related'});
        axios.get(`post/related/${id}`).then(({data}) => {
            commit('fill', {items: data, propName: 'related'});
        });
    },
    fetchBreadcrumb({commit}, id) {
        axios.get(`post/breadcrumb/${id}`).then(({data}) => {
            commit('fill', {items: data, propName: 'breadcrumb'});
        });
    },
    fetchArticlesList({commit}, {count, offset, isMore, author_id}) {
        let queryString = {};
        if (count) {
            queryString['count'] = count;
        }
        if (offset) {
            queryString['offset'] = offset;
        }
        if (author_id) {
            queryString['author_id'] = author_id;
        }
        return new Promise(resolve => {
            axios.get(`articles`, {params: queryString}).then(({data}) => {
                commit('fill', {items: data, propName: 'articles_list', isAppend: isMore});
                resolve(data);
            });
        });
    },
    fetchPage({commit}, {slug}) {
        axios.get(`page/${slug}`).then(({data}) => {
            commit('fill', {items: data, propName: 'page'});
        });
    },
    fetchFooterNav({commit}) {
        axios.get(`nav/getFooterNavigation`).then(({data}) => {
            console.log(data);
            commit('fill', {items: data, propName: 'footer_navigation'});
        });
        // setTimeout(() => {
        //     let items = footerNavMock();
        //     commit('fill', {items, propName: 'footer_navigation'});
        // }, 300);
    },
    postContactUs({commit}, payload) {
        axios.post(`contact-us`, payload).then(({data}) => {
            console.log(data);
        });
    },

    login({commit}, cred) {
        return new Promise((resolve, reject) => {
            axios.post('/login', cred).then(({data}) => {
                localStorage.setItem('accessToken', data.token);
                commit('authenticate', data.token);
                resolve(data);
            }).catch(error => {
                reject(error.response);
            });
        });
    },
    tryLogin({commit}) {
        return new Promise(resolve => {
            let token = localStorage.getItem('accessToken')
            commit('authenticate', token);
            resolve(token)
        });
    }

};

// mutations
const mutations = {
    fill(state, {items, propName, isAppend}) {
        if (isAppend === true) {
            if (state[propName].constructor === Array) {
                state[propName] = state[propName].concat(items);
            } else {
                state[propName].posts = state[propName].posts.concat(items.posts);
            }
        } else {
            state[propName] = items;
        }
        if (typeof getImages2 === 'function') {
            getImages2();
        }
    },
    authenticate(state, token) {
        state.token = token;
    },
    setOrderOpen(state, {open, url}) {
        state.orderOpened = open;
        state.orderUrl = url;
    },
    setShowLoading(state, value) {
        state.showLoading = value;
    },
    incrementLoadedSections(state) {
        state.loaded_sections_counter++;
    }
};

export default {
    state,
    actions,
    mutations,
};