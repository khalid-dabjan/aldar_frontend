<template>
    <div>
        <div class="noResults" v-if="noPosts">
            <p>لا توجد أخبار</p>
        </div>
        <div class="mainTitle mrgBtm clearfix" v-if="showTitle">
            <div class="name pullRight" v-text="title"></div>
            <router-link :to="url" class="more pullLeft">مشاهده الكل</router-link>
        </div>

        <div class="myrow clearfix reorderEle">
            <order-btn v-if="!slug" :slug="name">
            </order-btn>
            <div :class="isFirst(index) ? 'mycol-xmd-8' : 'mycol-xmd-4 mycol-sm-6' " v-for="(post,index) in posts">
                <div :class="isFirst(index) ? 'mainPost mrgBtm bigPost' : 'mainPost mrgBtm' ">
                    <router-link class="avatar" :to="post.url" v-if="isFirst(index) || isOdd(index)">
                        <!--<div class="avatar" v-if="isFirst(index) || isOdd(index)">-->
                        <img :src="post.image_url" class="bgCover" :alt="post.title">
                        <!--</div>-->
                    </router-link>
                    <div class="content">
                        <div class="titleArea">
                            <div class="title">
                                <router-link :to="post.url" v-text="post.title"/>
                            </div>
                            <div class="time" v-text="post.time_ago"></div>
                        </div>
                        <div class="description" v-if="isFirst(index) || isEven(index)">
                            <div class="in">
                                <p v-text="post.excerpt"></p>
                            </div>
                        </div>
                        <div class="shareAndSection clearfix">
                            <router-link class="pullRight" :to="post.category_url" v-text="post.category_name"/>
                            <share :post="post" class="pullLeft"></share>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <more-button v-if="showMore && !noPosts" :count="count" :payload="{ name,slug }"
                     :dispatch-name="slug ? 'fetchCategoryPosts' : 'fetchSection'">
        </more-button>
        <!--<a href="#" class="mainBtn" v-if="showMore" @click.prevent="loadMore">المزيد</a>-->
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import MoreButton from '../partials/MoreButton';

    export default {
        components: {MoreButton},
        props: {
            name: String,
            slug: {
                type: String,
                default: ''
            },
            count: {
                type: Number,
                default: 6
            },
            showTitle: {
                type: Boolean,
                default: true,
            },
            showMore: {
                type: Boolean,
                default: false,
            }
        },
        created() {
            if (this.slug) {
                this.$store.dispatch('fetchCategoryPosts', {slug: this.slug, count: this.count}).then(data => {
                    this.noPosts = data.posts.length === 0
                });
            } else {
                this.$store.dispatch('fetchSection', {name: this.name, count: this.count});
            }
        },
        data() {
            return {
                noPosts: false
            };
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
            })
        },
        methods: {
            isFirst(index) {
                return index === 0;
            },
            isOdd(index) {
                return index % 2 !== 0;
            },
            isEven(index) {
                return index % 2 === 0;
            },
        },
    }
</script>