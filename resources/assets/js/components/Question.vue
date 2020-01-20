<template>
    <div id="landing">
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row>
                <b-col class="box">
                    <Questions
                    v-if="questions.length"
                    :currentQuestion="questions[index]"
                    :next="(numTotal - 1) != index? onNext: to"
                    :prev="onPrev"
                    :answeredAnswers="answeredAnswers"
                    :increment="increment"
                    @answers="archiveAnswers"
                    >
                    </Questions>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import Questions from "./QuestionBox.vue";
import datas from "../data/questions.js"

export default {
    components: {
        Questions
    },
    data() {
        return {
            datas,
            questions: [],
            index: 0,
            numTotal: 0,
            answeredAnswers: []
        }
    },
    methods: {
        onNext() {
            this.index++
            return this.index
        },
        onPrev() {
            this.index--
            // console.log(this.index)
            return this.index
        },
        to() {
            this.$router.push({ path: '/summary' })
        },
        increment(isCorrect) {
            if (isCorrect) {
                this.numCorrect ++
            }
            // this.numTotal ++
        },
        archiveAnswers(answers) {
            // alert(answers);
            let questions = []
            for (var i = 0; i < this.answeredAnswers.length; i ++) {
                questions.push(this.answeredAnswers[i].question);
            }
            let index = this.questions.indexOf(answers.question);
            if (index == -1) { 
                this.answeredAnswers.push(answers);
            }
            else {
                this.answeredAnswers[index].answered = answers.answered;
            }
        }
    },
    mounted: function() {
        for (const key in datas) {
            if (datas.hasOwnProperty(key)) {
                const element = datas[key];
                this.questions.push(element);
            }
            this.numTotal ++
        }
        console.log(this.questions);
    }
}
</script>
<style scoped>
.logo {
    max-width: 125px;
}
.box {
    align-items: center;
}
@media only screen and (max-width: 768px) {
    .box {
        margin-top: -160px;
    }
}
</style>