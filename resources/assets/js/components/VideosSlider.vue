<template>
    <div class="white-bg paddBtm mrgBtm">
        <div class="gridContainer">
            <div class="mainTitle mrgBtm hasBorder clearfix" v-if="showTitle">
                <div class="name pullRight" v-text="title"></div>
                <router-link to="/category/videos" class="more pullLeft">مشاهده الكل</router-link>
            </div>
            <div class="videosSlider reorderEle">
                <order-btn :slug="name">
                </order-btn>
                <div id="slider" class="flexslider" ref="video_slider">
                    <ul class="slides">

                        <li :data-thumb="post.image_url" v-for="post in posts" :key="post.id">
                            <div class="videoSliderPost">
                                <div class="avatar"><img :src="post.image_url" class="bgCover" :alt="post.title"></div>
                                <div class="content">
                                    <router-link class="title clearfix" :to="`?popup=video&id=${post.id}`">
                                        <i class="icon-right-dir"></i>
                                        <span v-text="post.title"></span>
                                    </router-link>
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
    import {mapState} from 'vuex';
    import {initVideoSlider} from '../partials/Helpers';

    export default {
        props: {
            showTitle: {
                type: Boolean,
                default: true,
            },
            name: {
                type: String,
                default: 'home_videos'
            }
        },
        created() {
            // this.$store.dispatch('fetchVideos').then(() => initVideoSlider(this.$refs.video_slider));
            this.$store.dispatch('fetchSection', {name: this.name}).then(() => initVideoSlider(this.$refs.video_slider));
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
                    return state.mainStore[this.name];
                }
            }),
        },

    }
</script>