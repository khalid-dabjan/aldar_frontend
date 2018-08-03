<template>
    <div class="white-bg mrgBtm">
        <div class="gridContainer">

            <div class="albumsSlider downSpaceSlider reorderEle">
                <order-btn slug="featured_albums">
                </order-btn>
                <div class="flexslider carousel carouselThree downPosition" ref="albums_slider">
                    <ul class="slides">
                        <li v-for="post in posts">
                            <div class="photosPost">

                                <router-link :to="`?popup=album&id=${post.id}`" class="avatar">
                                    <img :src="post.image_url" class="bgCover" :alt="post.title">
                                </router-link>

                                <div class="content">
                                    <div class="galleryNums">
                                        <div><i class="icon-photoicon"></i></div>
                                        <div v-text="photosCountDisplay(post)"></div>
                                    </div>
                                    <div class="title">
                                        <router-link :to="`?popup=album&id=${post.id}`" v-text="post.title">
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {initCarouselSlider} from '../partials/Helpers';

    export default {
        created() {
            // this.$store.dispatch('fetchAlbumSlider').then(() => initCarouselSlider(this.$refs.albums_slider, 3));
            // this.$store.dispatch('fetchSection', {name: this.name}).then(() => initVideoSlider(this.$refs.video_slider));

            this.$store.dispatch('fetchSection', {
                count: 3,
                name: 'featured_albums'
            }).then(() => initCarouselSlider(this.$refs.albums_slider, 3));
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
                block(state) {
                    return state.mainStore.featured_albums;
                }
            }),
        },
        methods: {
            photosCountDisplay(post) {
                return `1/${post.album.length}`;
            },
        }
    }
</script>