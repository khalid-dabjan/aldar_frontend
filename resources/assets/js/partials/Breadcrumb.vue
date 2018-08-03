<template>
    <div class="pageHir">
        <div class="gridContainer">
            <router-link to="/">الرئيسية</router-link>
            <router-link :to="url(item)" v-for="item in theItems" v-text="item.name" :key="item.name"/>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        props: {
            items: {
                type: Array,
                default() {
                    return [];
                },
            },
            id: {
                type: Number,
                default: 0
            },
        },
        methods: {
            url(item) {
                // if (this.id === 0) {
                return item.url ? item.url : '/category/' + item.slug;
                // } else {
                //     return item.url ? item.url : '/category/' + item.slug;
                // }
            },
        },
        created() {
            if (this.id !== 0) {
                this.$store.dispatch('fetchBreadcrumb', this.id);
            }
        },
        computed: {
            theItems() {
                return this.id === 0 ? this.items : this.dItems;
            },
            ...mapState({
                dItems: state => state.mainStore.breadcrumb
            })
        }
    }
</script>