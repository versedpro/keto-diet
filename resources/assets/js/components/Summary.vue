<template>
    <div class="summary-container c-maincontent results-2 results-3 c-content">
        <b-navbar class="navbar-brand" style="margin-top: 10px;">
            <b-container>
            
                <img src="../../images/images/logo1b26.svg" alt="logo" class="logo">
            
            </b-container>
        </b-navbar>
        <b-container class="container container-intro">
            <h3 style="max-width: 740px;">Get your personalized Keto Diet</h3>
            <p class="subheading">Based on your answers, you will be...</p>
            <b-col class="b-blocks-featured">
                <b-row class="b-result b-result--weight">
                    <b-row class="b-stats">
                        <b-row class="b-stats--header">
                            <p v-for="(stat, index) in stats" :key="index" v-bind:class="{'e-special': (index == 2)}">{{ stat }}<span v-if="index == 2">kg</span></p>
                        </b-row>
                        <b-row class="b-stats--footer">
                            <p>
                                by <span class="e-month">January</span>, <span class="e-year">2020</span>
                            </p>
                        </b-row>
                    </b-row>
                    <b-col class="b-months">
                        <b-col class="b-stats--header">
                            <p>Dec</p>
                            <p>
                                <b>Jan</b>
                            </p>
                        </b-col>
                        <b-col class="b-stats--results">
                            <b-row class="b-stats--results--from">85 <span>kg</span></b-row>
                            <b-row class="b-stats--results--to">75 <span>kg</span></b-row>
                        </b-col>
                    </b-col>
                    <!-- <grafica-component></grafica-component> -->
                </b-row>
                <b-row class="b-result b-result--text">
                    <b-row class="b-stats--header">87<span>kg</span></b-row>
                    <b-row class="b-stats--footer">Similar people <b>lost</b> more than <span class="e-special">10</span><b>kg</b> on Keto</b-row>
                </b-row>
                <b-row class="b-result b-result--firstweek">
                    <b-row class="b-stats--header">
                        <b-col class="b-days">
                            <b-col class="b-day"  v-for="(date, index) in week" :key="index"><span class="e-name">{{ date }}</span><span class="e-number">{{ index + 1 }}</span></b-col>
                        </b-col>
                    </b-row>
                    <b-row class="b-stats--footer">
                        <b-row class="e-special"><span>-4</span>kg <p>After first week</p></b-row>
                    </b-row>
                </b-row>
            </b-col>
            <b-button block variant="primary" class="scroll-btn">Get your plan</b-button>
            <b-row class="summary">
                <h2>Personal summary</h2>
                <b-row>
                    <b-col md="6" class="col-12">
                        <b-row id="bmi" class="b-result results-box">
                            <b-row class="e-row is-selected">
                                <span class="e-value">
                                    <span class="e-number">27.78</span>BMI
                                </span>
                                <span class="e-name">
                                    Overweight
                                </span>
                            </b-row>
                            <b-row class="e-row">
                                <span class="e-value">
                                    <span class="e-number">27.78</span>
                                </span>
                                <span class="e-name">Normal</span>
                            </b-row>
                            <b-row class="e-row">
                                <span class="e-value">
                                    <span class="e-number">27.78</span>
                                </span>
                                <span class="e-name">Underweight</span>
                            </b-row>
                        </b-row>
                    </b-col>
                    <b-col md="6" class="col-12">
                        <b-row id="intake" class="b-result results-box">
                            <b-row class="e-heading">Daily calorie intake</b-row>
                            <b-row class="e-value">
                                <b-row class="daily-norm">
                                    <span>2212-2362</span>
                                </b-row>
                            </b-row>
                            <b-row class="e-measurement">kCal</b-row>
                            <img src="https://ketocycle.diet/images/daily-calorie.png" alt="">
                        </b-row>
                    </b-col>
                    <b-col md="6" class="col-12">
                        <b-row id="body-parts" class="b-result results-box">
                            <b-row class="e-heading">Body change estimations</b-row>
                            <img src="https://ketocycle.diet/images/body-change-estimations.png" alt="">
                        </b-row>
                    </b-col>
                    <b-col md="6" class="col-12">
                        <b-row class="results-box" id="meals">
                            <b-row class="meal-count" style="max-width: 240px; width: 100%; margin: auto;left: 0; right: 0; top: 115px;">
                                <span>1000+</span>
                            </b-row>
                            <img src="https://ketocycle.diet/images/unique-recipes.png" alt="">
                            <p>Unique food variations for you</p>
                        </b-row>
                    </b-col>
                </b-row>
            </b-row>
            
        </b-container>
        <b-row class="covered">
            <b-row class="heading">Keto Diet was convered</b-row>
            <b-row class="covered-logos">
                <img src="https://ketocycle.diet/images/covered-1.png" alt="">
                <img src="https://ketocycle.diet/images/covered-2.png" alt="">
                <img src="https://ketocycle.diet/images/covered-3.png" alt="">
            </b-row>
        </b-row>
        <b-container id="summary-footer">
            <b-row>
                <b-container>
                    <b-row class="b-ourpromise">
                        <h2>OUR PROMISE</h2>
                        <P class="e-text">We believe in a balanced way to lose weight and keep the weight off. We know that most of the diets or weight loss programs that you have tried in the past don’t work - they are just too hard to follow. Enormous food cravings, friends that visit you with a bottle of wine, that freshly baked cheesecake… Everything affects your journey and if your diet is not easy-to-follow, you are not going to achieve your results.<br><br>Don’t blame yourself. It’s really hard. That’s why our nutritionists and personal coaches work around the clock to prepare the most personalized plans you love. We want to make sure that it becomes a part of your life. We don’t change habits, we help you to improve them. <br><br> Try it out and we guarantee you will be satisfied.</P>
                        <b-row class="b-namesurname" style="display: flex; align-items: center; justify-content: flex-start">
                            <b-row class="b-namesurname-namesurname" style="padding-right: 30px; margin: 0px;">
                                <p class="e-heading">Head of Nutrition,</p>
                                <p class="e-subtitle">Christine Ellis</p>
                            </b-row>
                            <img src="https://ketocycle.diet/images/signature.png" alt="" style="margin-left: 0px; margin-right: auto; left: 0; position: relative; maring-top: 30px;">
                        </b-row>
                    </b-row>
                </b-container>
            </b-row>
        </b-container>
        <b-row class="container e-actionbar">
            <b-row class="e-actionbar-inner" style="max-width: 400px; margin: auto; margin-bottom: 60px;">
                <b-button block variant="primary" @click="to_plan">Get it now</b-button>
            </b-row>
        </b-row>
    </div>
</template>
<script>
export default {
    data() {
        return  {
            stats: [],
            week: ["MON","TUE", "WEB", "THU", "FRI", "SAT", "SUN"]
        }
    },
    mounted: function () {
        this.stats = ['77', '76', '75', '74', '73'];
        let divs = document.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i ++) {
            // console.log(divs[i].classList);
            divs[i].classList.remove('row');
            divs[i].classList.remove('col');
        }
    },
    methods: {
        to_plan() {
            // this.$router.push("/question/get_plan")
            this.$router.push({ path: 'question', query: { plan: 'get_plan' } })
        }
    }
}
</script>
<style scoped>
.logo {
    max-width: 125px;
}
.row {
    margin: auto;
    display: block;
}
.navbar {
    margin-bottom: 22px;
}
.b-days .b-day {
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 8px;
    min-width: 40px;
}
.b-days, .b-days .b-day {
    display: -webkit-box;
    display: flex;
}
.b-days {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 15px;
    color: #dfe0e1;
    min-height: 50px;
}
.b-days .b-day:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background: #000;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 20px;
}
.b-days .b-day:last-child {
    color: rgba(255,45,99,.6);
}
</style>