<template>
    <a href="#" class="mainBtn" @click.prevent="loadMore" v-if="!finished">المزيد</a>
</template>
<script>
    export default {
        props: {
            count: Number,
            payload: {
                type: Object,
                default() {
                    return {};
                },
            },
            dispatchName: {
                type: String,
                default: 'fetchSection'
            }
        },
        data() {
            return {
                times: 1,
                finished: false
            };
        },
        methods: {
            loadMore() {
                let offset = this.count * this.times;
                this.times++;
                this.$store.dispatch(this.dispatchName, Object.assign(this.payload, {
                    offset: offset,
                    isMore: true,
                    count: this.count
                })).then(data => {
                    if (typeof data.posts !== 'undefined') {
                        if (data.posts.length === 0) {
                            this.finished = true;
                        }
                    } else if (data.length === 0) {
                        this.finished = true;
                    }
                });
            }
        }
    }
</script>