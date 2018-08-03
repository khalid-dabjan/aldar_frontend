<template>
    <div class="oneWidget trend mrgBtm">
        <div class="mainTitle">
            <div class="name">الاكثر انتشارا</div>
        </div>
        <hr>
        <div class="content mainPadding font-1">
            <router-link :to="tagUrl(tag)" v-for="tag in tags" v-text="'#' + tag.name" :key="tag.id"/>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        created() {
            this.$store.dispatch('fetchTrendingHashtags');
        },
        computed: {
            ...mapState({
                tags: state => state.mainStore.hashtags
            })
        },
        methods: {
            tagUrl(tag) {
                return `/tags/${tag.id}`;
            }
        },
    }
</script>