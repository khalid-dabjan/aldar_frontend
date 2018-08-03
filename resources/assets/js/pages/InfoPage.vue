<template>
    <div>
        <bread-crumb :items="BCItems"></bread-crumb>
        <div class="mainContent">
            <div class="gridContainer">
                <div class="halfDisplay">

                    <div class="oneHalf">
                        <div class="aboutBox" v-html="page.arabic_text">
                        </div>
                    </div>

                    <div class="oneHalf">
                        <div class="aboutBox ltrDir" v-html="page.english_text">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import BreadCrumb from '../partials/Breadcrumb';

    export default {
        components: {BreadCrumb},
        props: ['slug'],
        created() {
            this.$store.dispatch('fetchPage', {slug: this.slug});
        },
        computed: {
            BCItems() {
                let name = this.page.title ? this.page.title : '';
                return [
                    {
                        name,
                        url: this.$route.path
                    }
                ];
            },
            ...mapState({
                page: state => state.mainStore.page
            }),
        },
    }
</script>