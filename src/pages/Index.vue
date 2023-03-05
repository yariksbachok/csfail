<template>
  <div class="container">
    <router-outlet></router-outlet
    ><main-home class="main-page ng-star-inserted">
      <div class="main__head ng-star-inserted">
        <main-slider-banners class="main-banner" ref="MainBanner">
          <swiper
            class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden ng-star-inserted"
          >
            <!----><!---->
            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal ng-star-inserted">
              <span v-for="slide in sliders" class="swiper-pagination-bullet" :class="{'swiper-pagination-bullet-active': slide.activate}"></span>
            </div>
            <!---->
            <div
              class="swiper-wrapper"
              v-bind:style="{
                'transition-duration': '0ms',
                'transform': 'translate3d('+String(SlidePx)+'px, 0px, 0px)'}"
            >
              <!----><!---->
              <div v-for="slide in sliders"
                :data-swiper-slide-index="slide.num"
                class="swiper-slide ng-star-inserted swiper-slide"
                :style="{'width': String(WidthSlide)+'px'}"
              >
                <!----><main-slider-banner
                  _nghost-serverapp-c136=""
                  class="ng-star-inserted"
                >
                  <div _ngcontent-serverapp-c136="" class="slide">
                    <div _ngcontent-serverapp-c136="" class="slide__content">
                      <div _ngcontent-serverapp-c136="" class="slide__title">
                        {{ slide.title }}
                      </div>
                      <div _ngcontent-serverapp-c136="" class="slide__subtitle">
                        {{ slide.descript }}
                      </div>
                      <button v-if="slide.LinkBtn" _ngcontent-serverapp-c136="" type="button" class="slide__button button ng-star-inserted"><img src="../../public/images/icon/down-arrow.png" class="icon"></button>
                      <!---->
                    </div>
                    <div
                      _ngcontent-serverapp-c136=""
                      class="slide__img"
                      v-bind:style="{'background-image': 'url('+slide.img+')'}"
                    ></div>
                  </div> </main-slider-banner
                ><!----><!----><!---->
              </div>

              <!----><!---->
              <!----><!---->
            </div>
            <!----> </swiper
          ><!---->
          <div class="main-banner__nav nav ng-star-inserted">
            <button
              type="button"
              class="nav__button nav__button_prev button button_block"
              @click="BackSlide"
            >
              <img
                src="../../public/images/icon/right-arrow-small.png"
                class="icon"
              /></button
            ><button
              type="button"
              class="nav__button nav__button_next button button_block"
              @click="NextSlide"
            >
              <img
                src="../../public/images/icon/right-arrow-small.png"
                class="icon"
              />
            </button>
          </div>
          <!----><!---->
        </main-slider-banners>
        <div class="main__bonus-deposit bonus-deposit">
          <div class="bonus-deposit__title">Deposit bonus</div>
          <div class="bonus-deposit__btns">
            <button class="bonus-deposit__copy button">
              +35%
              <img src="../../public/images/icon/copy.png" class="icon" /></button
            ><a
              routerlink="/payment"
              class="bonus-deposit__away button"
              href="https://csfail.pro/en/payment"
              ><img src="../../public/images/icon/right-arrow.png" class="icon"
            /></a>
          </div>
          <img
            src="../../public/images/main-bonus-deposit.webp"
            alt="On deposit bonus"
            class="bonus-deposit__img"
          />
        </div>
      </div>
      <div class="main__bonuses ng-star-inserted">
        <a
          routerlink="/top"
          class="link bonus-card"
          href="https://csfail.pro/en/top"
        >
          <div class="bonus-card__title">
            Top
            <img
              src="../../public/images/icon/right-arrow-small.png"
              class="icon"
            />
          </div>
          <div class="bonus-card__sub-title">$2300 draw every week</div>
          <div class="bonus-card__img bonus-card__img_top"></div> </a
        ><a
          routerlink="/bonuses"
          class="link bonus-card"
          href="https://csfail.pro/en/bonuses"
        >
          <div class="bonus-card__title ng-star-inserted">
            Daily bonuses
            <img
              src="../../public/images/icon/right-arrow-small.png"
              class="icon"
            />
          </div>
          <!----><!---->
          <div class="bonus-card__sub-title">Free rewards</div>
          <div class="bonus-card__img bonus-card__img_bonuses"></div> </a
        ><a
          routerlink="/season-pass"
          class="link bonus-card"
          href="https://csfail.pro/en/season-pass"
        >
          <div class="bonus-card__title">
            Battlepass
            <img
              src="../../public/images/icon/right-arrow-small.png"
              class="icon"
            />
          </div>
          <div class="bonus-card__sub-title">Get cases for quests</div>
          <div class="bonus-card__img bonus-card__img_battlepass"></div>
        </a>
      </div>
      <main-block
        blocktitle="Modes"
        titleicon="retro-bug"
        class="main-block main__modes-block ng-star-inserted"
      >
        <div class="main__block-title">
          <img src="../../public/images/icon/retro-game.png" class="icon" /> Modes
        </div>
        <div class="main__modes modes-cards">
          <main-mode-card
            class="mode-card mode-card_battleship ng-star-inserted"
          >
            <div class="mode-card__bg ng-star-inserted"></div>
            <!----><!---->
            <div class="mode-card__head">
              <div class="mode-card__title-wrap">
                <div class="mode-card__title">
                  Battle Ship
                  <img
                    src="../../public/images/icon/right-arrow-small.png"
                    class="icon"
                  /><!---->
                </div>
                <!----><!---->
                <div class="mode-card__soon ng-star-inserted">Soon</div>
                <!---->
              </div>
              <div class="mode-card__badge ng-star-inserted">pvp</div>
              <!---->
            </div>
            <div class="mode-card__logo ng-star-inserted"></div>
            <div class="mode-card__gabe ng-star-inserted"></div>
            <!----><!---->
            <div class="mode-card__img"></div>
            <!---->
            <div class="mode-card__players-number ng-star-inserted">
              <img src="../../public/images/icon/group.png" class="icon" /> 0
            </div>
            <!----> </main-mode-card
          ><main-mode-card
            tabindex="0"
            class="mode-card mode-card_crash ng-star-inserted"
            ><!----><!---->
            <div class="mode-card__head">
              <div class="mode-card__title-wrap">
                <div class="mode-card__title">
                  Crash
                  <img
                    src="../../public/images/icon/right-arrow-small.png"
                    class="icon"
                  /><!---->
                </div>
                <!---->
                <div class="mode-card__bank-wrap ng-star-inserted">
                  <span
                    convertdigits="1.0-0"
                    duration="750"
                    class="mode-card__bank currency_RUB"
                    >15 100</span
                  ><!---->
                </div>
                <!----><!---->
              </div>
              <div class="mode-card__badge ng-star-inserted">pve</div>
              <!---->
            </div>
            <!---->
            <div class="mode-card__img"></div>
            <!---->
            <div class="mode-card__players-number ng-star-inserted">
              <img src="../../public/images/icon/group.png" class="icon" /> 47
            </div>
            <!----> </main-mode-card
          ><main-mode-card
            tabindex="0"
            class="mode-card mode-card_double ng-star-inserted"
            ><!---->
            <div class="mode-card__pig-bg ng-star-inserted"></div>
            <!---->
            <div class="mode-card__head">
              <div class="mode-card__title-wrap">
                <div class="mode-card__title">
                  Double
                  <img
                    src="../../public/images/icon/right-arrow-small.png"
                    class="icon"
                  /><!---->
                </div>
                <!---->
                <div class="mode-card__bank-wrap ng-star-inserted">
                  <span
                    convertdigits="1.0-0"
                    duration="750"
                    class="mode-card__bank currency_RUB"
                    >211</span
                  ><!---->
                </div>
                <!----><!---->
              </div>
              <div class="mode-card__badge ng-star-inserted">pve</div>
              <!---->
            </div>
            <!---->
            <div class="mode-card__img"></div>
            <div class="mode-card__new-badge ng-star-inserted">New</div>
            <!---->
            <div class="mode-card__players-number ng-star-inserted">
              <img src="../../public/images/icon/group.png" class="icon" /> 12
            </div>
            <!----> </main-mode-card
          ><main-mode-card
            tabindex="0"
            class="mode-card mode-card_wheel ng-star-inserted"
            ><!----><!---->
            <div class="mode-card__head">
              <div class="mode-card__title-wrap">
                <div class="mode-card__title">
                  Wheel
                  <img
                    src="../../public/images/icon/right-arrow-small.png"
                    class="icon"
                  /><!---->
                </div>
                <!---->
                <div class="mode-card__bank-wrap ng-star-inserted">
                  <span
                    convertdigits="1.0-0"
                    duration="750"
                    class="mode-card__bank currency_RUB"
                    >371</span
                  ><!---->
                </div>
                <!----><!---->
              </div>
              <div class="mode-card__badge ng-star-inserted">pve</div>
              <!---->
            </div>
            <!---->
            <div class="mode-card__img"></div>
            <!---->
            <div class="mode-card__players-number ng-star-inserted">
              <img src="../../public/images/icon/group.png" class="icon" /> 14
            </div>
            <!----> </main-mode-card
          ><main-mode-card
            tabindex="0"
            class="mode-card mode-card_jackpot ng-star-inserted"
            ><!----><!---->
            <div class="mode-card__head">
              <div class="mode-card__title-wrap">
                <div class="mode-card__title">
                  Jackpot
                  <img
                    src="../../public/images/icon/right-arrow-small.png"
                    class="icon"
                  /><!---->
                </div>
                <!---->
                <div class="mode-card__bank-wrap ng-star-inserted">
                  <span
                    convertdigits="1.0-0"
                    duration="750"
                    class="mode-card__bank currency_RUB"
                    >405</span
                  ><!---->
                </div>
                <!----><!---->
              </div>
              <div class="mode-card__badge ng-star-inserted">pvp</div>
              <!---->
            </div>
            <!---->
            <div class="mode-card__img"></div>
            <!---->
            <div class="mode-card__players-number ng-star-inserted">
              <img src="../../public/images/icon/group.png" class="icon" /> 6
            </div>
            <!----> </main-mode-card
          ><main-mode-card class="mode-card mode-card_defuse ng-star-inserted"
            ><!----><!---->
            <div class="mode-card__head">
              <div class="mode-card__title-wrap">
                <div class="mode-card__title">
                  Defuse
                  <img
                    src="../../public/images/icon/right-arrow-small.png"
                    class="icon"
                  /><!---->
                </div>
                <!----><!---->
                <div class="mode-card__soon ng-star-inserted">Soon</div>
                <!---->
              </div>
              <div class="mode-card__badge ng-star-inserted">pve</div>
              <!---->
            </div>
            <!---->
            <div class="mode-card__img"></div>
            <!---->
            <div class="mode-card__players-number ng-star-inserted">
              <img src="../../public/images/icon/group.png" class="icon" /> 0
            </div>
            <!----> </main-mode-card
          ><!----><!----><main-mode-card
            gamemode="support"
            cardtitle="Support"
            routerlink="/support"
            tabindex="0"
            class="mode-card mode-card_support"
            ><!----><!---->
            <div class="mode-card__head">
              <div class="mode-card__title-wrap">
                <div class="mode-card__title">
                  Support
                  <img
                    src="../../public/images/icon/right-arrow-small.png"
                    class="icon"
                  /><!---->
                </div>
                <!----><!----><!---->
              </div>
              <!---->
            </div>
            <!---->
            <div class="mode-card__img"></div>
            <!----><!---->
          </main-mode-card>
        </div> </main-block
      ><main-block
        blocktitle="Live drop"
        titleicon="three-lines"
        class="main-block main__live-drop-block"
      >
        <div class="main__block-title" @click="AddDrop">
          <img src="../../public/images/icon/live.png" class="icon" /> Live drop
        </div>
        <transition-group appear="" name="livedrop" tag="div" class="main__live-drops">
        
          <div v-for="drop in liveDrop"
            _nghost-serverapp-c138=""
            :key="drop.id"
            
          >
            <div
              _ngcontent-serverapp-c138=""
              class="live-drop__hover ng-tns-c138-429"
            >
              <div
                _ngcontent-serverapp-c138=""
                class="live-drop__amount ng-tns-c138-429 currency_RUB"
              >
                {{ drop.amount }}
              </div>
              <img
                _ngcontent-serverapp-c138=""
                class="live-drop__img live-drop__live-drop-img ng-tns-c138-429 ng-star-inserted"
                :src="drop.ImgBox"
                style=""
              /><!----><!---->
              <div
                _ngcontent-serverapp-c138=""
                class="live-drop__user-name ng-tns-c138-429"
              >
                {{ drop.username }}
              </div>
            </div>
            <div
              _ngcontent-serverapp-c138=""
              class="ng-tns-c138-429 drop-skin drop-skin_quality-d32ce6 live-drop__content live-drop__skin ng-star-inserted"
              style=""
            >
              <div
                _ngcontent-serverapp-c138=""
                class="drop-skin__wrapper ng-tns-c138-429"
              >
                <div
                  _ngcontent-serverapp-c138=""
                  class="drop-skin__title ng-tns-c138-429"
                >
                  {{ drop.TitleSkin }}
                </div>
                <div
                  _ngcontent-serverapp-c138=""
                  class="drop-skin__type ng-tns-c138-429 ng-star-inserted"
                >
                  <span
                    _ngcontent-serverapp-c138=""
                    class="drop-skin__extra ng-tns-c138-429"
                  >
                   {{ drop.SkinExtra }}  </span
                  ><span
                    _ngcontent-serverapp-c138=""
                    class="drop-skin__exterior ng-tns-c138-429"
                  >
                    {{ SkinEterior }} </span
                  ><!---->
                </div>
                <!---->
              </div>
              <img
                _ngcontent-serverapp-c138=""
                class="drop-skin__img ng-tns-c138-429"
                :src=drop.ImgSkin
                :alt=drop.NameSkin
              />
            </div>
            <!----><!----> </div>
          </transition-group>
        <!----> </main-block
      ><!----><!----><!----> </main-home
    ><!---->
  </div>
  <Footer fixed_class="footer_fixed"/>
</template>

<script>
import Footer from '@/components/Footer';

import slide1 from '../../public/images/5af59513-fa6c-49f9-b56b-8e3ea3644299-63d28126cbc8a.png'
import slide2 from '../../public/images/39509029-3843-4d27-a70f-9becf1c66166-63d2812d26e78.png'
import slide3 from '../../public/images/d17e381c-f4ca-4013-8ce8-57f6f62e3d82-63d2812289460.png'
import Box from '../../public/images/card-mode-crash.webp'
import Skin from "../../public/images/medium(15).webp"
import gsap from 'gsap'
export default {
  components: {
     Footer
  },
  data() {
    return {
      sliders:[
        {activate: true, img: slide1, title: 'Double Mode', descript: 'Loot skins from gaben`s pig!', LinkBtn: '/double'},
        {activate: false, img: slide2, title: 'Telegram Bonus', descript: 'We give a bonus of 0.1$ for subscribing', LinkBtn: '/profile/me'},
        {activate: false, img: slide3, title: 'CSFAIL Updated', descript: 'The site has been completely redesigned. Feel the new experience of using the site now!', LinkBtn: false},
    ],
    liveDrop: [
      {id: 0, amount: 503.89, ImgBox: Box, username: 'test', TitleSkin: '1 Jacket', SkinExtra: 'CZ75-Auto', SkinEterior: 'MW', ImgSkin: Skin, NameSkin: "CZ75-Auto | Yellow Jacket (Minimal Wear)"},
      {id: 1, amount: 503.89, ImgBox: Box, username: 'test', TitleSkin: '2 Jacket', SkinExtra: 'CZ75-Auto', SkinEterior: 'MW', ImgSkin: Skin, NameSkin: "CZ75-Auto | Yellow Jacket (Minimal Wear)"},
      {id: 2, amount: 503.89, ImgBox: Box, username: 'test', TitleSkin: '3 Jacket', SkinExtra: 'CZ75-Auto', SkinEterior: 'MW', ImgSkin: Skin, NameSkin: "CZ75-Auto | Yellow Jacket (Minimal Wear)"},
      {id: 3, amount: 503.89, ImgBox: Box, username: 'test', TitleSkin: '4 Jacket', SkinExtra: 'CZ75-Auto', SkinEterior: 'MW', ImgSkin: Skin, NameSkin: "CZ75-Auto | Yellow Jacket (Minimal Wear)"},
      {id: 4, amount: 503.89, ImgBox: Box, username: 'test', TitleSkin: '5 Jacket', SkinExtra: 'CZ75-Auto', SkinEterior: 'MW', ImgSkin: Skin, NameSkin: "CZ75-Auto | Yellow Jacket (Minimal Wear)"},
      {id: 5, amount: 503.89, ImgBox: Box, username: 'test', TitleSkin: '6 Jacket', SkinExtra: 'CZ75-Auto', SkinEterior: 'MW', ImgSkin: Skin, NameSkin: "CZ75-Auto | Yellow Jacket (Minimal Wear)"},
    ],
    slide1: slide1,
    slide2: slide2,
    slide3: slide3,
    WidthSlide: 0,
    SlidePx: 0,
    }
  },
  methods: {
    updateWidth() {
      this.WidthSlide = this.$refs.MainBanner.offsetWidth;
    },
    NextSlide() {
      for(var i  = 0; i < this.sliders.length; i++){
          if(this.sliders[i].activate == true){
            this.sliders[i].activate = false
            if(this.sliders[i] == this.sliders[this.sliders.length-1]){
              this.sliders[0].activate = true
              this.changeSlide(0)
            }else{
              this.sliders[i+1].activate = true
              this.changeSlide(i+1)
            }
            break
          }
        }
    },
    BackSlide() {
      for(var i  = 0; i < this.sliders.length; i++){
          if(this.sliders[i].activate == true){
            this.sliders[i].activate = false
            if(this.sliders[i] == this.sliders[0]){
              this.sliders[this.sliders.length-1].activate = true
              this.changeSlide(this.sliders.length-1)
            }else{
              this.sliders[i-1].activate = true
              this.changeSlide(i-1)
            }
            break
          }
        }
    },
    changeSlide(NumSlide) {

      var newValue = (Number(NumSlide) * this.WidthSlide)*-1
      gsap.to(this.$data, { duration: 0.5, SlidePx: newValue });
      
    },
    AddDrop() {
      this.liveDrop.unshift({id: this.liveDrop.length, amount: 503.89, ImgBox: Box, username: 'test', TitleSkin: String(this.liveDrop.length)+'Jacket', SkinExtra: 'CZ75-Auto', SkinEterior: 'MW', ImgSkin: Skin, NameSkin: "CZ75-Auto | Yellow Jacket (Minimal Wear)"})
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    
  },
  mounted() {
    this.updateWidth()
  }
};
</script>

<style scoped>
.livedrop-move {
  transition: transform 0.8s ease;
}
.livedrop-active,
.livedrop-active {
  transition: all 0.5s ease;
}
.livedrop-from,
.livedrop-to {
  opacity: 0;
  transform: translateX(30px);
}



    @media all and (max-width: 991px) {
      [_ngcontent-serverApp-c138]:root {
        --gutter: 1.5rem;
        --gutter-page: 2rem
      }
    }

    @property --gradient-live-drop-start {
      syntax: "<color>";
      initial-value: rgba(38, 49, 91, .45);
      inherits: false;
    }

    @property --gradient-live-drop-end {
      syntax: "<color>";
      initial-value: rgba(50, 63, 109, .45);
      inherits: false;
    }

    [_nghost-serverApp-c138] {
      position: relative;
      display: block;
      min-width: 19.5rem;
      height: 6.5rem;
      border-radius: 1.2rem;
      overflow: hidden;
      cursor: pointer;
      background: linear-gradient(141.72deg, var(--gradient-live-drop-start) 22.05%, var(--gradient-live-drop-end) 89.64%);
    }

    [_nghost-serverApp-c138]:hover {
      --gradient-live-drop-start: #26315B;
      --gradient-live-drop-end: #39487C
    }

    @media all and (min-width: 992px) {
      [_nghost-serverApp-c138]:hover .live-drop__hover[_ngcontent-serverApp-c138] {
        opacity: 1;
        transform: translateY(0)
      }

      [_nghost-serverApp-c138]:hover .drop-skin[_ngcontent-serverApp-c138] {
        opacity: 0
      }
    }

    .is-big-win[_nghost-serverApp-c138] {
      overflow: initial
    }

    [_nghost-serverApp-c138] .live-drop__hover[_ngcontent-serverApp-c138] {
      position: absolute;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: translateY(-1rem);
      border-radius: 1.2rem;
      height: 100%;
      width: 100%;
      padding: 1.6rem 1.8rem;
      z-index: 1;
      transition: opacity .2s ease-out 0s, transform .2s ease-out 0s
    }

    [_nghost-serverApp-c138] .live-drop__amount[_ngcontent-serverApp-c138] {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #62d4b2
    }

    [_nghost-serverApp-c138] .live-drop__img[_ngcontent-serverApp-c138] {
      position: absolute;
      right: 0;
      width: 9.2rem;
      height: auto
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] {
      position: relative;
      display: flex;
      height: 100%;
      border-radius: inherit;
      padding: 1.6rem 1.8rem;
      overflow: hidden;
      transition: opacity .2s ease-out 0s
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138]:before {
      content: "";
      position: absolute;
      right: 1.4rem;
      bottom: -.9rem;
      width: 5rem;
      border-radius: 50%;
      height: 5rem;
      filter: blur(2rem)
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__wrapper[_ngcontent-serverApp-c138] {
      max-width: calc(100% - 7rem)
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__title[_ngcontent-serverApp-c138] {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.7rem;
      color: #fff;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__extra[_ngcontent-serverApp-c138] {
      display: inline-block;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden
    }

    @media all and (max-width: 767px) {
      [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__extra[_ngcontent-serverApp-c138] {
        display: none
      }
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__type[_ngcontent-serverApp-c138] {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 1.2rem;
      color: #b7c4d7;
      text-transform: uppercase;
      margin-top: .1rem
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__exterior[_ngcontent-serverApp-c138],
    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__st[_ngcontent-serverApp-c138] {
      display: inline-block;
      font-weight: 400;
      font-size: 1.2rem;
      margin-left: .4rem
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__exterior[_ngcontent-serverApp-c138] {
      color: #b7c4d799
    }

    @media all and (max-width: 767px) {
      [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__exterior[_ngcontent-serverApp-c138] {
        margin-left: 0
      }
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__st[_ngcontent-serverApp-c138] {
      color: #ff8357
    }

    [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__img[_ngcontent-serverApp-c138] {
      position: absolute;
      right: -1.4rem;
      width: 11.4rem;
      height: auto
    }

    [_nghost-serverApp-c138] .hidden-text[_ngcontent-serverApp-c138] {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 60%;
      width: auto;
      font-size: 1.2rem
    }

    [_nghost-serverApp-c138] .live-drop__user-name[_ngcontent-serverApp-c138] {
      margin-top: .1rem;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #b7c4d7
    }

    [_nghost-serverApp-c138] .live-drop__big-win[_ngcontent-serverApp-c138] {
      position: absolute;
      left: 1.8rem;
      bottom: -1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Gotham;
      width: 4.6rem;
      height: 1.6rem;
      background: linear-gradient(180deg, rgba(255, 194, 138, .54) 0%, #FFC28A 100%);
      border-radius: 0 0 .5rem .5rem;
      font-weight: 600;
      font-size: .8rem;
      text-transform: uppercase;
      color: #191d3e
    }

    [_nghost-serverApp-c138] .live-drop__live-drop-img[_ngcontent-serverApp-c138] {
      bottom: -2.7rem
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-d32ce6[_ngcontent-serverApp-c138]:before {
      background: rgba(255, 118, 239, .45)
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-eb4b4b[_ngcontent-serverApp-c138]:before {
      background: rgba(255, 158, 117, .45)
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-8847ff[_ngcontent-serverApp-c138]:before {
      background: rgba(201, 154, 255, .45)
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-4b69ff[_ngcontent-serverApp-c138]:before {
      background: rgba(77, 136, 255, .45)
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-5e98d9[_ngcontent-serverApp-c138]:before {
      background: rgba(134, 235, 255, .45)
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-b0c3d9[_ngcontent-serverApp-c138]:before {
      background: rgba(255, 255, 255, .45)
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-e4ae39[_ngcontent-serverApp-c138]:before {
      background: rgba(255, 214, 136, .45)
    }

    [_nghost-serverApp-c138] .drop-skin.drop-skin_quality-cf6a32[_ngcontent-serverApp-c138]:before {
      background: rgba(207, 106, 50, .45)
    }

    @media all and (max-width: 768px) {
      [_nghost-serverApp-c138] {
        min-width: 8.4rem;
        height: 9rem
      }

      [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] {
        padding: 1rem 1.2rem
      }

      [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__wrapper[_ngcontent-serverApp-c138] {
        max-width: 100%
      }

      [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__img[_ngcontent-serverApp-c138] {
        bottom: 0;
        right: 0;
        width: 9rem
      }

      [_nghost-serverApp-c138] .drop-skin[_ngcontent-serverApp-c138] .drop-skin__type[_ngcontent-serverApp-c138] {
        margin-top: 0;
        line-height: 1.3rem
      }

      [_nghost-serverApp-c138] .live-drop__amount[_ngcontent-serverApp-c138] {
        font-size: 1.2rem;
        line-height: 1rem
      }

      [_nghost-serverApp-c138] .live-drop__user-name[_ngcontent-serverApp-c138] {
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: 300
      }

      [_nghost-serverApp-c138] .live-drop__live-drop-img[_ngcontent-serverApp-c138] {
        bottom: -1.8rem;
        right: .5rem
      }

      [_nghost-serverApp-c138] .hidden-text[_ngcontent-serverApp-c138] {
        max-width: 100%
      }

      [_nghost-serverApp-c138] .live-drop__big-win[_ngcontent-serverApp-c138] {
        left: 2rem;
        background: linear-gradient(180deg, rgb(255, 194, 138) 0%, #FFC28A 100%)
      }
    }
    swiper {
      display: block
    }
    [_ngcontent-serverApp-c136]:root {
      --gutter: 2rem;
      --gutter-page: 4rem;
      --gutter-shop: 2.5rem;
      --gutter-support: 2.5rem
    }

    @media all and (max-width: 991px) {
      [_ngcontent-serverApp-c136]:root {
        --gutter: 1.5rem;
        --gutter-page: 2rem
      }
    }

    .slide[_ngcontent-serverApp-c136] {
      height: 100%;
      overflow: hidden
    }

    .slide_xmas[_ngcontent-serverApp-c136] {
      background: linear-gradient(359.05deg, #5496FB 7.05%, #2D1B75 107.56%)
    }

    .slide__img[_ngcontent-serverApp-c136] {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background-size: cover
    }

    .slide__content[_ngcontent-serverApp-c136] {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 6rem 0 3rem 4.4rem
    }

    .slide__title[_ngcontent-serverApp-c136] {
      position: relative;
      z-index: 1;
      font-weight: 600;
      font-size: 4.4rem;
      line-height: 5.1rem;
      letter-spacing: .1rem;
      width: 36%;
      color: #fff
    }

    .slide__subtitle[_ngcontent-serverApp-c136] {
      position: relative;
      z-index: 1;
      width: 40%;
      color: #ffffffb3;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      margin-top: 1rem
    }

    .slide__button[_ngcontent-serverApp-c136] {
      position: relative;
      z-index: 1;
      width: 9rem;
      height: 4.4rem;
      padding: 0;
      background-color: #cdf3ffb3;
      border-radius: 1.4rem;
      border: none;
      margin-top: auto;
      font-size: 2.4rem;
      transition: background-color .2s ease-out 0s
    }

    .slide__button[_ngcontent-serverApp-c136] .icon[_ngcontent-serverApp-c136] {
      color: #4b4c6b
    }

    .slide__button[_ngcontent-serverApp-c136]:hover {
      background-color: #cdf3ff
    }

    @media all and (max-width: 991px) {
      .slide__content[_ngcontent-serverApp-c136] {
        padding: 5.5rem 0 2.5rem 3.8rem
      }

      .slide__title[_ngcontent-serverApp-c136] {
        font-size: 3.3rem;
        line-height: 4rem
      }

      .slide__subtitle[_ngcontent-serverApp-c136] {
        margin-top: 1.1rem
      }
    }

    @media all and (max-width: 768px) {
      .slide__content[_ngcontent-serverApp-c136] {
        padding: 1.6rem 0 1.6rem 2rem
      }

      .slide__title[_ngcontent-serverApp-c136] {
        font-size: 1.4rem;
        line-height: 1.2rem;
        width: 38%
      }

      .slide__subtitle[_ngcontent-serverApp-c136] {
        font-size: 1.1rem;
        line-height: 1.3rem;
        margin-top: .8rem
      }

      .slide__button[_ngcontent-serverApp-c136] {
        width: 5.8rem;
        height: 2.8rem;
        border-radius: 1rem
      }
    }
      
</style>