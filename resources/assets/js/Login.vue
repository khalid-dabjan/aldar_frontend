<template>
    <div class="loginContainer">
        <div class="tableDis">
            <div class="theCell">
                <div class="LC_theForm">
                    <div class="LC_logo"><img src="/login_assets/logo.png" alt=""></div>
                    <div class="LC_title">تسجيل الدخول</div>
                    <div class="LC_error" v-if="hasError">اسم المستخدم أو كلمة المرور غير صحيحين</div>
                    <form @submit.prevent="submit">
                        <input type="text" placeholder="إسم المستخدم" class="LC_oneInp" v-model="form.username"
                               required>
                        <input type="password" placeholder="كلمة المرور" class="LC_oneInp" v-model="form.password" required>
                        <div class="LC_rememberMe">
                            <label for="remember">
                                <input type="checkbox" id="remember">
                                <span>تذكرني</span>
                            </label>
                            <a href="#">نسيت كلمة السر؟</a>
                        </div>
                        <input type="submit" value="تسجيل الدخول" :disabled="loading">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                hasError: false,
                loading: false
            };
        },
        methods: {
            submit() {
                this.loading = true;
                this.$store.dispatch('login', this.form).then(data => {
                    window.location.replace('/');
                    this.loading = false;
                }).catch(error => {
                    this.hasError = true;
                    this.form.username = '';
                    this.form.password = '';
                    this.loading = false;
                });
            }
        }
    }
</script>
<style>
    @font-face {
        font-family: 'bold';
        src: url('/login_assets/fonts/BahijTheSansArabic-Bold.eot?#iefix') format('embedded-opentype'),
        url('/login_assets/fonts/BahijTheSansArabic-Bold.woff') format('woff'),
        url('/login_assets/fonts/BahijTheSansArabic-Bold.ttf') format('truetype'),
        url('/login_assets/fonts/BahijTheSansArabic-Bold.svg#BahijTheSansArabic-Bold') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    body {
        margin: 0;
        direction: rtl;
    }

    .loginContainer {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(/login_assets/bg.png) center center;
    }

    .tableDis {
        width: 100%;
        height: 100%;
        display: table;
    }

    .tableDis .theCell {
        display: table-cell;
        vertical-align: middle;
    }

    .LC_logo {
        text-align: center;
        margin: 0 0 50px;
    }

    .LC_logo img {
        width: 84px;
    }

    .LC_title {
        font-size: 24px;
        color: #C73133;
        margin: 0 0 20px;
        padding: 0 0 15px;
        position: relative;
    }

    .LC_title:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 45px;
        height: 2px;
        margin: 0 0 0 -22px;
        background: #C73133;
    }

    .LC_error {
        font-size: 16px;
        color: #C73133;
        margin: 0 0 20px;
        padding: 0 0 15px;
        position: relative;
    }

    .LC_theForm {
        width: 392px;
        margin: 0 auto;
        font-family: 'bold';
        text-align: center;
        font-size: 16px;
        color: #444;
    }

    .LC_oneInp {
        width: 100%;
        border: 1px solid rgba(112, 112, 112, 0.25);
        padding: 0 20px;
        box-sizing: border-box;
        height: 50px;
        font: 16px 'bold';
        margin: 0 0 20px;
        color: #444;
    }

    .LC_oneInp::placeholder {
        color: #444;
    }

    .LC_rememberMe {
        overflow: hidden;
        font-size: 14px;
        margin: 0 0 40px;
    }

    .LC_rememberMe label {
        float: right;
    }

    .LC_rememberMe a {
        float: left;
        color: #444;
        text-decoration: none;
    }

    .LC_theForm form input[type='submit'] {
        width: 186px;
        height: 50px;
        background: #C73133;
        color: #fff;
        font: 16px 'bold';
    }

    .LC_theForm form input[type='submit']:disabled {
        background-color: #cccccc;
        color: #666666;
    }
</style>