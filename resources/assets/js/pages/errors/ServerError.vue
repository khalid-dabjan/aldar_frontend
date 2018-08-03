<template>
    <div class="mainContent">
        <div class="gridContainer">
            <div class="errorPage textCentered">
                <div class="in">
                    <div class="mrgBtm-md"><img src="/images/500.png" alt=""></div>
                    <div class="number">500</div>
                    <div class="font-1 fontBold mrgBtm">خطأ في النظام الداخلي</div>
                    <div class="mrgBtm-lg">لقد الخادم شيء غير متوقع لم يسمح  بإتمام الطلب. ونحن نعتذر .</div>
                    <div class="fontBold brand-color">سيتم تحويلك في {{seconds}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                seconds: 10,
                interval_id: ''
            };
        },
        mounted() {
            this.interval_id = setInterval(() => {
                this.seconds--;
            }, 1000);
        },
        watch: {
            seconds(val) {
                if (val === 0) {
                    clearInterval(this.interval_id);
                    this.$router.replace({name: 'home'});
                }
            }
        }
    }
</script>