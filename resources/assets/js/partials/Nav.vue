<template>
    <div>
        <header id="header">
            <div class="top">
                <div class="gridContainer clearfix">
                    <h1 class="logo pullRight">
                        <router-link to="/">
                            <img src="/images/logo.png" alt="">
                        </router-link>
                    </h1>
                    <div class="leftHead pullLeft">
                        <div class="menuIcon2" onClick="toggleClassToBody('menuOpened')">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="mobileHide clearfix">
                            <search-form>
                            </search-form>
                            <div class="mainSocial pullLeft">
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
            <div class="brand-bg bottom">
                <div class="gridContainer">
                    <nav id="navigation">
                        <div class="menuIcon" onClick="toggleClassToBody('menuOpened')">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul class="clearfix">
                            <li v-for="item in items">
                                <div :class="hasSubClasses(item)">
                                    <router-link :to="item.uri">
                                        {{item.name}}
                                        <i class="icon-angledown" v-if="hasSub(item)"></i>
                                        <div class="mdd_content" v-if="hasSub(item)">
                                            <router-link v-for="subItem in item.children" :to="subItem.uri"
                                                         :key="subItem.id">
                                                {{subItem.name}}
                                            </router-link>
                                        </div>
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <div class="mobileNav white-color-all" id="mobileNav">
            <div class="gridContainer">
                <div class="mobileSearch">
                    <div class="icon"><i class="icon-search"></i></div>
                    <form action="#">
                        <input type="text">
                        <input type="submit" value="">
                    </form>
                </div>
                <div class="theMenu">
                    <ul>
                        <li v-for="item in items">

                            <router-link :to="item.uri" v-text="item.name" v-if="!hasSub(item)" :key="item.id">
                            </router-link>

                            <div class="TM_section" v-else>
                                <div class="name">{{item.name}}<i class="icon-angledown"></i></div>
                                <div class="subsection">
                                    <router-link v-for="subItem in item.children" :to="subItem.uri"
                                                 v-text="subItem.name" :key="subItem.id">
                                    </router-link>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>

                <div class="mainSocial mainPadding textCentered">
                    <a href="#"><i class="icon-linkedin"></i></a>
                    <a href="#"><i class="icon-gplus"></i></a>
                    <a href="#"><i class="icon-instagram"></i></a>
                    <a href="#"><i class="icon-twitter"></i></a>
                    <a href="#"><i class="icon-facebook-official"></i></a>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapState} from 'vuex'
    import SearchForm from './SearchForm';

    export default {
        components: {SearchForm},
        created() {
            this.$store.dispatch('fetchNav', 'header');
        },
        methods: {
            hasSub(item) {
                return item.children && item.children.length;
            },
            hasSubClasses(item) {
                return this.hasSub(item) ? 'mydropDown mainDropDown' : '';
            },
        },
        computed: {
            ...mapState({
                items: state => state.mainStore.header,
            })
        }
    }
</script>