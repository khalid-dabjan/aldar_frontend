<template>
    <div class="videoPopup">
        <div :class="playing ? 'avatar active' : 'avatar'" @click.prevent="play">
            <img :src="post.image_url" :alt="post.title">
            <span class="icon"><i class="icon-right-dir"></i></span>
            <iframe width="560" height="315"
                    :src="videoEmbed"
                    frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="title" v-text="post.title"></div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        props: ['id'],
        data() {
            return {
                playing: false
            };
        },
        created() {
            this.$store.dispatch('fetchDetails', this.id);
        },
        computed: {
            videoEmbed() {
                return this.post.video ? this.post.video.path + '?autoplay=1' : '';
            },
            ...mapState({
                post: state => state.mainStore.details
            })
        },
        methods: {
            play() {
                let theHref = $('iframe').attr('src');
                $('iframe').attr('src', theHref + ";autoplay=1");
                this.playing = true;
            },
        }
    }
</script>