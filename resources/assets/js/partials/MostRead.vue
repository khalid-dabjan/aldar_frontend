<template>
    <div class="worldsNews mrgBtm">
        <div class="mainTitle"><h2 class="name">الأكثر قراءة</h2></div>

        <div class="mainPost" v-for="(post,index) in posts">
            <div class="avatar" v-if="index === 0 || index === posts.length - 1">
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
                <div class="shareAndSection clearfix">
                    <router-link :to="post.category_url" class="pullRight" v-text="post.category_name"/>
                    <share :post="post" class="pullLeft"></share>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        created() {
            this.$store.dispatch('fetchMostRead');
        },
        computed: {
            ...mapState({
                posts: state => state.mainStore.most_read
            })
        }
    }
</script>