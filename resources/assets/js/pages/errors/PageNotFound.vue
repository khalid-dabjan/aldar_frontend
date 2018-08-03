<template>
    <div class="mainContent">
        <div class="gridContainer">
            <div class="errorPage textCentered">
                <div class="in">
                    <div class="mrgBtm-md"><img src="/images/404.png" alt=""></div>
                    <div class="number">404</div>
                    <div class="font-1 fontBold mrgBtm">الصفحة غير موجودة</div>
                    <div class="mrgBtm-lg">عذرا ، ولكن الصفحة التي كنت تبحث عنها لم يتم العثور عليها. حاول التحقق من URL
                        للخطأ ، ثم اضغط على زر التحديث في المتصفح الخاص بك أو حاول العثور على شيء آخر في موقعنا .
                    </div>
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