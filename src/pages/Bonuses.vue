<template>
  <div class="container" @mousemove="mouseMove">
    <router-outlet></router-outlet
    ><bonuses-home _nghost-serverapp-c154="" class="ng-star-inserted">
      <div _ngcontent-serverapp-c154="" class="bonuses-page">
        <daily-rewards-rewards-list
          _ngcontent-serverapp-c154=""
          class="bonuses-page__daily-rewards daily-rewards"
          ><daily-rewards-user-status
            class="daily-rewards__status ng-star-inserted daily-rewards__status_locked"
          >
            <div class="daily-rewards__record record">
              <img
                src="../../public/images/icon/padlock.png"
                class="ng-star-inserted icon_bonus_big"
              />
              <div class="record__subtitle ng-star-inserted">Access closed</div>
            </div>
            <button type="button" class="button button_block ng-star-inserted" @click="$store.state.modal = true, $store.state.bonus_gabe = true">
              How does it work?
            </button> </daily-rewards-user-status
          ><daily-rewards-user-progress
            class="daily-rewards__user-progress ng-star-inserted"
          >
            <div class="daily-rewards__slider slider slider_rewards-slider">
              <swiper
                class="slider__content swiper swiper-initialized swiper-horizontal"
              >
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide ng-star-inserted swiper-slide-active"
                    v-for="(box, index) in BoxBonuses"
                  >
                    <daily-rewards-reward
                      class="daily-rewards__reward reward ng-star-inserted"
                    >
                      <div class="reward__picture">
                        <img
                          class="image ng-star-inserted"
                          :src="getPhoto(box.image)"
                          :alt="box.title"
                        />
                      </div>

                      <div class="reward__timer ng-star-inserted">{{ index+1 }} day</div>
                    </daily-rewards-reward>
                  </div>
                </div>
              </swiper>
            </div>
            <div
              class="daily-rewards__progress progress progress_daily-rewards"
            >
              <div class="progress__bar" style="width: 0%"></div>
            </div>
            <div
              class="daily-rewards__slider-scroll swiper-scrollbar-horizontal"
              
            >
              <div
                @mousedown="DownScroll"
                @mouseup = "ClickScroll"
                class="swiper-scrollbar-drag"
                :style="{'transform': 'translate3d('+String(ScrollX)+'px, 0px, 0px)', 'width': '90px'}"
              ></div>
            </div></daily-rewards-user-progress
        ></daily-rewards-rewards-list>
        <div _ngcontent-serverapp-c154="" class="bonuses-page__bonus-variants">
          <promocodes-container
            _ngcontent-serverapp-c154=""
            class="bonuses-page__promocodes"
            _nghost-serverapp-c147=""
          >
            <div
              _ngcontent-serverapp-c147=""
              class="bonuses-page__head ng-star-inserted"
            >
              <div _ngcontent-serverapp-c147="" class="bonuses-page__title">
                <img
                  src="../../public/images/icon/coupon.png"
                  class="icon_bonus_small"
                />Promo code<button
                  _ngcontent-serverapp-c147=""
                  type="button"
                  class="button button_link button_toggle"
                  @click="$store.state.modal=true, $store.state.what_promo = true"
                >
                  What are promo codes?
                </button>
              </div>
              <div _ngcontent-serverapp-c147="" class="bonuses-page__subtitle">
                If you know secret promocode you can apply it and get a bonus on
                your balance!
              </div>
            </div>
            <div
              _ngcontent-serverapp-c147=""
              class="form form_promocode-bonus ng-star-inserted"
            >
              <div
                _ngcontent-serverapp-c147=""
                class="form__group form__group_inline"
              >
                <input
                  _ngcontent-serverapp-c147=""
                  type="text"
                  name="code"
                  placeholder="Enter your promocode"
                  class="form__control ng-untouched ng-pristine ng-valid"
                /><button
                  _ngcontent-serverapp-c147=""
                  type="button"
                  class="button"
                  disabled=""
                >
                  Save
                </button>
              </div>
            </div>

            <div
              _ngcontent-serverapp-c147=""
              class="bonuses-page__conditions conditions ng-star-inserted"
            >
              <div _ngcontent-serverapp-c147="" class="conditions__title">
                Conditions
              </div>
              <div _ngcontent-serverapp-c147="" class="conditions__list">
                <div _ngcontent-serverapp-c147="" class="conditions__condition">
                  <div
                    _ngcontent-serverapp-c147=""
                    class="conditions__checkbox ng-star-inserted"
                  ></div>

                  <div _ngcontent-serverapp-c147="" class="conditions__label">
                    You must have deposited $0.25 or greater
                  </div>
                </div>
                <div _ngcontent-serverapp-c147="" class="conditions__condition">
                  <div
                    _ngcontent-serverapp-c147=""
                    class="conditions__checkbox ng-star-inserted"
                  ></div>

                  <div _ngcontent-serverapp-c147="" class="conditions__label">
                    Steam profile must be set to public
                  </div>
                </div>
                <div _ngcontent-serverapp-c147="" class="conditions__condition">
                  <div
                    _ngcontent-serverapp-c147=""
                    class="conditions__checkbox ng-star-inserted"
                  ></div>

                  <div _ngcontent-serverapp-c147="" class="conditions__label">
                    Steam level must be 2 or greater
                  </div>
                </div>
                <div _ngcontent-serverapp-c147="" class="conditions__condition">
                  <div
                    _ngcontent-serverapp-c147=""
                    class="conditions__checkbox ng-star-inserted"
                  ></div>

                  <div _ngcontent-serverapp-c147="" class="conditions__label">
                    You must have played 30 hours in CS:GO
                  </div>
                </div>
              </div>
              <button
                _ngcontent-serverapp-c147=""
                type="button"
                class="button"
                disabled=""
              >
                <span _ngcontent-serverapp-c147="" class="button__text"
                  >Check</span
                >
                <img src="../../public/images/arrow-circle.png" class="icon">
              </button>
            </div> </promocodes-container
          ><nickname-bonus-container
            _ngcontent-serverapp-c154=""
            class="bonuses-page__nickname"
          >
            <div class="bonuses-page__head ng-star-inserted">
              <div class="bonuses-page__title">
                <img
                  src="../../public/images/icon/bonus.png"
                  class="icon_bonus_small"
                />Bonuses for the nickname
                <!-- <i
                  tippy="Add FAIL to your STEAM nickname and get up to 15% extra bonus on every deposit!"
                  class="icon icon_info-circle-bold icon_informer"
                ></i> -->
              </div>
              <div class="bonuses-page__subtitle">
                Depends on the time during which our name "FAIL" is in your
                Steam nickname
              </div>
            </div>
            <div class="bonuses-page__bonuses bonuses ng-star-inserted">
              <div class="bonuses__bonus ng-star-inserted">
                <div class="bonuses__reward">10%</div>
                <div class="bonuses__required-days">1 day</div>
              </div>
              <div class="bonuses__bonus ng-star-inserted">
                <div class="bonuses__reward">11%</div>
                <div class="bonuses__required-days">1 week</div>
              </div>
              <div class="bonuses__bonus ng-star-inserted">
                <div class="bonuses__reward">12%</div>
                <div class="bonuses__required-days">2 weeks</div>
              </div>
              <div class="bonuses__bonus ng-star-inserted">
                <div class="bonuses__reward">13%</div>
                <div class="bonuses__required-days">3 weeks</div>
              </div>
              <div class="bonuses__bonus ng-star-inserted">
                <div class="bonuses__reward">14%</div>
                <div class="bonuses__required-days">4 weeks</div>
              </div>
              <div class="bonuses__bonus ng-star-inserted">
                <div class="bonuses__reward">15%</div>
                <div class="bonuses__required-days">5 weeks</div>
              </div>
            </div>

            <div
              class="progress progress_md progress_nickname-bonus ng-star-inserted"
            >
              <div class="progress__bar"></div>
            </div>
          </nickname-bonus-container>
        </div>
        <quiz-container
          _ngcontent-serverapp-c154=""
          class="bonuses-page__quiz quiz"
          ><quiz-head class="quiz__head ng-star-inserted"
            ><button
              type="button"
              trigger="click"
              variation="quiz"
              maxwidth="560px"
              placement="bottom"
              class="quiz__tooltip-toggle button button_transparent button_xs"
              aria-expanded="false"
            >
              <img src="../../public/images/icon/question.png" class="icon" />
            </button>
            <div class="quiz__head-content">
              <img
                src="../../public/images/icon/chat1.png"
                class="icon_bonus_big"
              />
              <div class="quiz__title">Угадай скин по описанию</div>
              <div class="quiz__timer">Ended</div>
            </div>
            <div class="quiz__top">
              <img src="../../public/images/icon/top.png" class="icon" />
              <div class="quiz__top-slider slider slider_quiz-top">
                <div class="slider__content ng-star-inserted">
                  <a
                    class="slider__user picture ng-star-inserted"
                    href="https://csfail.pro/en/profile/2243244"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/c66ed0d8c9dad346431e4e275109dd41be00ed3a_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-blue-cian ng-star-inserted"
                    href="https://csfail.pro/en/profile/81215"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/3152ab2aa2f0bd47a22b4ed2a69ba83161353116_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-gradient-gold ng-star-inserted"
                    href="https://csfail.pro/en/profile/109792"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/70a39b658bdd17718777a8dc3946133cbbf28f45_medium.jpg" /></a
                  ><a
                    class="slider__user picture ng-star-inserted"
                    href="https://csfail.pro/en/profile/1868608"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/449e429f8b693487a4f38d322c370d6645b241c8_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-lightgreen ng-star-inserted"
                    href="https://csfail.pro/en/profile/1477745"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/727600073b2f3ff69e3b2fa977302792710233a1_medium.jpg" /></a
                  ><a
                    class="slider__user picture ng-star-inserted"
                    href="https://csfail.pro/en/profile/559371"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/7f9ca6f49e6c5c332328ed404b8e6ad821753b2b_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-gradient-gold ng-star-inserted"
                    href="https://csfail.pro/en/profile/466929"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/027d5085a4cdd54ac747eedc77f40ae6bb15428a_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-violet ng-star-inserted"
                    href="https://csfail.pro/en/profile/1559192"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/49cdda4b4420af6fb718030b1a2140d43540ecb9_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-violet ng-star-inserted"
                    href="https://csfail.pro/en/profile/47341"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/0e189e10805ce8ff89ded771116dc4c498044808_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-blue-green ng-star-inserted"
                    href="https://csfail.pro/en/profile/198140"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/0e6ee07090cfef6fe7187a322ecd0ea733665d47_medium.jpg" /></a
                  ><a
                    class="slider__user picture ng-star-inserted"
                    href="https://csfail.pro/en/profile/2116869"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/3e80b2445b1b29a7266a267e838f7f4a8d936324_medium.jpg" /></a
                  ><a
                    class="slider__user picture ng-star-inserted"
                    href="https://csfail.pro/en/profile/325167"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/fdb423ea4e8e5d339c26880ec49fed6e15d57a7f_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-violet ng-star-inserted"
                    href="https://csfail.pro/en/profile/778283"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/507d40390dd08af477c1d472c05914922913c241_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-gradient-gold ng-star-inserted"
                    href="https://csfail.pro/en/profile/1954590"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/0b9a19f8524277b710fb7adc39fb948e7c961f8f_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-pink-yellow ng-star-inserted"
                    href="https://csfail.pro/en/profile/328861"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/70e164c749f061a24a52ca2c34f725691b8276ae_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-lightblue-violet ng-star-inserted"
                    href="https://csfail.pro/en/profile/1290881"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/910434162b51548daf6528e5c872d938cab34d84_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-lightgreen ng-star-inserted"
                    href="https://csfail.pro/en/profile/785130"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/83861750b2a5c72fa14247b6f7b4502ca9eac909_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-gradient-gold ng-star-inserted"
                    href="https://csfail.pro/en/profile/131754"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/09f3a3a244e79596c31f0ec0216f396fed0cb1a6_medium.jpg" /></a
                  ><a
                    class="slider__user picture ng-star-inserted"
                    href="https://csfail.pro/en/profile/964057"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/e4874877642b92fe6097e3d17c68fb25a9366bbf_medium.jpg" /></a
                  ><a
                    class="slider__user picture ng-star-inserted"
                    href="https://csfail.pro/en/profile/32673"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/449e429f8b693487a4f38d322c370d6645b241c8_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-gradient-gold ng-star-inserted"
                    href="https://csfail.pro/en/profile/460245"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/449e429f8b693487a4f38d322c370d6645b241c8_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-lightgreen ng-star-inserted"
                    href="https://csfail.pro/en/profile/1348322"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/77cdd04351421abcf56cd8603ba3bdac27e33a50_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-gradient-gold ng-star-inserted"
                    href="https://csfail.pro/en/profile/1888448"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/e7d42b7441d9afb1ec84c3654bb076ae113e1c58_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-lightgreen ng-star-inserted"
                    href="https://csfail.pro/en/profile/1159103"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/9f4d3f16d77e6490c2c5910688dbff46d588c688_medium.jpg" /></a
                  ><a
                    class="slider__user picture picture_color-lightblue-violet ng-star-inserted"
                    href="https://csfail.pro/en/profile/445790"
                    ><img
                      class="image ng-star-inserted"
                      src="../../public/images/57562add01a4ed6e516efe225d9b7a12f9bfe86c_medium.jpg"
                  /></a>
                </div>
              </div>
            </div> </quiz-head
          ><quiz-game class="ng-star-inserted"
            ><button
              type="button"
              class="quiz__action button button_block ng-star-inserted"
              disabled=""
            >
              Quiz is ended
            </button>
            <div class="quiz__difficulties ng-star-inserted">
              <div class="quiz__difficulty quiz__difficulty_easy">Easy 4</div>
              <div class="quiz__difficulty quiz__difficulty_medium">
                Medium 2
              </div>
              <div class="quiz__difficulty quiz__difficulty_hard">Hard 1</div>
            </div>
          </quiz-game></quiz-container
        >
      </div>
    </bonuses-home>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";

export default {
  components: {
    Footer
    
  },
  data(){
    return {
        
        BoxBonuses: [
            {"image": "db8d37a1-27f3-4494-b586-83dc542c31e0-6304c38e10202.png", "title": "Random pistols"},
            {"image": "f67102b2-b1e2-403a-a803-26c29f4bfee2-6304c38e0b373.png", "title": "Small sticker capsule"},
            {"image": "ed78199f-0a2a-4817-b3e4-b2eecee15229-6304dbb447aa0.png", "title": "Mil-Spec"},
            {"image": "cf416036-a514-4395-8f0c-fbf9c1dc7986-625ae7bbf319c.png", "title": "Lady Dimitrescu"},
            {"image": "9e181ae9-a05a-4abf-931d-cd1c9b8145d3-63c6bd4b622a9.png", "title": "Bonus 1$"},
            {"image": "4095cb42-8e9b-4a20-b3b7-44cdb406ea56-6387adf2eaadd.png", "title": "Зимние дары"},
            {"image": "1532e8aa-38f5-4cda-b200-daa330b320f8-6304c38e0592c.png", "title": "50 to 50 chance"},
            {"image": "a236f6ca-5e23-4da1-94a7-848834d079ae-633eb50916394.png", "title": "Bronze case"},
            {"image": "e13de038-1ae1-4bac-8828-b71cc33bfe76-63c6bcbb69f16.png", "title": "Bonus 2$"},
            {"image": "d590c923-0e24-404f-8b04-2f66b2d8a23e-630fbdc02be05.png", "title": "No Pain"},
            {"image": "91c341ae-a6b8-4059-a7d6-105814d23c2a-6304c38e259e2.png", "title": "Autumn Stickers"},
            {"image": "5e7c1568-5d4d-430e-bd4f-c6b514e00c31-6304c38e21520.png", "title": "Big case"},
            {"image": "d1718a06-5290-44ff-a452-80c69f8d1514-633458107a2bf.png", "title": "Forbidden quality category"},
            {"image": "6cc836f9-4f66-42a6-b51d-ecc280bc6fdd-6387adda2f1fd.png", "title": "Blue case"}
        ],
        clickDown: false,
        StartX: 0,
        ScrollX: 0
    }
  },
  methods: {
    getPhoto(images) {
      return require('../../public/images/'+images)
    },
    onItemChanged() {
        console.log('asd')
    },
    DownScroll(event) {
        this.StartX = event.clientX
        this.clickDown = true
    },
    ClickScroll() {
        this.clickDown = false
    },
    mouseMove(event) {
        if(this.clickDown){
            this.ScrollX = event.clientX - this.StartX
        }
    }
  },
  mounted(){
    this.$emit('DateUpdateBonuses', {days: 11, hours: 24, minutes: 60, seconds: 60, BonusesTime: true})
  }
};
</script>

<style scoped>
bonuses-home{width:100%}
:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}
@media all and (max-width: 991px) {
  :root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}
@property --gradient-main-usual-card-start {
  syntax: "<color>";
  initial-value: rgba(26, 36, 72, 0.7);
  inherits: false;
}
@property --gradient-main-usual-card-end {
  syntax: "<color>";
  initial-value: rgba(45, 60, 114, 0.7);
  inherits: false;
}
.mode-card.mode-card_support {
  --gradient-main-usual-card-start: rgba(26, 36, 72, 0.7);
  --gradient-main-usual-card-end: rgba(45, 60, 114, 0.7);
  border: 0.1rem solid rgba(77, 91, 143, 0.2);
  background: linear-gradient(
    160.16deg,
    var(--gradient-main-usual-card-start) 13.26%,
    var(--gradient-main-usual-card-end) 103.43%
  );
  transition: --gradient-main-usual-card-start 0.2s ease-out 0s,
    --gradient-main-usual-card-end 0.2s ease-out 0s;
}
.mode-card.mode-card_support:hover:not(.mode-card_support) {
  --gradient-main-usual-card-start: #5e98f0;
  --gradient-main-usual-card-end: #1c2e6c;
}
.mode-card.mode-card_support:hover:not(.mode-card_support) .mode-card__img {
  width: 110%;
}
.mode-card.mode-card_support:before,
.mode-card.mode-card_support:after {
  content: "";
  position: absolute;
  display: block;
  margin: auto;
  border-radius: 50%;
  border: 0.1rem solid rgba(199, 214, 255, 0.06);
  transition: transform 0.2s ease-out 0s;
}
.mode-card.mode-card_support:before {
  inset: -0.3rem;
  width: 29.2rem;
  height: 29.2rem;
}
.mode-card.mode-card_support:after {
  inset: 0;
  width: 15.2rem;
  height: 15.2rem;
}
.mode-card.mode-card_support:hover:before,
.mode-card.mode-card_support:hover:after,
.mode-card.mode-card_support:hover .mode-card__img {
  transform: scale(1.1);
}
.mode-card.mode-card_support:hover .icon_circle-arrow-right {
  opacity: 1;
  margin-left: 1rem;
}
.mode-card.mode-card_support .mode-card__title {
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-transform: none;
}
.mode-card.mode-card_support .mode-card__img {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 18.4rem;
  height: 13.2rem;
  background-image: url(../../public/images/card-mode-support.0ed732a9fa449609.png);
  background-size: 100%;
  background-repeat: no-repeat;
  transition: transform 0.2s ease-out 0s;
}
.mode-card.mode-card_support .mode-card__img:before {
  content: "";
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 50%;
  background: rgba(107, 149, 255, 0.4);
  filter: blur(42px);
}
@media all and (max-width: 768px) {
  .mode-card.mode-card_support .mode-card__img {
    width: 10rem;
    height: 7rem;
  }
  .mode-card.mode-card_support .mode-card__title {
    letter-spacing: 0;
    line-height: 0;
  }
  .mode-card.mode-card_support:after {
    inset: 0;
    width: 9.2rem;
    height: 9.2rem;
  }
  .mode-card.mode-card_support:before {
    width: 14.2rem;
    height: 14.2rem;
  }
}
</style>