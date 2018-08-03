<template>
    <div>
        <div class="flexslider photoGallerySlider mrgBtm">
            <ul class="slides">

                <li v-for="photo in post.album">
                    <div class="photosPost">
                        <div class="avatar">
                            <img :src="getFullPath(photo)" alt="">
                        </div>
                        <div class="content">
                            <div class="title">
                                <a href="#" v-text="photo.caption"></a>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        <div id="carousel" class="flexslider photoGalleryThum">
            <ul class="slides">

                <li v-for="photo in post.album">
                    <img :src="getFullPath(photo)"/>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        props: ['id'],
        created() {
            this.$store.dispatch('fetchDetails', this.id).then(data => {
               // $('.photoGallerySlider .slides').addClass('flexslider-fix-rtl');

                $('.photoGalleryThum').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    directionNav: false,
                    itemWidth: 135,
                    itemMargin: 20,
                    asNavFor: '.photoGallerySlider',
                    rtl: true,
                    start: function (slider) {
                        $('.slides', slider).removeClass('flexslider-fix-rtl');
                    }
                });

                $('.photoGallerySlider').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    sync: ".photoGalleryThum",
                    rtl: true,
                    start: function (slider) {
                        $('.slides', slider).removeClass('flexslider-fix-rtl');
                        $('.content', slider).prepend('<div class="galleryNums"><div><i class="icon-photoicon"></i></div><div><span class="currentSlide">' + (slider.currentSlide + 1) + '</span>/<span>' + slider.count + '</span></div></div>');
                    },
                    after: function (slider) {
                        $('.currentSlide', slider).html(slider.currentSlide + 1);
                    }
                });
            });
        },
        methods: {
            getFullPath(photo) {
                console.log(serverUrl);
                return serverUrl + 'uploads/' + photo.path;
            },
        },
        computed: {
            ...mapState({
                post: state => state.mainStore.details
            })
        },
    }
</script>