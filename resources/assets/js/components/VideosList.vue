<template>
    <div class="gridContainer">
        <div class="myrow clearfix">

            <div class="mycol-lg-3 mycol-xmd-4 mycol-sm-6" v-for="post in posts">
                <div class="videoPost mrgBtm">
                    <router-link :to="`?popup=video&id=${post.id}`" class="avatar videoAvatar">
                        <img :src="post.image_url" class="bgCover" :alt="post.title">
                    </router-link>
                    <div class="content">
                        <div class="title">
                            <a href="#" @click.prevent="open(post)" v-text="post.title"></a>
                        </div>
                        <div v-text="post.time_ago"></div>
                    </div>
                </div>
            </div>

        </div>

        <more-button :count="count" dispatch-name="fetchVideosList"></more-button>

    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import {openPopup} from '../partials/Helpers';
    import MoreButton from '../partials/MoreButton';

    export default {
        components: {MoreButton},
        props: {
            count: {
                type: Number,
                default: 12,
            }
        },
        created() {
            this.$store.dispatch('fetchVideosList', {count: this.count});
            // this.$store.dispatch('fetchCategoryPosts', {count: this.count, slug: 'infograph'});
        },
        computed: {
            ...mapState({
                posts: state => state.mainStore.videos_list
            }),
        },
        methods: {
            // open(post) {
            //     openPopup(post.id);
            // }
        },
    }
</script>