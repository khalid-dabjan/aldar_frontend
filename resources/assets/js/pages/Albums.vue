<template>
    <div>
        <bread-crumb :items="BCItems"></bread-crumb>
        <div class="mainContent">

            <albums-slider></albums-slider>

            <albums-list></albums-list>

        </div>
    </div>
</template>
<script>
    import AlbumsSlider from '../components/AlbumsSlider';
    import AlbumsList from '../components/AlbumsList';
    import BreadCrumb from '../partials/Breadcrumb';

    export default {
        components: {AlbumsSlider, AlbumsList, BreadCrumb},
        computed: {
            BCItems() {
                return [
                    {
                        name: 'صور',
                        url: '/albums'
                    }
                ];
            },
        },
    }
</script>