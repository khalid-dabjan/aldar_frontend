// let rtl = !document.body.classList.contains('english');
let rtl = false;

module.exports = {
    initMainSlider(s) {
        $(s).flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: true,
            slideshow: false,
            rtl,
            start: function (slider) {
                $('.slides', slider).removeClass('flexslider-fix-rtl');
            }
        });
    },
    initInvestSlider(s) {
        $(s).flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: true,
            slideshow: false,
            rtl,
            start: function (slider) {
                $('.slides', slider).removeClass('flexslider-fix-rtl');
            }
        });
    },
    initMatchesSlider(s) {
        $(s).flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: true,
            slideshow: false,
            rtl,
            start: function (slider) {
                $('.slides', slider).removeClass('flexslider-fix-rtl');
            }
        });
    },

    initVideoSlider(s) {
        $(s).flexslider({
            animation: "fade",
            controlNav: "thumbnails",
            direction: 'vertical',
            start: function (slider) {
                $('.slides', slider).removeClass('flexslider-fix-rtl');
            }
        });
    },
    initCarouselSlider(s, itemsCount) {
        //$(s + ' .slides').addClass('flexslider-fix-rtl');
        let itemWidth = itemsCount === 3 ? 393 : 290;
        $(s).flexslider({
            animation: "slide",
            controlNav: false,
            itemWidth,
            itemMargin: 20,
            maxItems: itemsCount,
            minItems: 1,
            rtl,
            start: function (slider) {
                $('.slides', slider).removeClass('flexslider-fix-rtl');
            }
        });
    },
    initWeatherSlider(s) {
        $(s).flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true,
            slideShow: false,
            start: function (slider) {
                $('.slides', slider).removeClass('flexslider-fix-rtl');
                $(slider).resize();
            }
        });
    },
    openPopup(id) {
        let url = `/popup/${id}`;
        $('body').append('<div class="thePopup"><span class="closePopup">x</span><iframe src="' + url + '" frameborder="0"></iframe></div>');
    },
};