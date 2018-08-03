<template>
    <div class="thePopup" v-if="show">
        <span class="closePopup">x</span>

        <div class="popupIframe">
            <div class="verticalCentered">
                <div class="theCell">
                    <div class="gridContainer">
                        <div>
                            <div class="closePopup" @click.prevent="close"><i class="icon-close"></i></div>
                        </div>

                        <video-popup :id="id" v-if="type === 'video'">
                        </video-popup>
                        <album-popup :id="id" v-if="type === 'album'">
                        </album-popup>
                        <infograph-popup :id="id" v-if="type === 'infograph'">
                        </infograph-popup>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VideoPopup from './VideoPopup';
    import AlbumPopup from './AlbumPopup';
    import InfographPopup from './InfographPopup';

    export default {
        components: {VideoPopup, AlbumPopup, InfographPopup},
        computed: {
            show() {
                return !!this.$route.query.popup;
            },
            id() {
                return this.$route.query.id;
            },
            type() {
                return this.$route.query.popup;
            },
        },
        methods: {
            close() {
                let back = this.$route.path;
                this.$router.push(back);
            }
        },
    }
</script>