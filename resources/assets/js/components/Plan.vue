<template>
    <div>
        <navbar></navbar>
        <b-row id="billing" class="active m-billing--v5 m-billing--v6 m-billing--v7 m-checkout--11 m-billing--fixed with-bg">
            <b-container>
                <img src="../../images/images/logo1b26.svg" alt="" class="regular-logo">
                <b-row class="block-content">
                    <h1 class="e-intro-title">
                        Get your <span>personal</span> Keto Diet
                    </h1>
                    <h2 style="font-size: 29px; text-decoration: none;">
                        The most popular Keto diet! Over <span>541 221</span> plans ordered
                    </h2>
                </b-row>
                <b-row class="limited-offer">The offer expires in: <span class="time is-pulsing">15:00</span></b-row>
                <b-row class="flex-block">
                    <b-row class="plan-selection subscriptions">
                        <h3>Select your plan</h3>
                        <b-row class="pricing-options">
                            <b-col class="pricing-option pricing-1">
                                <b-row class="tick">
                                    <!-- <i class="fa fa-check"></i> -->
                                    <font-awesome-icon icon="check-circle" class="icon"></font-awesome-icon>
                                </b-row>
                                <b-row class="option-title">
                                    3 months <br> Keto diet
                                    <b-row class="billing-period">Billed every 4 months</b-row>
                                </b-row>
                                <b-row class="option-price single-month">
                                    $2.50
                                    <b-row class="per-week">per week</b-row>
                                    <b-row class="old-price">$5</b-row>
                                </b-row>
                            </b-col>
                            <b-col class="pricing-option pricing-3 active">
                                <b-row class="tick">
                                    <font-awesome-icon icon="check-circle" class="icon active"></font-awesome-icon>
                                </b-row>
                                <b-row class="option-title">
                                    12 months <br> Keto diet
                                    <b-row class="billing-period">Billed every 4 months</b-row>
                                </b-row>
                                <b-row class="option-price">
                                    $1.25
                                    <b-row class="per-week">per week</b-row>
                                    <b-row class="old-price">$5</b-row>
                                </b-row>
                                <b-row class="discount">
                                    Special offer - save 75%
                                </b-row>
                            </b-col>
                            <b-col class="pricing-option pricing-2">
                                <b-row class="tick">
                                    <font-awesome-icon icon="check-circle" class="icon"></font-awesome-icon>
                                </b-row>
                                <b-row class="option-title">
                                    6 months <br> Keto diet
                                    <b-row class="billing-period">Billed every 4 months</b-row>
                                </b-row>
                                <b-row class="option-price">
                                    $1.75
                                    <b-row class="per-week">per week</b-row>
                                    <b-row class="old-price">$5</b-row>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-row>
                    <b-col class="benefits-listed">
                        <h3>All plans include</h3>
                        <b-list-group>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Professional Keto nutrition analysis</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Personalized Keto meal plan</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> FREE BONUS: Keto fo beginners e-book</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Easy-to-follow, delicious recipes</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Simple ingredients from any store</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> 24/7 nutritionist support</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Digital access on any device</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Printable grocery list</b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col class="payment-info">
                        <b-row class="e-termsconditions">
                            <b-row class="e-termsconditions-checkbox">
                                <b-row class="payment-disclaimer">
                                    <input type="checkbox" id="terms_and_conditions" name="terms_and_conditions" style="display: none;" checked="checked" class="e-terms_and_conditions e-checkbox m-general">
                                    By purchasing, you agree to our
                                    <!-- modal -->
                                    <!-- <a href="#" data-toggle="modal" data-target="#terms_and_conditions_modal_js">T&C</a> -->
                                    <a href="#" @click="show_terms">T&C</a>
                                    and
                                    <!-- modal -->
                                    <!-- <a href="#" data-toggle="modal" data-target="#privacy_policy_modal">Privacy policy</a> -->
                                    <a href="#" v-b-modal.privacy_policy_modal>Privacy policy</a>
                                </b-row>
                                <b-row class="error-msg" style="display: none;">Please check that you agree with the Terms and Conditions</b-row>
                            </b-row>
                        </b-row>
                        <b-button class="e-btn cta-btn subscribe-btn">Click here to get your plan</b-button>
                    </b-col>
                    <b-col class="secure-payment">
                        <img src="https://ketocycle.diet/images/safecheckout.png" alt="Secure payment">
                    </b-col>
                </b-row>
                <b-row class="main-container">
                    <b-row class="success-story">
                        <b-row class="block-content">
                            <h4>People just like you, achieved great results using Keto</h4>
                            <b-col class="left-side">
                                <b-row class="story-block">
                                    <img src="https://ketocycle.diet/images/stories/male-90.jpg" alt="Story">
                                    <b-row class="story-info">
                                        <b-row class="story-name">Adam D.</b-row>
                                        <b-row class="story-details">
                                            Lost <span>9 kg</span> in first 28 days
                                        </b-row>
                                    </b-row>
                                </b-row>
                            </b-col>
                            <b-col class="right-side">
                                <h3>Hear success stories from our clients</h3>
                                <p>
                                    <em>A great plan for nutrition if you want to lose weight and keep your weight off. The recipes are yummy, flavourful and fun to eat. I always thought that to lose weight you need to cut fat and stop eating the foods I love but :Keto diet and KetoCycle changed this misconception. Definitely recommend.</em>
                                </p>
                            </b-col>
                        </b-row>
                    </b-row>
                    <b-row class="product-composition">
                        <b-row class="block-content">
                            <b-col class="left-side">
                                <h3>28-day personalized Keto diet plan</h3>
                            </b-col>
                            <b-col class="right-side">
                                <!-- slide or gif file -->
                                <img src="https://ketocycle.diet/images/keto-plan.gif" alt="Shopping list">
                            </b-col>
                        </b-row>
                    </b-row>
                    <b-row class="keto-benefits">
                        <b-row class="block-content">
                            <h2 style="text-decoration: none;">Keto benefits</h2>
                            <b-list-group>
                                <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Sustainable weight loss</b-list-group-item>
                                <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Reduced risk of inflammation</b-list-group-item>
                                <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> It can reduce insulin resistance, lowering blood sugar by 3–6% and insulin levels by 20–31%</b-list-group-item>
                                <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Reduces “bad” LDL cholesterol, blood triglycerides, inflammatory markers, and blood sugar</b-list-group-item>
                                <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Increases the brain hormone BDNF and may aid the growth of new nerve cells</b-list-group-item>
                            </b-list-group>
                        </b-row>
                    </b-row>
                </b-row>
                <b-row class="covered">
                    <b-row class="heading">Keto Diet was convered</b-row>
                    <b-row class="covered-logos">
                        <img src="https://ketocycle.diet/images/covered-1.png" alt="">
                        <img src="https://ketocycle.diet/images/covered-2.png" alt="">
                        <img src="https://ketocycle.diet/images/covered-3.png" alt="">
                    </b-row>
                </b-row>
                <b-row class="product-composition-media">
                    <b-row class="block-content-media">
                        <h3>28-day personalized Keto diet plan</h3>
                        <img src="https://ketocycle.diet/images/keto-plan.gif" alt="shopping list">
                    </b-row>
                </b-row>
                <b-row class="faq">
                    <b-row class="block-content">
                        <h2 style="text-decoration: none;">People often ask us</h2>
                        <b-row class="block-content-items">
                            <p><span>What happens after I order?</span><br>
                            After you place your order we get to work! Based on the questions you answered in the quiz,
                            we’ll craft your plan to your exact personal nutrition requirements. All plans are double
                            verified - by the person making it and a supervisor - so you can be certain the plan you get is
                            the best.
                            </p>
                            <p><span>When do I get my plan?</span><br>
                            Our every plan is personalized and our nutritionists work hard to make them for you to like.
                            Usually it takes up to 2 hours for your plan to be delivered into your email.
                            </p>
                            <p><span>Is this a one time payment?</span><br>
                            Yes, it is a one-time payment; we are not a subscription. If you buy a lifetime access, you will
                            be able to access your plan anytime you want. If you chose to buy it for the period of 3 months,
                            you will have to repurchase it again after your plan expire.
                            </p>
                        </b-row>
                    </b-row>
                </b-row>
                <b-row class="user-reviews">
                    <h2 style="text-decoration: none;">User reviews</h2>
                    <b-row class="block-content">
                        <img src="https://ketocycle.diet/images/comment-1.png" alt="Facebook comment 1">
                        <img src="https://ketocycle.diet/images/comment-2.png" alt="Facebook comment 2">
                        <img src="https://ketocycle.diet/images/comment-3.png" alt="Facebook comment 3">
                        <img src="https://ketocycle.diet/images/comment-4.png" alt="Facebook comment 4">
                    </b-row>
                </b-row>
                <b-row class="limited-offer">
                    The offer expires in: <span class="time is-pulsing">09:53</span>
                </b-row>
                <br>
                <b-row class="flex-block">
                    <b-col class="plan-selection subscriptions">
                        <h3>Select your plan</h3>
                        <b-row class="pricing-options">
                            <b-col class="pricing-option pricing-1">
                                <b-row class="tick">
                                    <!-- <i class="fa fa-check"></i> -->
                                    <font-awesome-icon icon="check-circle" class="icon"></font-awesome-icon>
                                </b-row>
                                <b-row class="option-title">
                                    3 months <br> Keto diet
                                    <b-row class="billing-period">Billed every 4 months</b-row>
                                </b-row>
                                <b-row class="option-price single-month">
                                    $2.50
                                    <b-row class="per-week">per week</b-row>
                                    <b-row class="old-price">$5</b-row>
                                </b-row>
                            </b-col>
                            <b-col class="pricing-option pricing-3 active">
                                <b-row class="tick">
                                    <font-awesome-icon icon="check-circle" class="icon active"></font-awesome-icon>
                                </b-row>
                                <b-row class="option-title">
                                    12 months <br> Keto diet
                                    <b-row class="billing-period">Billed every 4 months</b-row>
                                </b-row>
                                <b-row class="option-price">
                                    $1.25
                                    <b-row class="per-week">per week</b-row>
                                    <b-row class="old-price">$5</b-row>
                                </b-row>
                                <b-row class="discount">
                                    Special offer - save 75%
                                </b-row>
                            </b-col>
                            <b-col class="pricing-option pricing-2">
                                <b-row class="tick">
                                    <font-awesome-icon icon="check-circle" class="icon"></font-awesome-icon>
                                </b-row>
                                <b-row class="option-title">
                                    6 months <br> Keto diet
                                    <b-row class="billing-period">Billed every 4 months</b-row>
                                </b-row>
                                <b-row class="option-price">
                                    $1.75
                                    <b-row class="per-week">per week</b-row>
                                    <b-row class="old-price">$5</b-row>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="benefits-listed">
                        <h3>All plans include</h3>
                        <b-list-group>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Professional Keto nutrition analysis</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Personalized Keto meal plan</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> FREE BONUS: Keto fo beginners e-book</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Easy-to-follow, delicious recipes</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Simple ingredients from any store</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> 24/7 nutritionist support</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Digital access on any device</b-list-group-item>
                            <b-list-group-item class="e-feature"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon> Printable grocery list</b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col class="payment-info">
                        <b-row class="e-termsconditions">
                            <b-row class="e-termsconditions-checkbox">
                                <b-row class="payment-disclaimer">
                                    <input type="checkbox" id="terms_and_conditions" name="terms_and_conditions" style="display: none;" checked="checked" class="e-terms_and_conditions e-checkbox m-general">
                                    By purchasing, you agree to our
                                    <!-- modal -->
                                    <!-- <a href="#" data-toggle="modal" data-target="#terms_and_conditions_modal_js">T&C</a> -->
                                    <a href="#" @click="show_terms">T&C</a>
                                    and
                                    <!-- modal -->
                                    <!-- <a href="#" data-toggle="modal" data-target="#privacy_policy_modal">Privacy policy</a> -->
                                    <a href="#" v-b-modal.privacy_policy_modal>Privacy policy</a>
                                </b-row>
                                <b-row class="error-msg" style="display: none;">Please check that you agree with the Terms and Conditions</b-row>
                            </b-row>
                        </b-row>
                        <b-button class="e-btn cta-btn subscribe-btn">Click here to get your plan</b-button>
                    </b-col>
                    <b-col class="secure-payment">
                        <img src="https://ketocycle.diet/images/safecheckout.png" alt="Secure payment">
                    </b-col>
                </b-row>
            </b-container>
            <modal></modal>
        </b-row>
        
    </div>
</template>
<script>
import navbar from './PlanNavbar.vue';
import modal from './PlanModal.vue';

export default {
    components: {
        navbar,
        modal
    },
    methods: {
        show_terms() {
            // this.$refs['terms_and_conditions_modal_us'].show();
            this.$bvModal.show('terms_and_conditions_modal_us');
        }
    },
    mounted: function () {
        let divs = document.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i ++) {
            // console.log(divs[i].classList);
            divs[i].classList.remove('row');
            divs[i].classList.remove('col');
        }
    }
}
</script>
<style scoped>
.row {
    margin: auto;
    display: block;
}
@media only screen and (max-width: 900px) {
    .row {
        display: block !important;
    }
    #billing {
        padding: 0px;
    }
    .block-content {
        text-align: center;
    }
}
.per-week {
    position: relative !important;
}
.icon {
    width: 30px;
    height: 30px;
    color: rgba(68, 68, 68, 0.1);
    display: block;
    text-align: center;
    border-radius: 50%;
}
.icon.active {
    color: #ff3464;
}
.check-icon {
    color: #ff3464;
    margin-right: 10px;
}
.e-feature {
    padding: 0px;
    border: none;
}
.payment-disclaimer {
    padding: 15px 0px 15px 0px;
}

.list-group-item {
    font-size: 17px;
}
.navbar, .navbar>.container, .navbar>.container-fluid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
</style>