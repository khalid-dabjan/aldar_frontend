<template>
    <div class="mrgBtm reorderEle">
        <order-btn slug="home_investigation">
        </order-btn>
        <div class="mainTitle">
            <h2 class="name" v-text="title"></h2>
        </div>
        <div class="flexslider normalSlider arrows1 downPosition investigationsSlider" ref='inv_slider'>
            <ul class="slides">
                <li v-for="post in posts">
                    <div class="one">
                        <router-link :to="post.url" class="avatar">
                            <img :src="post.image_url" class="bgCover" :alt="post.title">
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import {initInvestSlider} from '../partials/Helpers';

    export default {
        created() {
            // this.$store.dispatch('fetchInvestigations').then(() => initNormalSlider(this.$refs.inv_slider));
            this.$store.dispatch('fetchSection', {name: 'home_investigation'}).then(() => initInvestSlider(this.$refs.inv_slider));
        },
        computed: {
            posts() {
                return this.block.posts ? this.block.posts : [];
            },
            url() {
                return this.block.block ? this.block.block.url : '';
            },
            title() {
                return this.block.block ? this.block.block.name : '';
            },
            ...mapState({
                block: state => state.mainStore.home_investigation
            })
        }
    }
</script>