<template>
    <footer id="footer">
        <div class="top white-bg">
            <div class="gridContainer">

                <div class="footerLogo"><img src="images/logo.png" alt=""></div>
                <div class="footerItems clearfix">
                    <footer-navigation>
                    </footer-navigation>
                    <div class="oneItem">
                        <newsletter :in-footer="true">
                        </newsletter>
                        <div class="mainSocial">
                            <a href="#"><i class="icon-linkedin"></i></a>
                            <a href="#"><i class="icon-gplus"></i></a>
                            <a href="#"><i class="icon-instagram"></i></a>
                            <a href="#"><i class="icon-twitter"></i></a>
                            <a href="#"><i class="icon-facebook-official"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="brand-bg mainPadding">
            <div class="gridContainer clearfix">
                <div class="pullRight font-2 white-color">جميع الحقوق محفوظه © 2018</div>
                <div class="pullLeft font-2 white-color-links mobileHide">
                    <a href="#">سياسه الخصوصيه</a>
                    <span class="circleSperator"></span>
                    <a href="#">الشروط والاحكام</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    import FooterNavigation from './FooterNavigation';
    import Newsletter from '../components/Newsletter';

    export default {
        components: {FooterNavigation, Newsletter}
    }
</script>