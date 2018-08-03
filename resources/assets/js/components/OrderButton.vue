<template>
    <a href="#" class="reorderBtn" @click.prevent="open" v-if="isAuth">ترتيب الاخبار</a>
</template>
<script>
    export default {
        props: ['slug'],
        computed: {
            isAuth() {
                return this.$store.state.mainStore.token !== null;
            }
        },
        methods: {
            open() {
                this.$store.commit('setOrderOpen', {open: true, url: `/order/${this.slug}`});
            }
        }
    }
</script>