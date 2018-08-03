<template>
    <div class="white-bg mrgBtm">
        <div class="gridContainer">

            <div class="mainTitle mrgBtm hasBorder clearfix">
                <div class="name pullRight" v-text="title"></div>
                <router-link :to="url" class="more pullLeft">مشاهده الكل</router-link>
            </div>

            <div class="infographSlider downSpaceSlider reorderEle">
                <order-btn slug="home_infograph">
                </order-btn>
                <div class="flexslider carousel carouselFour downPosition" ref="infograph_slider">
                    <ul class="slides">

                        <li v-for="post in posts">
                            <div class="caricaturePost">
                                <router-link :to="`?popup=infograph&id=${post.id}`">
                                    <div class="avatar">
                                        <img :src="post.image_url" :alt="post.title" class="bgCover">
                                    </div>
                                </router-link>

                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import {initCarouselSlider} from '../partials/Helpers';

    export default {
        created() {
            // this.$store.dispatch('fetchInfograph').then(() => initCarouselSlider(this.$refs.infograph_slider, 4));
            this.$store.dispatch('fetchSection', {
                name: 'home_infograph',
                count: 4
            }).then(() => initCarouselSlider(this.$refs.infograph_slider, 4));
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
                block: state => state.mainStore.home_infograph
            })
        }
    }
</script>