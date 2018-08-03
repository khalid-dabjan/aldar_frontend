<template>
    <div>
        <app-nav>
        </app-nav>
        <router-view :key="$route.fullPath">
        </router-view>
        <popup>
        </popup>
        <app-footer>
        </app-footer>
        <div class="thePopup" v-if="orderOpened">
            <span class="closePopup" @click="close">X</span>
            <span class="closePopupRefresh" @click="closeRefresh"></span>
            <iframe :src="orderUrl"></iframe>
        </div>
        <loading>
        </loading>
    </div>
</template>

<script>
    import Nav from "./partials/Nav.vue";
    import Footer from "./partials/Footer.vue";
    import Loading from "./components/Loading.vue";

    export default {
        components: {
            "app-nav": Nav,
            "app-footer": Footer,
            "loading": Loading
        },
        created() {
            this.$store.dispatch('tryLogin');
            if (this.$route.fullPath !== '/') {
                setTimeout(() => {
                    this.$store.commit('setShowLoading', false);

                }, 1221);
            }
        },
        computed: {
            orderOpened() {
                return this.$store.state.mainStore.orderOpened;
            },
            orderUrl() {
                return this.$store.state.mainStore.orderUrl;
            },
            loadedSectionsCounter() {
                return this.$store.state.mainStore.loaded_sections_counter;
            },
            sectionsToLoad() {
                return this.$store.state.mainStore.sections_to_load;
            }
        },
        methods: {
            close() {
                this.$store.commit('setOrderOpen', {open: false, url: ''});
            },
            closeRefresh() {
                this.$store.commit('setOrderOpen', {open: false, url: ''});
                window.location.reload();
            }
        },
        watch: {
            loadedSectionsCounter(val) {
                if (val === this.sectionsToLoad.length) {
                    this.$store.commit('setShowLoading', false);
                }
            }
        }
    };
</script>
