<template>
    <div class="search clearfix">
        <div class="icon pullLeft"><i class="icon-search"></i></div>
        <form @submit.prevent="goToSearch">
            <input type="text" v-model="q">
            <input type="submit" value="">
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                q: '',
            };
        },
        methods: {
            goToSearch() {
                if (this.q) {
                    this.$router.push(`/search?q=${this.q}`);
                }
            }
        }
    }
</script>