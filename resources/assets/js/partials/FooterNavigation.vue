<template>
    <div>
        <div class="oneItem ipadHide" v-if="nav1.length">
            <div class="singleTitle underline mrgBtm">الدار</div>
            <ul class="footerMenu clearfix">
                <li v-for="item in nav1">
                    <router-link :to="item.uri" v-text="item.name">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="oneItem ipadHide" v-if="nav2.length">
            <div class="singleTitle underline mrgBtm">المحتوى</div>
            <ul class="footerMenu clearfix">
                <li v-for="item in nav2">
                    <router-link :to="item.uri" v-text="item.name">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        created() {
            this.$store.dispatch('fetchFooterNav');
        },
        computed: {
            nav1() {
                return this.footer_navigation.footer_1 ? this.footer_navigation.footer_1 : [];
            },
            nav2() {
                return this.footer_navigation.footer_2 ? this.footer_navigation.footer_2 : [];
            },
            ...mapState({
                footer_navigation: state => state.mainStore.footer_navigation
            })
        },
    }
</script>