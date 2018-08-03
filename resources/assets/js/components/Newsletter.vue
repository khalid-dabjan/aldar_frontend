<template>
    <div>
        <div v-if="inFooter">
            <div class="singleTitle underline mrgBtm">تواصل معنا</div>
            <div class="subscribeForm mrgBtm">
                <p v-if="done">تم الاشتراك بنجاح</p>
                <form @submit.prevent="submit" v-else>
                    <input type="text" class="formItem" :class="{error:hasError}" placeholder="البريد الالكتروني"
                           v-model="email">
                    <button type="submit" class="submit"><i class="icon-arrowleft"></i></button>
                </form>
            </div>
        </div>
        <div class="oneWidget mrgBtm subscribeWidget" v-else>
            <div class="mainTitle">
                <div class="name">خدمة النشرة الإخبارية</div>
            </div>
            <hr>
            <div class="avatar"><img src="/images/widgets/subscribeBg.png" alt=""></div>
            <div class="mainPadding">
                <div class="font-1 mrgBtm">اشترك الآن لتصلك آخر الأخبار</div>
                <div class="subscribeForm">
                    <p v-if="done">تم الاشتراك بنجاح</p>
                    <form @submit.prevent="submit" v-else>
                        <input type="text" class="formItem" :class="{error:hasError}" placeholder="البريد الالكتروني"
                               v-model="email">
                        <button type="submit" class="submit"><i class="icon-arrowleft"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            inFooter: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                email: '',
                done: false,
                hasError: false
            };
        },
        methods: {
            submit() {
                if (this.email) {
                    this.$store.dispatch('submitNewsletter', this.email).then(data => {
                        this.done = true;
                    }).catch(() => {
                        this.hasError = true
                    });
                }
            },
        },
        watch: {
            email(val) {
                this.hasError = false;
            }
        }
    }
</script>
<style>
    .error {
        border: 2px solid #c73134;
    }
</style>