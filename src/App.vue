<template>
    <Wrapper>
        <Header/>
        <router-view @DateUpdateBonuses="createDateUpdateBonuses"></router-view>
        
    </Wrapper>
    <Modals v-bind:updateDate="dateBonuses"/>
    
</template>

<script>
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';

import Modals from '@/components/Modals';

export default {
  components: {
    Header, Wrapper, Modals
  },
  data(){
    return {
      dateBonuses: {days: 13, hours: 24, minutes: 60, seconds: 60, BonusesTime: false},
    }
  },
  methods: {
    createDateUpdateBonuses(data){
      this.dateBonuses = data
    }
  }
}
</script>
<style>
  :root {
      --gutter: 2rem;
      --gutter-page: 4rem;
      --gutter-shop: 2.5rem;
      --gutter-support: 2.5rem
    }

    @media all and (max-width: 991px) {
      :root {
        --gutter: 1.5rem;
        --gutter-page: 2rem
      }
    }

    @property --gradient-main-bonus-start {
      syntax: "<color>";
      initial-value: rgba(38, 49, 91, .35);
      inherits: false;
    }

    @property --gradient-main-bonus-end {
      syntax: "<color>";
      initial-value: rgba(50, 63, 109, .35);
      inherits: false;
    }

    .main-page {
      display: block;
      width: 100%;
      max-width: 121rem;
      margin: 0 auto
    }

    .main-page .main__bonuses {
      display: flex;
      margin-top: 2rem;
      gap: .9rem
    }

    .main-page .bonus-card {
      --gradient-main-bonus-start: rgba(38, 49, 91, .35);
      --gradient-main-bonus-end: rgba(50, 63, 109, .35);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 2.3rem;
      width: 100%;
      background-image: linear-gradient(117.48deg, var(--gradient-main-bonus-start), var(--gradient-main-bonus-end) 78.11%);
      border: .1rem solid rgba(77, 91, 143, .2);
      border-radius: 1.4rem;
      height: 8.4rem;
      cursor: pointer;
      text-decoration: none;
      overflow: hidden;
      transition: --gradient-main-bonus-start .2s ease-out 0s, --gradient-main-bonus-end .2s ease-out 0s
    }

    .main-page .bonus-card__title {
      display: flex;
      font-family: Gotham;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #fff;
      align-items: center
    }

    .main-page .bonus-card__title .icon {
      opacity: 0;
      margin-left: .6rem;
      transform: translate(-1rem);
      transition: transform .2s ease-out 0s, opacity .2s ease-out 0s
    }

    .main-page .bonus-card__sub-title {
      display: flex;
      flex-direction: column;
      color: #aab6e3;
      font-size: 1.3rem;
      line-height: 1.6rem;
      font-weight: 300
    }

    .main-page .bonus-card__img {
      position: absolute;
      background-size: 100%;
      background-repeat: no-repeat;
      transition: width .2s ease-out 0s, transform .2s ease-out 0s
    }

    .main-page .bonus-card__img_battlepass {
      right: -10.5rem;
      bottom: -14rem;
      height: 26.07rem;
      width: 33rem;
      background-image: url(../public/images/main-battlepass.10f2ccc0a7d878c5.webp)
    }

    .main-page .bonus-card__img_top {
      right: -5.5rem;
      bottom: -15rem;
      height: 26.57rem;
      width: 25.6rem;
      background-image: url(../public/images/main-top.11a867c560926f4e.webp)
    }

    .main-page .bonus-card__img_bonuses {
      right: -4.5rem;
      bottom: -13.5rem;
      height: 23.2rem;
      width: 25.6rem;
      background-image: url(../public/images/main-bonus.8ff48a1fe4b7a90d.webp)
    }

    @media all and (max-width: 991px) {
      .main-page .bonus-card__img {
        transform: scale(.8);
        margin-right: -20px
      }
    }

    .main-page .main__modes-block {
      margin-top: 2rem
    }

    .main-page .modes-cards {
      display: grid;
      align-content: flex-start;
      gap: 2rem;
      margin-top: 1.6rem;
      grid-template-columns: 28.5rem 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: "battleship . . . " "battleship . . . "
    }

    .main-page .main__head {
      display: flex;
      gap: 2rem;
      width: 100%;
      margin-top: 2rem
    }

    .main-page .main__bonus-deposit {
      position: relative;
      flex: 1 1 auto;
      height: 32rem;
      padding: 3rem;
      background: linear-gradient(29.09deg, #F76A7B 4.32%, #69224D 84.64%);
      border-radius: 2.5rem;
      font-family: Gotham;
      overflow: hidden
    }

    @media all and (min-width: 992px) {
      .main-page .main__bonus-deposit:hover .bonus-deposit__img {
        top: 12.9rem;
        width: 30.7rem;
        height: 28.3rem
      }

      .main-page .main__bonus-deposit:hover .bonus-deposit__away {
        width: 8.5rem;
        background-color: #ffbfb1
      }
    }

    .main-page .bonus-deposit__img {
      position: absolute;
      top: 13.9rem;
      right: -1.5rem;
      z-index: 1;
      width: 26.7rem;
      height: 24.3rem;
      transition: width .2s ease-out 0s, height .2s ease-out 0s, top .2s ease-out 0s
    }

    .main-page .bonus-deposit__btns {
      position: relative;
      z-index: 9;
      display: flex;
      margin-top: 1.3rem
    }

    .main-page .bonus-deposit__title {
      font-family: Gotham;
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 2.8rem;
      color: #fff
    }

    .main-page .bonus-deposit__copy {
      gap: .6rem;
      height: 4.4rem;
      padding: 0 1.4rem;
      margin-right: .8rem;
      background-color: #ffb6ac24;
      border: .1rem dashed rgba(255, 192, 138, .5);
      font-family: Gotham;
      color: #ffd89d;
      font-size: 1.6rem;
      font-weight: 500
    }

    .main-page .bonus-deposit__copy .icon {
      font-size: 1.5rem;
      margin-left: .2rem;
      opacity: .7;
      transition: opacity .2s ease-out 0s
    }

    .main-page .bonus-deposit__copy:hover .icon {
      opacity: 1
    }

    .main-page .bonus-deposit__away {
      width: 8rem;
      height: 4.4rem;
      padding: 0;
      background-color: #ffbfb1cc;
      border-radius: 1.4rem;
      transition: width .2s ease-out 0s, background-color .2s ease-out 0s
    }

    .main-page .bonus-deposit__away .icon {
      color: #292149;
      font-size: 2.4rem
    }

    .main-page .bonus-deposit__away:hover {
      background-color: #ffbfb1
    }

    .main-page .main__live-drop-block {
      margin-top: 4rem
    }

    .main-page .main__live-drops {
      display: flex;
      overflow-x: clip;
      gap: .8rem;
      height: 8.5rem
    }

    .main-page .main__live-drop {
      min-width: 19.5rem;
      height: 6.5rem;
      background-color: #26315b;
      border-radius: 1.2rem
    }

    @media all and (min-width: 991px) {
      .main-page .bonus-card:hover {
        --gradient-main-bonus-start: rgba(38, 49, 91, .1);
        --gradient-main-bonus-end: rgba(50, 63, 109, .1)
      }

      .main-page .bonus-card:hover .bonus-card__title .icon {
        opacity: 1;
        transform: translate(0)
      }

      .main-page .bonus-card:hover .bonus-card__img {
        transform: scale(.9)
      }
    }

    @media all and (max-width: 991px) {
      .main-page {
        padding: 0 var(--gutter)
      }

      .main-page .main__bonus-deposit {
        height: 27.7rem
      }

      .main-page .bonus-deposit__title {
        font-size: 22px;
        line-height: 27px
      }

      .main-page .bonus-deposit__copy {
        height: 4.2rem;
        font-size: 15px;
        line-height: 18px
      }

      .main-page .bonus-deposit__away {
        width: 6.7rem;
        height: 4.2rem
      }

      .main-page .bonus-deposit__img {
        width: 22rem;
        height: 19.8rem
      }

      .main-page .bonus-card__title {
        position: relative;
        z-index: 1;
        font-size: 1.4rem
      }

      .main-page .bonus-card__sub-title {
        width: 55%
      }

      .main-page .modes-cards__main-card {
        max-width: 28.1rem;
        min-height: 57.4rem
      }

      .main-page .modes-cards {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "battleship battleship" ". ." ". ."
      }

      .main-page .main__live-drops {
        width: 100vw;
        margin-top: 1.5rem
      }

      .main-page .main__head {
        margin-top: 1.6rem
      }

      .main-page .main__bonuses {
        margin-top: .8rem
      }

      .main-page .main__modes-block {
        margin-top: 1.5rem
      }

      .main-page .main__live-drop-block {
        margin-top: 2.6rem
      }
    }

    @media all and (max-width: 768px) {
      .main-page .main__head {
        flex-direction: column;
        gap: .7rem;
        margin-top: 0
      }

      .main-page .main__bonus-deposit {
        border-radius: 1.4rem;
        height: 8.2rem;
        padding: 1.5rem 2rem
      }

      .main-page .bonus-deposit__title {
        font-size: 1.4rem;
        line-height: 1.6rem
      }

      .main-page .bonus-deposit__btns {
        margin-top: .8rem
      }

      .main-page .bonus-deposit__copy {
        width: 6.7rem;
        height: 2.8rem;
        margin-right: .6rem;
        font-size: 1.2rem
      }

      .main-page .bonus-deposit__copy .icon {
        font-size: 1.4rem
      }

      .main-page .bonus-deposit__away {
        width: 5.8rem;
        height: 2.8rem;
        border-radius: 1rem
      }

      .main-page .bonus-deposit__away .icon {
        font-size: 2rem
      }

      .main-page .bonus-deposit__img {
        right: -.3rem;
        bottom: 0;
        top: .3rem;
        width: 13rem;
        height: 11.8rem
      }

      .main-page .bonus-card {
        padding: 1.2rem .8rem 1.2rem 1.4rem;
        height: 12.6rem;
        justify-content: start
      }

      .main-page .bonus-card__sub-title {
        font-size: 1.1rem;
        line-height: 1.2rem;
        width: 100%
      }

      .main-page .modes-cards {
        gap: .8rem;
        margin-top: 0
      }

      .main-page .main__live-drop-block {
        margin-top: 1.4rem
      }

      .main-page .main__live-drops {
        margin-top: 0;
        column-gap: .3rem;
        height: 11rem;
        width: auto
      }

      .main-page .main__live-drop {
        min-width: 8.4rem;
        height: 9rem
      }
    }
    :root {
      --gutter: 2rem;
      --gutter-page: 4rem;
      --gutter-shop: 2.5rem;
      --gutter-support: 2.5rem
    }

    @media all and (max-width: 991px) {
      :root {
        --gutter: 1.5rem;
        --gutter-page: 2rem
      }
    }

    .main-banner {
      position: relative;
      display: block;
      height: 32rem;
      width: 100%;
      max-width: 89.5rem;
      border-radius: 2.5rem;
      font-family: Gotham
    }

    .main-banner .nav {
      position: absolute;
      right: 1.2rem;
      bottom: 1.3rem;
      z-index: 1;
      display: flex
    }

    .main-banner .nav__button {
      font-size: 3.3rem;
      color: #fff;
      opacity: .6;
      height: auto;
      border: none;
      padding: 0;
      transition: opacity .2s ease-out 0s
    }

    .main-banner .nav__button:hover {
      opacity: .9
    }

    .main-banner .nav__button_prev {
      transform: rotate(180deg);
      margin-right: .7rem
    }

    .main-banner .swiper {
      overflow: hidden;
      border-radius: 2.5rem;
      height: 100%
    }

    .main-banner .swiper .swiper-slide {
      overflow: hidden
    }

    .main-banner .swiper .swiper-pagination-bullet {
      display: inline-block;
      background: #FFF;
      border-radius: .3rem;
      height: .6rem;
      width: .6rem;
      opacity: .5;
      margin-right: .5rem;
      cursor: pointer;
      transition: width .2s ease-out 0s, opacity .2s ease-out 0s
    }

    .main-banner .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
      opacity: 1;
      width: 1.6rem
    }

    @media all and (min-width: 992px) {
      .main-banner .swiper .swiper-pagination {
        position: absolute;
        top: 4.3rem;
        left: 4.1rem;
        z-index: 2
      }
    }

    @media all and (max-width: 991px) {
      .main-banner {
        max-width: calc(100% - 26rem);
        height: 27.7rem
      }

      .main-banner .swiper .swiper-pagination {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        z-index: 2
      }
    }

    @media all and (max-width: 768px) {
      .main-banner {
        max-width: 100%;
        height: 13.1rem
      }

      .main-banner .swiper {
        border-radius: 1.4rem
      }
    }
    :root {
      --gutter: 2rem;
      --gutter-page: 4rem;
      --gutter-shop: 2.5rem;
      --gutter-support: 2.5rem
    }

    @media all and (max-width: 991px) {
      :root {
        --gutter: 1.5rem;
        --gutter-page: 2rem
      }
    }

    .main-block {
      display: block
    }

    .main-block .main__block-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: 2.5rem;
      color: #7f8bad;
      font-size: 1.4rem;
      text-transform: uppercase;
      font-family: Gotham;
      font-weight: 700;
      margin-bottom: 1.5rem
    }

    .main-block .main__block-title .icon {
      font-size: 2.8rem
    }

    @media all and (max-width: 991px) {
      .main-block .main__block-title {
        margin: 0 0 1.1rem 3.2rem
      }
    }

    @media all and (max-width: 768px) {
      .main-block .main__block-title {
        font-size: 1.2rem;
        margin: 0 0 1.1rem 1.7rem
      }

      .main-block .main__block-title .icon {
        font-size: 2.1rem
      }
    }
      
    :root {
        --gutter: 2rem;
        --gutter-page: 4rem;
        --gutter-shop: 2.5rem;
        --gutter-support: 2.5rem
    }

    @media all and (max-width: 991px) {
        :root {
            --gutter: 1.5rem;
            --gutter-page: 2rem
        }
    }

    @property --gradient-main-usual-card-start {
        syntax: "<color>";
        initial-value: rgba(26, 36, 72, .7);
        inherits: false;
    }

    @property --gradient-main-usual-card-end {
        syntax: "<color>";
        initial-value: rgba(45, 60, 114, .7);
        inherits: false;
    }

    .mode-card.mode-card_support {
        --gradient-main-usual-card-start: rgba(26, 36, 72, .7);
        --gradient-main-usual-card-end: rgba(45, 60, 114, .7);
        border: .1rem solid rgba(77, 91, 143, .2);
        background: linear-gradient(160.16deg, var(--gradient-main-usual-card-start) 13.26%, var(--gradient-main-usual-card-end) 103.43%);
        transition: --gradient-main-usual-card-start .2s ease-out 0s, --gradient-main-usual-card-end .2s ease-out 0s
    }

    .mode-card.mode-card_support:hover:not(.mode-card_support) {
        --gradient-main-usual-card-start: #5E98F0;
        --gradient-main-usual-card-end: #1C2E6C
    }

    .mode-card.mode-card_support:hover:not(.mode-card_support) .mode-card__img {
        width: 110%
    }

    .mode-card.mode-card_support:before,
    .mode-card.mode-card_support:after {
        content: "";
        position: absolute;
        display: block;
        margin: auto;
        border-radius: 50%;
        border: .1rem solid rgba(199, 214, 255, .06);
        transition: transform .2s ease-out 0s
    }

    .mode-card.mode-card_support:before {
        inset: -.3rem;
        width: 29.2rem;
        height: 29.2rem
    }

    .mode-card.mode-card_support:after {
        inset: 0;
        width: 15.2rem;
        height: 15.2rem
    }

    .mode-card.mode-card_support:hover:before,
    .mode-card.mode-card_support:hover:after,
    .mode-card.mode-card_support:hover .mode-card__img {
        transform: scale(1.1)
    }

    .mode-card.mode-card_support:hover .icon_circle-arrow-right {
        opacity: 1;
        margin-left: 1rem
    }

    .mode-card.mode-card_support .mode-card__title {
        font-weight: 300;
        letter-spacing: .1rem;
        text-transform: none
    }

    .mode-card.mode-card_support .mode-card__img {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 18.4rem;
        height: 13.2rem;
        background-image: url(../public/images/card-mode-support.0ed732a9fa449609.png);
        background-size: 100%;
        background-repeat: no-repeat;
        transition: transform .2s ease-out 0s
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
        background: rgba(107, 149, 255, .4);
        filter: blur(42px)
    }

    @media all and (max-width: 768px) {
        .mode-card.mode-card_support .mode-card__img {
            width: 10rem;
            height: 7rem
        }

        .mode-card.mode-card_support .mode-card__title {
            letter-spacing: 0;
            line-height: 0
        }

        .mode-card.mode-card_support:after {
            inset: 0;
            width: 9.2rem;
            height: 9.2rem
        }

        .mode-card.mode-card_support:before {
            width: 14.2rem;
            height: 14.2rem
        }
    }
    :root {
      --gutter: 2rem;
      --gutter-page: 4rem;
      --gutter-shop: 2.5rem;
      --gutter-support: 2.5rem
    }

    @media all and (max-width: 991px) {
      :root {
        --gutter: 1.5rem;
        --gutter-page: 2rem
      }
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) {
      grid-area: battleship;
      align-items: center;
      width: 28.5rem;
      min-height: 70rem;
      padding-bottom: 0;
      background: linear-gradient(359.19deg, #3D50B3 6.98%, #121F4A 107.7%)
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar):before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 3;
      width: 28.5rem;
      height: 12.7rem;
      background-image: url(../public/images/smoke.9f8f8f2c412f73da.webp);
      background-size: 100%;
      background-repeat: no-repeat
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar):hover .mode-card__bg {
      opacity: .5
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar):hover .mode-card__logo {
      transform: scale(1.1)
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__img {
      display: none
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__head {
      align-self: flex-start
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__bg {
      position: absolute;
      top: -.6rem;
      left: -8.3rem;
      z-index: 1;
      width: 45.1rem;
      height: 78rem;
      background-image: url(../public/images/bg.3773b89aa3bc76b0.webp);
      background-size: 100%;
      background-repeat: no-repeat;
      transition: opacity .2s ease-out 0s
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__logo {
      z-index: 2;
      width: 21.4rem;
      height: 19.2rem;
      background-image: url(../public/images/main-mini-card.51b944cb8e3e6776.webp);
      background-size: 100%;
      background-repeat: no-repeat;
      transition: transform .2s ease-out 0s
    }

    .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__gabe {
      z-index: 2;
      width: 24.9rem;
      height: 38rem;
      margin-top: auto;
      background-image: url(../public/images/gabe.a32287ceceb3764c.webp);
      background-size: 100%;
      background-repeat: no-repeat
    }

    @media all and (max-width: 991px) {
      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) {
        width: 100%;
        min-height: auto;
        padding: 1.4rem 1.1rem 2rem 2rem
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar):before {
        content: none
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__gabe {
        position: absolute;
        right: 3.2rem;
        transform: scaleX(-1)
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__logo {
        display: none
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__bg {
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-position-y: 50%
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__head {
        position: static;
        justify-content: flex-end
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__title-wrap {
        position: absolute;
        left: 2rem;
        bottom: 1.9rem;
        z-index: 2
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__title {
        position: relative;
        z-index: 2;
        font-size: 2rem;
        margin-bottom: .7rem
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__title .icon {
        margin-left: .7rem
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__new-badge {
        left: 2.5rem
      }
    }

    @media all and (max-width: 768px) {
      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) {
        height: 11.1rem
      }

      .mode-card.mode-card_battleship:not(.mode-card_mini, .mode-card_toolbar) .mode-card__gabe {
        top: 0;
        right: 3.2rem;
        width: 10.9rem;
        height: 100%
      }
    }
    [_ngcontent-serverApp-c138]:root {
      --gutter: 2rem;
      --gutter-page: 4rem;
      --gutter-shop: 2.5rem;
      --gutter-support: 2.5rem
    }
</style>
