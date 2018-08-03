<template>
    <div class="mrgBtm reorderEle">
        <order-btn slug="home_slider">
        </order-btn>
        <div class="flexslider normalSlider mainSlider" ref="main_slider">
            <ul class="slides">
                <li v-for="post in posts">
                    <div class="mainPost sliderPost clearfix">

                        <div class="avatar"><img :src="post.image_url" class="bgCover" :alt="post.title"></div>
                        <div class="content">
                            <div class="titleArea">
                                <h3 class="title">
                                    <router-link :to="post.url" v-text="post.title"/>
                                </h3>
                                <div class="time" v-text="post.time_ago"></div>
                            </div>
                            <div class="description">
                                <div class="in">
                                    <p v-text="post.excerpt"></p>
                                </div>
                            </div>
                            <div class="shareAndSection clearfix">
                                <router-link :to="post.category_url" class="pullRight" v-text="post.category_name"/>
                                <share :post="post" class="pullLeft">
                                </share>
                            </div>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {initMainSlider} from '../partials/Helpers';

    export default {
        created() {
            // this.$store.dispatch('fetchSlider').then(() => initNormalSlider(this.$refs.main_slider));
            this.$store.dispatch('fetchSection', {name: 'home_slider'}).then(() => {
                initMainSlider(this.$refs.main_slider);

            });
        },
        computed: {
            posts() {
                return this.block.posts ? this.block.posts : [];
            },
            ...mapState({
                block: state => state.mainStore.home_slider,
            })
        }
    }
</script>
