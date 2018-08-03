<template>
    <div>
        <breadcrumb :items="BCItems"></breadcrumb>

        <div class="mainContent">
            <div class="gridContainer">
                <div class="myrow clearfix">

                    <articles-list :id="parseInt(id)"></articles-list>

                    <div class="mycol-lg-3 ipadProHide">

                        <markets>
                        </markets>

                        <weather>
                        </weather>

                        <commodities>
                        </commodities>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Breadcrumb from '../partials/Breadcrumb';
    import ArticlesList from '../components/ArticlesList';
    import Markets from '../components/Markets';
    import Weather from '../components/Weather';
    import Commodities from '../components/Commodities';

    export default {
        components: {ArticlesList, Markets, Weather, Commodities, Breadcrumb},
        props: ['id'],
        computed: {
            BCItems() {
                return [
                    {
                        name: 'المقالات',
                        url: '/articles'
                    }
                ];
            },
        },
    }
</script>