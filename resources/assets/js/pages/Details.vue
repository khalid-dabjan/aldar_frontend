<template>
    <div>
        <breadcrumb :id="parseInt(id)"></breadcrumb>
        <div class="mainContent">
            <div class="gridContainer">

                <div class="myrow clearfix">

                    <news-details :id="id"></news-details>

                    <div class="mycol-lg-3 ipadProHide">

                        <trending-hashtags>
                        </trending-hashtags>

                        <poll>
                        </poll>

                        <weather>
                        </weather>

                    </div>

                </div>

                <related-news :id="this.id">
                </related-news>

            </div>
        </div>
    </div>
</template>
<script>
    import NewsDetails from '../components/NewsDetails.vue';
    import RelatedNews from '../partials/RelatedNews.vue';
    import Breadcrumb from '../partials/Breadcrumb.vue';
    import TrendingHashtags from '../components/TrendingHashtags.vue';
    import Poll from '../components/Poll.vue';
    import Weather from '../components/Weather.vue';

    export default {
        props: ['id'],
        components: {NewsDetails, RelatedNews, Breadcrumb, TrendingHashtags, Poll, Weather},
    }
</script>