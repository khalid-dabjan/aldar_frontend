<template>
    <div class="worldsNews mrgBtm reorderEle">
        <order-btn v-if="showOrder" :slug="orderName">
        </order-btn>
        <div class="mainTitle"><h2 class="name" v-text="title"></h2></div>

        <div class="mainPost" v-for="(post,index) in posts">

            <div class="avatar" v-if="index === 0 && count !== 2">
                <router-link :to="post.url">
                    <img :src="post.image_url" :alt="post.title">
                </router-link>
            </div>
            <div class="content">
                <div class="titleArea">
                    <div class="title">
                        <router-link :to="post.url" v-text="post.title"/>
                    </div>
                    <div class="time" v-text="post.time_ago"></div>
                </div>
                <div class="description" v-if="index === 0 && count !== 2">
                    <div class="in">
                        <p v-text="post.excerpt"></p>
                    </div>
                </div>
                <div class="shareAndSection clearfix">
                    <router-link :to="post.category_url" v-text="post.category_name" class="pullRight"/>
                    <share :post="post" class="pullLeft"></share>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        props: {
            name: String,
            block_name: {
                type: String,
                default: ''
            },
            count: {
                type: Number,
                default: 6
            }
        },
        created() {
            let name = this.orderName;
            let prop = this.block_name ? 'section_block_posts' : this.name;
            this.$store.dispatch('fetchSection', {name, count: this.count, prop});
        },
        computed: {
            showOrder() {
                return this.block_name === '';
            },
            orderName() {
                return this.block_name ? this.block_name : this.name;
            },
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
    }
</script>