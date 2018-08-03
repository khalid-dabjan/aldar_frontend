<template>
    <div class="oneWidget fuelPrice mrgBtm">
        <div class="mainTitle">
            <div class="name">أسعار الوقود</div>
        </div>
        <hr>
        <div class="content mainPadding">

            <div class="one" v-for="comm in commodities">
                <div class="tableDis">
                    <div class="oneCell"><img :src="comm.img" :alt="comm.name"></div>
                    <div class="oneCell"><span class="font-4 brand-color" v-text="comm.name"></span></div>
                    <div class="oneCell">{{ comm.unit }} <br>{{ comm.price }}</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        created() {
            this.$store.dispatch('fetchCommodities');
        },
        computed: {
            ...mapState({
                commodities: state => state.mainStore.commodities
            })
        },
    }
</script>