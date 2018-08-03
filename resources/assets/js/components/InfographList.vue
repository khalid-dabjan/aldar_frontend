<template>
    <div class="mainContent">
        <div class="gridContainer">

            <div class="myrow clearfix">

                <div :class="index === 0 ? 'mycol-lg-6 mycol-xmd-8' : 'mycol-lg-3 mycol-xmd-4 mycol-sm-6'"
                     v-for="(post,index) in posts">
                    <div class="caricaturePost main mrgBtm">

                        <router-link :to="`?popup=infograph&id=${post.id}`" class="avatar">
                            <img :src="post.image_url" class="bgCover" :alt="post.title">
                        </router-link>

                        <share :post="post" v-if="index === 0"></share>
                    </div>
                </div>

            </div>

            <more-button :count="count" dispatch-name="fetchCategoryPosts" :payload="{ slug:'infograph' }">
            </more-button>

        </div>
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
                default: 12,
            },
            type: {
                type: String,
                default: 'infograph'
            },
        },
        created() {
            // this.$store.dispatch('fetchInfographList', {count: this.count});
            this.$store.dispatch('fetchCategoryPosts', {count: this.count, slug: this.type});
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
            posts() {
                return this.block.posts ? this.block.posts : [];
            },
            ...mapState({
                block: state => state.mainStore.section_posts
            })
        }
    }
</script>