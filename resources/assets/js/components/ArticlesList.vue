<template>
    <div class="mycol-lg-9">
        <div class="myrow clearfix">

            <div class="mycol-xmd-4 mycol-sm-6" v-for="(post,index) in posts">
                <div class="mainPost articlePost mrgBtm">

                    <div class="theWriter">
                        <img :src="post.author.image_url" :alt="post.author.name">
                        <div class="info">
                            <div class="name">
                                <router-link :to="post.author.url" v-text="post.author.name"/>
                            </div>
                            <div v-text="post.author.title"></div>
                        </div>
                    </div>
                    <!--<div class="avatar" v-if="index % 2 === 0">-->
                    <!--<router-link :to="post.url">-->
                    <!--<img :src="post.image_url" :alt="post.title">-->
                    <!--</router-link>-->
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
                        <div class="shareAndSection clearfix">
                            <router-link :to="post.category_url" v-text="post.category_name"/>
                            <share :post="post" class="pullLeft"></share>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <more-button :count="count" dispatch-name="fetchArticlesList" :payload="{author_id:id}"></more-button>

    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import MoreButton from '../partials/MoreButton';

    export default {
        components: {MoreButton},
        props: {
            id: Number,
            count: {
                type: Number,
                default: 12,
            }
        },
        created() {
            this.$store.dispatch('fetchArticlesList', {count: this.count, author_id: this.id});
        },
        computed: {
            ...mapState({
                posts: state => state.mainStore.articles_list
            })
        }
    }
</script>