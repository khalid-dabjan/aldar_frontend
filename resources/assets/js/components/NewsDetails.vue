<template>
    <div>
        <div class="mycol-lg-6 mycol-xmd-8">
            <div class="theArticleDetails white-bg">
                <div class="avatar"><img :src="post.image_url" alt=""></div>
                <div class="content">
                    <h1 class="title" v-text="post.title"></h1>
                    <div class="date" v-text="post.time_ago"></div>
                    <div class="description" style="word-wrap: break-word" v-html="post.content"></div>
                </div>
            </div>
        </div>
        <div class="mycol-lg-3 mycol-xmd-4">

            <div class="white-bg mainPadding articleData mrgBtm">

                <share :post="post"></share>

                <hr>

                <div class="brand-color font-4 mrgBtm-md">كلمات مفتاحية</div>
                <div class="font-medium keywords">
                    <router-link v-for="tag in post.tags" :to="`/tags/${tag.id}`" v-text="tag.name" :key="tag.id"/>
                </div>

                <hr>

                <div class="brand-color font-4 mrgBtm-md">الرابط</div>
                <div class="linkURL">
                    <input type="text" :value="post.full_url" disabled/>
                </div>
                <hr>

                <div class="print clearfix">
                    <!--<div class="pullRight brand-color font-4">الطباعة</div>-->
                    <a href="#" class="" @click="print">طباعة هذه الصفحة</a>
                </div>

            </div>

            <most-read></most-read>

        </div>
    </div>
</template>
<script>
    import MostRead from '../partials/MostRead.vue'
    import {mapState} from 'vuex'

    export default {
        props: ['id'],
        components: {MostRead},
        created() {
            this.$store.dispatch('fetchDetails', this.id);
        },
        computed: {
            ...mapState({
                post: state => state.mainStore.details
            })
        },
        methods: {
            print() {
                window.print();
            },
        }
    }
</script>