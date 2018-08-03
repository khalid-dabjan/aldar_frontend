<template>
    <div class="white-bg mrgBtm">
        <div class="gridContainer">

            <div class="mainTitle mrgBtm hasBorder clearfix">
                <div class="name pullRight" v-text="title"></div>
                <router-link :to="url" class="more pullLeft">مشاهده الكل</router-link>
            </div>

            <div class="articlesSlider downSpaceSlider reorderEle">
                <order-btn slug="home_articles">
                </order-btn>
                <div class="flexslider carousel carouselFour downPosition" ref="articles_slider">
                    <ul class="slides">

                        <li v-for="(post,index) in posts">
                            <div class="mainPost articlePost">
                                <div class="theWriter">
                                    <img :src="post.author.image_url" :alt="post.author.name">
                                    <div class="info">
                                        <div class="name">
                                            <router-link :to="post.author.url" v-text="post.author.name"/>
                                        </div>
                                        <div v-text="post.author.title"></div>
                                    </div>
                                </div>
                                <!--<div class="avatar" v-if="index % 2 === 0"><img :src="post.image_url" :alt="post.title">-->
                                <!--</div>-->
                                <div class="content">
                                    <div class="titleArea">
                                        <div class="title">
                                            <router-link :to="post.url" v-text="post.title"/>
                                        </div>
                                        <div class="time" v-text="post.time_ago"></div>
                                    </div>
                                    <div class="description">
                                        <div class="in">
                                            <p v-text="post.excerpt"></p>
                                        </div>
                                    </div>
                                    <!--<div class="description" v-if="index % 2 !== 0">-->
                                        <!--<div class="in">-->
                                            <!--<p v-text="post.excerpt"></p>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                    <div class="shareAndSection clearfix">
                                        <router-link :to="post.category_url" v-text="post.category_name"/>
                                        <share :post="post" class="pullLeft"></share>
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
    import {mapState} from 'vuex';
    import {initCarouselSlider} from '../partials/Helpers';

    export default {
        created() {
            // this.$store.dispatch('fetchArticles').then(() => initCarouselSlider(this.$refs.articles_slider, 4));
            this.$store.dispatch('fetchSection', {name: 'home_articles'}).then(() => initCarouselSlider(this.$refs.articles_slider, 4));
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
                block: state => state.mainStore.home_articles
            })
        }
    }
</script>