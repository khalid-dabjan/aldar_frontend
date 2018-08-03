<template>
    <div class="oneWidget mrgBtm matches">
        <div class="mainTitle">
            <div class="name">مباريات</div>
        </div>
        <hr>
        <div class="mainPadding">
            <div class="tabs">
                <a href="#" :class="{ active : activeDay === 'yesterday' }"
                   @click.prevent="activeDay = 'yesterday'">امس</a>

                <a href="#" :class="{ active : activeDay === 'today' }" @click.prevent="activeDay = 'today'">اليوم</a>

                <a href="#" :class="{ active : activeDay === 'tomorrow' }"
                   @click.prevent="activeDay = 'tomorrow'">غدا</a>
            </div>
            <div class="normalSlider flexslider arrows1 downPosition" ref="matches_slider">
                <ul class="slides">
                    <li v-for="chunk in matchesChunks">

                        <div class="one" v-for="match in chunk">
                            <div class="tableDis">
                                <div class="oneCell teamLogo"><img :src="match.team_1_logo" :alt="match.team_1_name">
                                </div>
                                <div class="oneCell" v-text="match.score"></div>
                                <div class="oneCell teamLogo"><img :src="match.team_2_logo" :alt="match.team_2_name">
                                </div>
                                <div class="oneCell">
                                    <div v-text="match.end_time"></div>
                                    <div class="font-small">نهايه المباراه</div>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import {initMatchesSlider} from '../partials/Helpers';

    export default {
        data() {
            return {
                activeDay: 'today',
            };
        },
        created() {
            this.$store.dispatch('fetchMatches').then(() => initMatchesSlider(this.$refs.matches_slider));
        },
        computed: {
            matchesChunks() {
                if (!this.matches[this.activeDay]) {
                    return [];
                }
                let array = this.matches[this.activeDay];
                let i, j, chunk = 4;
                let chunks = [];
                for (i = 0, j = array.length; i < j; i += chunk) {
                    chunks.push(array.slice(i, i + chunk));
                }
                return chunks;
            },
            ...mapState({
                matches: state => state.mainStore.matches
            })
        },
        methods: {},
    }
</script>