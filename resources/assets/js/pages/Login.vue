<template>
    <div class="mainContent">
        <div class="gridContainer">

            <div class="white-bg mainPadding contactPage">
                <div class="myrow clearfix">
                    <div v-if="hasError">حصل خطأ</div>
                    <div class="mycol-lg-6">
                        <form @submit.prevent="submit">
                            <label for="username">
                                اسم المستخدم
                            </label>
                            <input id="username" v-model="form.username" required/>
                            <label for="password">
                                كلمة المرور
                            </label>
                            <input type="password" id="password" v-model="form.password" required/>
                            <button type='submit'>تسجيل الدخول</button>
                        </form>
                    </div>
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
                hasError: false
            };
        },
        methods: {
            submit() {
                this.$store.dispatch('login', this.form).then(data => {
                }).catch(error => {
                    this.hasError = true;
                    this.form.username = '';
                    this.form.password = '';
                });
            }
        }
    }
</script>