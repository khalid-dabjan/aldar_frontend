<template>
    <div class="loading" v-if="showLoading">
        <div class="verticalCentered">
            <div class="theCell textCentered">
                <div class="theImg">
                    <img src="/images/logoImg.png" alt="">
                    <svg height="216" width="216">
                        <circle cx="108" cy="108" r="107" stroke="#C73133" stroke-width="2" stroke-dasharray="672"
                                fill="none"></circle>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            showLoading() {
                return this.$store.state.mainStore.showLoading;
            }
        }
    }
</script>