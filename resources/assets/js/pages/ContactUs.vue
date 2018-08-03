<template>
    <div>
        <bread-crumb :items="BCItems"></bread-crumb>

        <div class="mainContent">
            <div class="gridContainer">

                <div class="white-bg mainPadding contactPage">
                    <div class="myrow clearfix">

                        <div class="mycol-lg-6">
                            <div class="noResults" v-if="done">
                                <p>شكرا للتواصل معنا. سوف نقوم بالرد عليك بأقرب فرصة.</p>
                            </div>
                            <form v-else action="#" class="mrgBtm" @submit.prevent="submit">
                                <div class="myrow clearfix">

                                    <div class="mycol-md-6">
                                        <input type="text" placeholder="الاسم" class="formItem mrgBtm"
                                               name="name"
                                               :class="{error:hasError('name')}"
                                               v-model="form.name" v-validate="'required'">
                                    </div>

                                    <div class="mycol-md-6">
                                        <input type="text" placeholder="البريد الإلكتروني" class="formItem mrgBtm"
                                               name="email"
                                               :class="{error:hasError('email')}"
                                               v-model="form.email" v-validate="'required|email'">
                                    </div>

                                    <div class="mycol-md-6">
                                        <input type="text" placeholder="الهاتف الجوال" class="formItem mrgBtm"
                                               name="phone"
                                               :class="{error:hasError('phone')}"
                                               v-model="form.phone" v-validate="'required|numeric'">
                                    </div>

                                    <div class="mycol-md-6">
                                        <input type="text" placeholder="المكان" class="formItem mrgBtm"
                                               name="location"
                                               :class="{error:hasError('location')}"
                                               v-model="form.location" v-validate="'required'">
                                    </div>

                                    <div class="mycol-lg-12">
                                        <textarea class="formItem textarea mrgBtm" placeholder="الرسالة"
                                                  name="message"
                                                  :class="{error:hasError('message')}"
                                                  v-model="form.message" v-validate="'required'"></textarea>
                                    </div>

                                    <div class="mycol-lg-12">
                                        <input type="submit" class="formItem submit" value="إرسال">
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div class="mycol-lg-6">
                            <div class="myrow clearfix">

                                <div class="mycol-sm-6">
                                    <div class="brand-color font-1 mrgBtm">للتواصل والمعلومات</div>
                                    <div class="mrgBtm font-medium"><a href="#">info@aldar.com</a></div>
                                    <div class="brand-color font-1 mrgBtm">للشئون التحريرية</div>
                                    <div class="mrgBtm font-medium"><a href="#">editorial@aldar.com</a></div>
                                    <div class="brand-color font-1 mrgBtm">للإعلانات</div>
                                    <div class="mrgBtm font-medium"><a href="#">advertising@aldar.com</a></div>
                                </div>

                                <!--<div class="mycol-sm-6 font-medium">-->
                                    <!--<div class="mrgBtm">خالد بن سلطان آل علي</div>-->
                                    <!--<div class="mrgBtm">رئيس مجلس الإدارة</div>-->
                                    <!--<div class="mrgBtm"><a href="#">md@dotemirates.com</a></div>-->
                                    <!--<br>-->
                                    <!--<div class="mrgBtm">مجلس الإدارة</div>-->
                                    <!--<div class="mrgBtm">د. عبدالرحمن الشميري</div>-->
                                    <!--<div class="mrgBtm"><a href="#">abdulrahman@dotemirates.com</a></div>-->
                                    <!--<br>-->
                                    <!--<div class="mrgBtm">عبدالله ماجد آل علي</div>-->
                                    <!--<div class="mrgBtm"><a href="#">abulla@dotemirates.com</a></div>-->
                                    <!--<br>-->
                                    <!--<div class="mrgBtm">محمد آل حسن</div>-->
                                    <!--<div class="mrgBtm"><a href="#">muhammad@dotemirates.com</a></div>-->
                                    <!--<br>-->
                                    <!--<div class="mrgBtm">جمعة الكعبي</div>-->
                                    <!--<div class="mrgBtm"><a href="#">juma@dotemirates.com</a></div>-->
                                    <!--<br>-->
                                    <!--<div class="mrgBtm">مسلم المنصوري</div>-->
                                    <!--<div class="mrgBtm"><a href="#">musallam@dotemirates.com</a></div>-->
                                    <!--<br>-->

                                <!--</div>-->

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import BreadCrumb from '../partials/Breadcrumb';

    export default {
        components: {BreadCrumb},
        props: ['slug'],
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    location: '',
                    message: ''
                },
                done: false
            };
        },
        created() {
            // this.$store.dispatch('fetchPage', {slug: this.slug});
        },
        computed: {
            hasEmailError() {
                return this.hasError('email');
            },
            BCItems() {
                return [
                    {
                        name: 'اتصل بنا',
                        url: '/page/contact-us'
                    }
                ];
            },
            ...mapState({
                // page: state => state.mainStore.page
            }),
        },
        methods: {
            hasError(field) {
                return this.errors.has(field);
            },
            submit() {
                this.$validator.validate().then(isValid => {
                    if (isValid) {
                        this.$store.dispatch('postContactUs', this.form).then(() => {
                            this.done = true;
                        });
                    }
                });
            }

        }
    }
</script>
<style>
    .error {
        border: 1px solid #c73133;
    }
</style>