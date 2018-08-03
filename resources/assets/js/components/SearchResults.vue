<template>
    <div class="mainContent">
        <div class="gridContainer">


            <div class="mainPadding font-1 brand-color fontBold textCentered" v-text="title"></div>

            <div class="noResults" v-if="noPosts">
                <p>لا توجد نتائج</p>
            </div>
            <div class="myrow clearfix">

                <div class="mycol-lg-3 mycol-xmd-4 mycol-sm-6" v-for="(post,index) in posts">
                    <div class="mainPost mrgBtm">
                        <router-link :to="post.url" class="avatar" v-if="index % 2 === 0">
                            <img :src="post.image_url" class="bgCover" :alt="post.title">
                        </router-link>
                        <div class="content">
                            <div class="titleArea">
                                <div class="title">
                                    <router-link :to="post.url" v-text="post.title"/>
                                </div>
                                <div class="time" v-text="post.time_ago"></div>
                            </div>
                            <div class="description" v-if="index % 2 !== 0">
                                <div class="in">
                                    <p v-text="post.excerpt"></p>
                                </div>
                            </div>
                            <div class="shareAndSection clearfix">
                                <router-link class="pullRight" :to="post.category_url" v-text="post.category_name"/>
                                <share :post="post"></share>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        props: {
            query: String,
            resultsType: {
                type: String,
                default: 'search'
            }
        },
        data() {
            return {
                noPosts: false
            };
        },
        created() {
            if (this.resultsType === 'search') {
                this.$store.dispatch('search', {q: this.query}).then(data => {
                    this.noPosts = data.posts.length === 0;
                });
            } else {
                this.$store.dispatch('getTag', {id: this.query}).then(data => {
                    this.noPosts = data.posts.length === 0;
                });
            }
        },
        computed: {
            posts() {
                return this.block.posts ? this.block.posts : [];
            },
            title() {
                return this.block.block ? this.block.block.name : '';
            },
            ...mapState({
                block: state => state.mainStore.search_results
            })
        }
    }
</script>