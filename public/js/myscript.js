var rtl = !$('body').hasClass('english');
// $('.flexslider .slides').addClass('flexslider-fix-rtl');

function toggleClassToBody(className) {
    var theBody = document.getElementsByTagName('body').item(0);
    theBody.classList.toggle(className);
}

$(window).on('load', function () {

    // $('.hourlyWeater .flexslider').flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     directionNav: true,
    //     slideshow: false,
    //     rtl: rtl,
    //     start: function (slider) {
    //         $('.slides', slider).removeClass('flexslider-fix-rtl');
    //         slider.resize();
    //     }
    // });
    //
    // $('.normalSlider.flexslider').flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     directionNav: true,
    //     slideshow: false,
    //     rtl: rtl,
    //     start: function (slider) {
    //         // alert('hi');
    //         $('.slides', slider).removeClass('flexslider-fix-rtl');
    //     }
    // });
    //
    // $('.carouselFour.flexslider').flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     itemWidth: 290,
    //     itemMargin: 20,
    //     maxItems: 4,
    //     minItems: 1,
    //     rtl: rtl,
    //     start: function (slider) {
    //         $('.slides', slider).removeClass('flexslider-fix-rtl');
    //     }
    // });
    //
    // $('.carouselThree.flexslider').flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     itemWidth: 393,
    //     itemMargin: 20,
    //     maxItems: 3,
    //     minItems: 1,
    //     rtl: rtl,
    //     start: function (slider) {
    //         $('.slides', slider).removeClass('flexslider-fix-rtl');
    //     }
    // });
    //
    // $('#slider').flexslider({
    //     animation: "slide",
    //     controlNav: "thumbnails",
    //     direction: 'vertical',
    //     rtl: rtl,
    //     start: function (slider) {
    //         $('.slides', slider).removeClass('flexslider-fix-rtl');
    //     }
    // });

});

// $('.openPopup').click(function (e) {
//     e.preventDefault();
//     var theUrl = $(this).attr('href');
//     $('body').append('<div class="thePopup"><span class="closePopup">x</span><iframe src="' + theUrl + '" frameborder="0"></iframe></div>');
//     console.log(theUrl);
// });
//
// $('body').on('click', '.closePopup', function (e) {
//     $('.thePopup').remove();
// });

/*
$('body').on('click', '.closePopup', function(){
	$('.thePopup').remove();
});

function readURL(ele, input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.' + ele).attr('src', e.target.result).prev('.hideAfterUpload').addClass('disNone');
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$('.importItemsForm input[type="file"]').change(function(){
	var theFileUrl = $(this).val();
	$(this).next('.uploadedFileDisplay').html(theFileUrl);
});
*/

/*--------------------------------------------------------
	Image plugin
--------------------------------------------------------*/
var imgObj, divEle, divEle_width, divEle_height, imgEle, imgEle_width, imgEle_height,
    eles = document.getElementsByClassName('bgCover');
for (i = 0; i < eles.length; i++) {
    eles.item(i).parentNode.style.background = "#ddd";
}

function getImages() {
    for (i = 0; i < eles.length; i++) {

        imgEle = eles[i];
        divEle = imgEle.parentNode;

        divEle_width = divEle.offsetWidth;
        divEle_height = divEle.offsetHeight;

        imgObj = new Image();
        imgObj.src = imgEle.getAttribute('src');
        imgEle_width = imgObj.width;
        imgEle_height = imgObj.height;

        if (divEle_height / imgEle_height > divEle_width / imgEle_width) {
            imgEle.classList.remove("fullWidth");
            imgEle.classList.remove("fullHeight");
            imgEle.className += " fullHeight";
            imgEle.style.marginLeft = ((imgEle.clientWidth - divEle_width) / 2 * -1) + "px";
            imgEle.style.marginTop = 0;
        }
        else {
            imgEle.classList.remove("fullWidth");
            imgEle.classList.remove("fullHeight");
            imgEle.className += " fullWidth";
            imgEle.style.marginTop = ((imgEle.clientHeight - divEle_height) / 2 * -1) + "px";
            imgEle.style.marginLeft = 0;
        }
    }
}

window.addEventListener("load", getImages);
window.addEventListener("resize", getImages2);

var loadCounter = 0;
$(window).on('load', function (e) {
    var imagePlg = setInterval(function (e) {
        if (loadCounter < 5) {
            getImages();
        }
        else {
            clearInterval(imagePlg);
        }
        loadCounter++;
    }, 500);
})

function getImages2() {
    var loadCounter2 = 0;
    clearInterval(imagePlg2);
    var imagePlg2 = setInterval(function (e) {
        if (loadCounter2 < 5) {
            getImages();
        }
        else {
            clearInterval(imagePlg2);
        }
        loadCounter2++;
    }, 1000);
}