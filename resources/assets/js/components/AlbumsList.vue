<template>
    <div class="gridContainer">
        <div class="myrow clearfix">

            <div class="mycol-lg-4 mycol-sm-6" v-for="post in posts">
                <div class="photosPost mrgBtm">
                    <router-link :to="`?popup=album&id=${post.id}`">
                        <div class="avatar">
                            <img :src="post.image_url" class="bgCover" :alt="post.title">
                        </div>
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
            </div>

        </div>

        <more-button :count="count" dispatch-name="fetchAlbumsList"></more-button>

    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import MoreButton from '../partials/MoreButton';

    export default {
        components: {MoreButton},
        props: {
            count: {
                type: Number,
                default: 9
            }
        },
        created() {
            this.$store.dispatch('fetchAlbumsList', {count: this.count});
        },
        computed: {
            ...mapState({
                posts: state => state.mainStore.album_list,
            })
        },
        methods: {
            photosCountDisplay(post) {
                return `1/${post.album.length}`;
            },
        }
    }
</script>