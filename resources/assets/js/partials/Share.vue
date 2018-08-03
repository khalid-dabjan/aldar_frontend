<template>
    <div class="mainSocial">
        <social-sharing :url="url" inline-template>
            <div>
                <network network="facebook">
                    <a href="#" @click.prevent=""><i class="icon-facebook-official"></i></a>
                </network>
                <network network="twitter">
                    <a href="#" @click.prevent=""><i class="icon-twitter"></i></a>
                </network>
                <network network="whatsapp" v-if="isMobile">
                    <a href="#" @click.prevent=""><i class="icon-whatsapp"></i></a>
                </network>
            </div>
        </social-sharing>
    </div>
</template>
<script>
    export default {
        props: ['post'],
        computed: {
            url() {
                return this.post.share_url;
            },
            isMobile() {
                return window.isMobile();
            }
        },
    }
</script>