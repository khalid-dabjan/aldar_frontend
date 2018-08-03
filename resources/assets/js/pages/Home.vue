<template>
    <div class="mainContent">

        <div class="gridContainer">
            <div class="myrow clearfix">

                <div class="mycol-lg-9">

                    <main-slider>
                    </main-slider>

                    <home-section name="home_news">
                    </home-section>

                </div>

                <div class="mycol-lg-3 ipadProHide">

                    <investigations-slider>
                    </investigations-slider>

                    <vertical-block name="home_world" :count="5">
                    </vertical-block>

                </div>

            </div>
        </div>

        <videos-slider>
        </videos-slider>

        <div class="gridContainer">
            <div class="myrow clearfix">

                <div class="mycol-lg-9">

                    <home-section name="home_business">
                    </home-section>

                    <home-section name="home_local">
                    </home-section>

                </div>

                <div class="mycol-lg-3 ipadProHide">

                    <trending-hashtags>
                    </trending-hashtags>

                    <poll>
                    </poll>

                    <weather>
                    </weather>

                    <markets>
                    </markets>

                </div>

            </div>
        </div>

        <articles-slider>
        </articles-slider>

        <div class="gridContainer">
            <div class="myrow clearfix">

                <div class="mycol-lg-9">

                    <home-section name="home_sports">
                    </home-section>

                </div>

                <div class="mycol-lg-3 ipadProHide">

                    <vertical-block name="home_picks" :count="2">
                    </vertical-block>

                    <commodities>
                    </commodities>

                    <newsletter>
                    </newsletter>

                </div>

            </div>
        </div>

        <infograph-slider>
        </infograph-slider>

        <div class="gridContainer">
            <div class="myrow clearfix">

                <div class="mycol-lg-9">

                    <home-section name="home_culture">
                    </home-section>

                </div>

                <div class="mycol-lg-3">
                    <vertical-block name="home_women" class="ipadProHide" :count="5">
                    </vertical-block>
                </div>
            </div>
        </div>

        <div class="gridContainer">
            <div class="myrow clearfix">

                <div class="mycol-lg-3 mycol-sm-6">
                    <vertical-block name="home_religion">
                    </vertical-block>
                </div>

                <div class="mycol-lg-3 mycol-sm-6">
                    <vertical-block name="home_accidents">
                    </vertical-block>
                </div>

                <div class="mycol-lg-3 mycol-sm-6">
                    <vertical-block name="home_health">
                    </vertical-block>
                </div>

                <div class="mycol-lg-3 mycol-sm-6">
                    <vertical-block name="home_tech">
                    </vertical-block>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MainSlider from '../components/MainSlider.vue';
    import HomeSection from '../components/HomeSection.vue';
    import VideosSlider from '../components/VideosSlider.vue';
    import ArticlesSlider from '../components/ArticlesSlider.vue';
    import InfographSlider from '../components/InfographSlider.vue';
    import VerticalBlock from '../components/VerticalBlock.vue';
    import InvestigationsSlider from '../components/InvestigationsSlider.vue';
    import TrendingHashtags from '../components/TrendingHashtags.vue';
    import Poll from '../components/Poll.vue';
    import Weather from '../components/Weather.vue';
    import Markets from '../components/Markets.vue';
    import Matches from '../components/Matches.vue';
    import Commodities from '../components/Commodities.vue';
    import Newsletter from '../components/Newsletter.vue';

    export default {
        components: {
            MainSlider,
            HomeSection,
            VideosSlider,
            ArticlesSlider,
            InfographSlider,
            VerticalBlock,
            InvestigationsSlider,
            TrendingHashtags,
            Poll,
            Weather,
            Markets,
            Matches,
            Commodities,
            Newsletter
        }
    }
</script>