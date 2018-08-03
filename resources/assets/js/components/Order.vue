<template>
    <div class="thePopup topSpace">

        <div class="container animateTop">
            <div class="reorderTopics" id="dontClosePopup">

                <span class="closeIcon" @click="close"><i class="icon-close"></i></span>
                <div class="mainTitle">رتب الموضوعات</div>
                <div class="content">

                    <form>
                        <div class="searchForm">
                            <input type="text" name="search" placeholder="بحث" v-model="q"/>
                            <div class="autoComplete" v-if="suggestions.length !== 0 || noResults">
                                <div class="one" v-for="post in suggestions" @click="add(post)">
                                    <div class="clearfix">
                                        <span v-text="post.title"></span>
                                    </div>
                                </div>
                                <div class="one" v-if="noResults">
                                    <div class="clearfix">
                                        <span>لا يوجد نتائج</span>
                                    </div>
                                </div>
                            </div><!-- autoComplete -->

                        </div><!-- ASF_searchArea -->
                    </form>

                    <div class="sortableArea">
                        <ul id="sortable">
                            <li class="ui-state-default" v-for="post in posts" :data-id="post.id">
                                <span class="remove_ads_item" @click="remove(post)">x</span>{{post.title}}
                            </li>
                        </ul>
                    </div>
                    <input type="hidden" v-model="idsText" id="ids"/>
                    <div class="submitIt clearfix">

                        <a href="#" class="closeAdminPanel" @click="close"> اغلاق </a>
                        <a href="#" class="ASF_save" @click="save"> حفظ التغييرات </a>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
<script>
    export default {
        props: ['slug'],
        created() {
            this.$store.dispatch('tryLogin').then((token) => {
                if (token === null) {
                    window.location.replace('/');
                } else {
                    this.$store.dispatch('fetchSection', {name: this.slug}).then(() => {
                    });
                }

            });
        },
        mounted() {
            $('.animateTop').animate({marginTop: '150px'}, 'slow').animate({marginTop: '0'}, 'fast');
        },
        data() {
            return {
                q: '',
                suggestions: [],
                timeOutId: null,
                noResults: false,
                ids: ''
            };
        },
        computed: {
            posts() {
                return this.$store.state.mainStore[this.slug].posts ? this.$store.state.mainStore[this.slug].posts : [];
                // return this.$store.state.mainStore.home_slider;
            },
            idsText: {
                get() {
                    let arr = [];
                    this.posts.forEach(p => {
                        arr.push(p.id);
                    });
                    return arr.join(',');
                },
                set(val) {
                    console.log(val);
                }
            }
        },
        methods: {
            close() {
                $('.animateTop').animate({marginTop: '150px'}, 'fast').animate({marginTop: '-100%'}, 'fast');
                $('.closePopup', window.parent.document).trigger('click');

            },
            save() {
                let t = this.$store.state.mainStore.token;
                let ids = $('#ids').val();
                axios.post('order', {
                    block: this.slug,
                    ids,
                }, {
                    headers: {
                        Authorization: `Bearer ${t}`
                    }
                }).then(() => {
                    $('.closePopupRefresh', window.parent.document).trigger('click');
                });
            },
            add(post) {
                this.posts.push(post);
                this.q = '';
            },
            remove(post) {
                let i = this.posts.findIndex(p => p.id === post.id);
                this.posts.splice(i, 1);
            }
        },
        watch: {
            q(val) {
                this.noResults = false;
                if (this.timeOutId) {
                    clearTimeout(this.timeOutId);
                }
                if (!val) {
                    this.suggestions = [];
                    return;
                }
                this.timeOutId = setTimeout(() => {
                    this.$store.dispatch('search', {q: this.q, isOrder: true}).then(data => {
                        this.suggestions = data.posts;
                        this.noResults = this.suggestions.length === 0
                    });
                }, 500);
            }
        }
    }
</script>