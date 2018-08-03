import Vue from 'vue';
import Vuex from 'vuex';
import mainStore from './modules/homeStore';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        mainStore,
    }
})