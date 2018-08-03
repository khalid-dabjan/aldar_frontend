<template>
    <div>
        <breadcrumb :items="BC">
        </breadcrumb>
        <div class="mainContent">

            <div class="gridContainer">

                <div>
                    <div class="myrow clearfix">

                        <div class="mycol-lg-9">

                            <home-section name="section_posts" :slug="slug" :count="12" :show-title="false"
                                          :show-more="true">
                            </home-section>

                        </div>

                        <div class="mycol-lg-3 ipadProHide">

                            <div v-if="isSports">

                                <matches>
                                </matches>

                                <commodities>
                                </commodities>

                                <newsletter>
                                </newsletter>

                            </div>
                            <div v-else>
                                <vertical-block name="section_block_posts" :block_name="slug + '@MR'"
                                                :count="4">
                                </vertical-block>
                            </div>
                            <markets>
                            </markets>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
    import {mapState} from 'vuex';
    import Breadcrumb from '../partials/Breadcrumb';
    import HomeSection from '../components/HomeSection';
    import VerticalBlock from '../components/VerticalBlock';
    import Markets from '../components/Markets';
    import Matches from '../components/Matches';
    import Commodities from '../components/Commodities';
    import Newsletter from '../components/Newsletter';

    export default {
        components: {Breadcrumb, HomeSection, VerticalBlock, Markets, Matches, Commodities, Newsletter},
        props: ['slug'],
        created() {
            this.$store.dispatch('fetchCategory', {slug: this.slug});
        },
        computed: {
            isSports() {
                return this.slug === 'sports';
            },
            BC() {
                return this.category.breadcrumb ? this.category.breadcrumb.concat([{
                    id: this.category.id,
                    name: this.category.name,
                    slug: this.category.slug
                }]) : [];
            },
            ...mapState({
                category: state => state.mainStore.category
            })
        },
        // beforeRouteUpdate() {
        //     // this.$store.dispatch('fetchCategory');
        // },
    }
</script>