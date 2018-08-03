<template>
    <div>
        <bread-crumb :items="BCItems"></bread-crumb>
        <div class="mainContent">

            <div class="white-bg mrgBtm">
                <div class="gridContainer">

                    <video-slider :show-title="false" name="featured_videos"></video-slider>

                </div>
            </div>

            <videos-list></videos-list>

        </div>
    </div>
</template>
<script>
    import VideoSlider from '../components/VideosSlider';
    import VideosList from '../components/VideosList';
    import BreadCrumb from '../partials/Breadcrumb';

    export default {
        components: {VideoSlider, VideosList, BreadCrumb},
        computed: {
            BCItems() {
                return [
                    {
                        name: 'فيديو',
                        url: '/videos'
                    }
                ];
            },
        },
    }
</script>