<template>
    <div class="infoGraphPhoto">
        <img :src="post.image_url" :alt="post.title">
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        props: ['id'],
        created() {
            this.$store.dispatch('fetchDetails', this.id);
        },
        computed: {
            ...mapState({
                post: state => state.mainStore.details
            })
        },
    }
</script>