<template>
    <div>
        <div class="mainTitle mrgBtm">
            <div class="name">أخبار متعلقة</div>
        </div>
        <div class="myrow clearfix">

            <div class="mycol-lg-3 mycol-sm-6" v-for="(post,index) in posts">
                <div class="mainPost mrgBtm">
                    <router-link class="avatar" v-if="index % 2 === 0" :to="post.url">
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
                            <router-link :to="post.category_url" class="pullRight" v-text="post.category_name"/>
                            <share :post="post" class="pullLeft"></share>
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
        props: ['id'],
        created() {
            this.$store.dispatch('fetchRelated', this.id);
        },
        computed: {
            ...mapState({
                posts: state => state.mainStore.related
            })
        }
    }
</script>