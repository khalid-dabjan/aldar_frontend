<template>
    <div class="oneWidget mrgBtm poll">
        <div class="mainTitle">
            <div class="name">استطلاع راي</div>
        </div>
        <div class="avatar"><img :src="poll.image_url" :alt="poll.question"></div>
        <div class="mainPadding">
            <div class="font-2 mrgBtm" v-text="poll.question"></div>
            <form @submit.prevent="submit">

                <div class="answers mrgBtm" v-if="showResults">
                    <div class="one" v-for="answer in poll.answers" :key="answer.id">
                        <div class="oneResult clearfix">
                            <img :src="answer.image_url" alt="">
                            <div class="theResult">
                                <div class="theText clearfix"><span class="pullRight" v-text="answer.text"></span><span
                                        class="pullLeft">33%</span></div>
                                <div class="bar">
                                    <div style="width: 33%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="answers mrgBtm" v-else>
                    <div class="one" v-for="answer in poll.answers" :key="answer.id">
                        <input type="radio" :id=" 'answer_' + answer.id " name="poll1" :value="answer.id"
                               v-model="selected">
                        <label :for=" 'answer_' + answer.id ">
                            <img :src="answer.image_url" :alt="answer.text">
                            <span v-text="answer.text"></span>
                            <span class="circle"></span>
                        </label>
                    </div>
                </div>
                <div class="buttons clearfix">
                    <input type="submit" value="تصويت" v-if="!hasVoted">
                    <a href="#" @click.prevent="showResults=true" v-if="!showResults">نتائج التصويت</a>
                    <a href="#" @click.prevent="showResults=false" v-if="showResults && !hasVoted">العودة</a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        created() {
            this.$store.dispatch('fetchPoll').then( () =>{
                console.log(this.poll);
            });
        },
        data() {
            return {
                showResults: false,
                hasVoted: false,
                selected: 0
            };
        },
        computed: {
            ...mapState({
                poll: state => state.mainStore.poll,
            }),
        },
        methods: {
            submit() {
                if (this.selected !== 0) {
                    this.$store.dispatch('submitPoll', this.selected);
                    this.hasVoted = true;
                    localStorage.setItem("vote_"+this.poll.id , "true");
                    this.showResults = true;
                }
            },
        },
        watch:{
            "poll.id"(id){
                this.showResults = localStorage.getItem("vote_"+ this.poll.id) !== null;
                this.hasVoted = this.showResults;
            }
        }
    }
</script>