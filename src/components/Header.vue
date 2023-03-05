<template>
  <shell-header class="header" _nghost-serverapp-c119=""
    ><a
      _ngcontent-serverapp-c119=""
      routerlink="/"
      class="header__logo logo logo_header link"
      @click="$router.push('/')"
      ><span _ngcontent-serverapp-c119="" class="logo__circle"></span
      ><span
        _ngcontent-serverapp-c119=""
        class="logo__arrow logo__arrow_small"
      ></span
      ><span
        _ngcontent-serverapp-c119=""
        class="logo__arrow logo__arrow_big"
      ></span
      ><span _ngcontent-serverapp-c119="" class="logo__text"></span
    ></a>
    <div _ngcontent-serverapp-c119="" class="header__games header-games" @mouseover ="OpenGame"
        @mouseleave = "CloseGame">
      <button
        _ngcontent-serverapp-c119=""
        type="button"
        placement="bottom-start"
        appendto="parent"
        variation="headerGames"
        class="header-games__btn button button_block"
        :aria-expanded=arial_button
        
      >
        <img
          src="../../public/images/icon/retro-game.png"
          class="icon icon_retro_game"
        />Games<!----><img
          src="../../public/images/icon/down-arrow.png"
          class="icon down_arrow" :style="{'transition': 'transform .2s ease-out 0s', 'transform': transform_arrow}"
        />
      </button>
      <div
        data-tippy-root=""
        id="tippy-1"
        v-if="ShowGame"
        :style="{
          'z-index': 9999,
          'visibility': 'visible',
          'position': 'absolute',
          'inset': '0px auto auto 0px',
          'margin': '0px',
          'transition': 'transform 0.2s ease-out 0s',
          'transform': transform_game}"
        
      >
        <div
          class="tippy-box"
          data-state="visible"
          tabindex="-1"
          data-theme="header-games"
          data-animation="shift-away"
          role="tooltip"
          style="max-width: 350px; transition-duration: 300ms"
          data-placement="bottom-start"
        >
          <div
            class="tippy-content"
            data-state="visible"
            style="transition-duration: 300ms"
          >
            <shell-games-menu-tooltip
              _nghost-serverapp-c118=""
              class="ng-star-inserted"
              ><div
                _ngcontent-serverapp-c118=""
                class="games-menu-tooltip games-menu-tooltip_header ng-star-inserted"
              >
                <!----><!----><!---->
                <main-mode-card
                  _ngcontent-serverapp-c118=""
                  routerlinkactive="is-active"
                  tabindex="0"
                  class="mode-card mode-card_crash mode-card_mini no-animation ng-star-inserted"
                  ><!----><!---->
                  <div class="mode-card__head">
                    <div class="mode-card__title-wrap">
                      <div class="mode-card__title">
                        Crash
                        <img src="/img/right-arrow-small.795ad41e.png" class="icon_games_header">
                      </div>
                      <!---->
                      <div class="mode-card__bank-wrap ng-star-inserted">
                        <span
                          convertdigits="1.0-0"
                          duration="750"
                          class="mode-card__bank currency_RUB"
                          >5 822</span
                        ><!---->
                      </div>
                      <!----><!---->
                    </div>
                    <!---->
                  </div>
                  <!---->
                  <div class="mode-card__img"></div>
                  <!----><!----></main-mode-card
                ><!----><!----><main-mode-card
                  _ngcontent-serverapp-c118=""
                  routerlinkactive="is-active"
                  tabindex="0"
                  class="mode-card mode-card_double mode-card_mini no-animation ng-star-inserted"
                  ><!---->
                  <div class="mode-card__pig-bg ng-star-inserted"></div>
                  <!---->
                  <div class="mode-card__head">
                    <div class="mode-card__title-wrap">
                      <div class="mode-card__title">
                        Double
                        <img src="/img/right-arrow-small.795ad41e.png" class="icon_games_header">
                      </div>
                      <!---->
                      <div class="mode-card__bank-wrap ng-star-inserted">
                        <span
                          convertdigits="1.0-0"
                          duration="750"
                          class="mode-card__bank currency_RUB"
                          >1 437</span
                        ><!---->
                      </div>
                      <!----><!---->
                    </div>
                    <!---->
                  </div>
                  <!---->
                  <div class="mode-card__img"></div>
                  <!----><!----></main-mode-card
                ><!----><!----><main-mode-card
                  _ngcontent-serverapp-c118=""
                  routerlinkactive="is-active"
                  tabindex="0"
                  class="mode-card mode-card_wheel mode-card_mini no-animation ng-star-inserted"
                  ><!----><!---->
                  <div class="mode-card__head">
                    <div class="mode-card__title-wrap">
                      <div class="mode-card__title">
                        Wheel
                        <img src="/img/right-arrow-small.795ad41e.png" class="icon_games_header">
                      </div>
                      <!---->
                      <div class="mode-card__bank-wrap ng-star-inserted">
                        <span
                          convertdigits="1.0-0"
                          duration="750"
                          class="mode-card__bank currency_RUB"
                          >1 992</span
                        ><!---->
                      </div>
                      <!----><!---->
                    </div>
                    <!---->
                  </div>
                  <!---->
                  <div class="mode-card__img"></div>
                  <!----><!----></main-mode-card
                ><!----><!----><main-mode-card
                  _ngcontent-serverapp-c118=""
                  routerlinkactive="is-active"
                  tabindex="0"
                  class="mode-card mode-card_jackpot mode-card_mini no-animation ng-star-inserted"
                  ><!----><!---->
                  <div class="mode-card__head">
                    <div class="mode-card__title-wrap">
                      <div class="mode-card__title">
                        Jackpot
                        <img src="/img/right-arrow-small.795ad41e.png" class="icon_games_header">
                      </div>
                      <!---->
                      <div class="mode-card__bank-wrap ng-star-inserted">
                        <span
                          convertdigits="1.0-0"
                          duration="750"
                          class="mode-card__bank currency_RUB"
                          >412</span
                        ><!---->
                      </div>
                      <!----><!---->
                    </div>
                    <!---->
                  </div>
                  <!---->
                  <div class="mode-card__img"></div>
                  <!----><!----></main-mode-card
                ><!----><!----><!----><!---->
              </div>
              <!----></shell-games-menu-tooltip
            >
          </div>
          <div
            class="tippy-arrow"
            style="position: absolute;left: 0px;transform: translate3d(41px, 0px, 0px);"
          ></div>
        </div>
      </div>
    </div>
    <div _ngcontent-serverapp-c119="" class="header__menu menu">
      <a
        _ngcontent-serverapp-c119=""
        @click="$router.push('/season-pass')"
        routerlinkactive="is-active"
        class="menu__link link"
        ><span _ngcontent-serverapp-c119="" class="mode__icon">
          <div _ngcontent-serverapp-c119="" class="shield-grey"></div>
          <div _ngcontent-serverapp-c119="" class="arrows-grey"></div>
          <div _ngcontent-serverapp-c119="" class="shield-pink"></div>
          <div _ngcontent-serverapp-c119="" class="arrows-pink"></div> </span
        >Battle pass<!----></a
      ><a
        _ngcontent-serverapp-c119=""
        @click="$router.push('/bonuses')"
        routerlinkactive="is-active"
        class="menu__link link"
        ><img
          src="../../public/images/icon/money.png"
          class="icon"
        />Bonuses<!----></a
      ><a
        _ngcontent-serverapp-c119=""
        routerlinkactive="is-active"
        class="menu__link link"
        @click="$router.push('/top')"
        ><img
          src="../../public/images/icon/top.png"
          class="icon"
        />Top<!----></a
      ><a
        _ngcontent-serverapp-c119=""
        routerlink="/referrals"
        routerlinkactive="is-active"
        class="menu__link link"
        @click="$router.push('/referrals')"
        ><img
          src="../../public/images/icon/suitcase.png"
          class="icon"
        />Partnership<!----></a
      >
    </div>
    <div _ngcontent-serverapp-c119="" class="header__profile profile-header">
      <users-login-button
        _ngcontent-serverapp-c119=""
        class="profile-header__login ng-star-inserted"
        _nghost-serverapp-c87=""
        @click="$store.state.modal = true, $store.state.auth_modal = true"
        ><button
          _ngcontent-serverapp-c87=""
          type="button"
          class="button button_login"
        >
          <img src="../../public/images/icon/padlock.png" class="icon" /><span
            _ngcontent-serverapp-c87=""
            class="button__text"
            >Authorization</span
          >
        </button></users-login-button
      ><!----><!----><!---->
      <div _ngcontent-serverapp-c119="" class="header__actions">
        <!----><a
          _ngcontent-serverapp-c119=""
          class="header__support button"
          @click="$router.push('/support')"
          ><img src="../../public/images/icon/support.png" class="icon" /></a
        ><button
          _ngcontent-serverapp-c119=""
          type="button"
          class="header__settings button"
          @click="$store.state.modal = true, $store.state.settings_modal = true"
        >
          <img
            src="../../public/images/icon/settings.png"
            class="icon"
          /></button
        ><!----><!---->
      </div>
    </div>
    <!----><!---->
  </shell-header>
</template>

<script>
export default {
  data() {
    return { ShowGame: false, transform_game: 'translate3d(17rem, 7rem, 0rem)', arial_button: false, transform_arrow: 'rotate(0)' };
  },
  methods: {
    OpenGame(e) {
      if(this.ShowGame == false){
        var cordenat = e.target.getBoundingClientRect()
        var cordenat_x = cordenat.left
        var cordenat_y = cordenat.top + cordenat.height
        this.transform_game = 'translate3d('+cordenat_x+'px, '+cordenat_y+'px, '+'0px)'
        this.ShowGame = true
        this.arial_button = true
        this.transform_arrow = 'rotate(90deg)'
      }
    },
    CloseGame(){
      this.ShowGame = false
      this.arial_button = false
      this.transform_arrow = 'rotate(0)'
    }
  }
};
</script>
<style>
[_ngcontent-serverApp-c87]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}

@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c87]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}

.button_login[_ngcontent-serverApp-c87] {
  height: 4.4rem;
  padding: 0 1.6rem;
  background-color: #62d5b2;
  border-radius: 0.8rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.9rem;
  color: #20274b;
  text-transform: none;
}

.button_login[_ngcontent-serverApp-c87] .icon[_ngcontent-serverApp-c87] {
  font-size: 2rem;
}

.button_login[_ngcontent-serverApp-c87]
  .icon[_ngcontent-serverApp-c87]
  + .button__text[_ngcontent-serverApp-c87] {
  margin-left: 0.8rem;
}

.button_login[_ngcontent-serverApp-c87]:hover {
  background-color: #89e5ca;
  color: #435e78;
}

@media all and (max-width: 767px) {
  .button_login[_ngcontent-serverApp-c87] {
    height: 4rem;
  }
}
[_ngcontent-serverApp-c119]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}

@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c119]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}

@property --gradient-header-games-start {
  syntax: "<color>";
  initial-value: rgba(0, 0, 0, 0);
  inherits: false;
}

@property --gradient-header-games-end {
  syntax: "<color>";
  initial-value: rgba(0, 0, 0, 0);
  inherits: false;
}

[_nghost-serverApp-c119] {
  position: relative;
  z-index: 104;
  display: flex;
  align-items: center;
  width: 100%;
  flex: 0 0 auto;
  padding: 2rem var(--gutter);
  will-change: width;
  transition: width 0.2s ease-out 0s;
}

.chat_open[_nghost-serverApp-c119] {
  width: calc(100% - 38.8rem);
}

[_nghost-serverApp-c119] .header__logo[_ngcontent-serverApp-c119] {
  z-index: 2;
  margin-right: 2.4rem;
}

[_nghost-serverApp-c119] .header__games[_ngcontent-serverApp-c119] {
  margin-right: 2.4rem;
}

[_nghost-serverApp-c119] .header__profile[_ngcontent-serverApp-c119] {
  display: flex;
  align-items: center;
  margin-left: auto;
}

[_nghost-serverApp-c119] .header__actions[_ngcontent-serverApp-c119] {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

[_nghost-serverApp-c119] .header__notifications[_ngcontent-serverApp-c119] {
  z-index: 2;
}

[_nghost-serverApp-c119] .header__support[_ngcontent-serverApp-c119],
[_nghost-serverApp-c119] .header__settings[_ngcontent-serverApp-c119] {
  z-index: 2;
  width: 3.8rem;
  height: 3.8rem;
  padding: 0;
  border-radius: 1rem;
  background-color: #242f54;
  border-color: #242f54;
  color: #7084ac;
  font-size: 2rem;
}

[_nghost-serverApp-c119] .header__support[_ngcontent-serverApp-c119]:hover,
[_nghost-serverApp-c119] .header__settings[_ngcontent-serverApp-c119]:hover {
  background-color: #384770;
  border-color: #384770;
  color: #b1c6e4;
}

[_nghost-serverApp-c119] .header__logout[_ngcontent-serverApp-c119] {
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
  border-radius: 0;
  color: #444c6f;
  font-size: 2.4rem;
  line-height: 1;
}

[_nghost-serverApp-c119] .header__logout[_ngcontent-serverApp-c119]:hover {
  color: #6b6280;
}

@media all and (max-width: 991px) {
  [_nghost-serverApp-c119] .header__menu[_ngcontent-serverApp-c119],
  [_nghost-serverApp-c119] .header__games[_ngcontent-serverApp-c119],
  [_nghost-serverApp-c119] .header__logout[_ngcontent-serverApp-c119] {
    display: none;
  }
}

@media all and (max-width: 767px) {
  [_nghost-serverApp-c119] {
    padding: 1.4rem var(--gutter);
  }

  [_nghost-serverApp-c119] .header__support[_ngcontent-serverApp-c119],
  [_nghost-serverApp-c119] .header__settings[_ngcontent-serverApp-c119] {
    width: 3.4rem;
    height: 3.4rem;
    font-size: 1.8rem;
  }
}

@media all and (max-width: 479px) {
  [_nghost-serverApp-c119] .header__logo[_ngcontent-serverApp-c119] {
    margin: 0;
  }
}

.mode__icon[_ngcontent-serverApp-c119] {
  position: relative;
  left: 0.2rem;
  width: 2.4rem;
  height: 2.4rem;
}

.mode__icon[_ngcontent-serverApp-c119] .shield-grey[_ngcontent-serverApp-c119] {
  width: 100%;
  height: 100%;
  background-image: url(../../public/images/shield-grey.9b6abf83a785db9b.svg);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 1;
  transition: opacity 0.2s ease-out 0s;
}

.mode__icon[_ngcontent-serverApp-c119] .arrows-grey[_ngcontent-serverApp-c119] {
  position: absolute;
  top: 0.4rem;
  left: -0.1rem;
  width: 1.9rem;
  height: 1.9rem;
  background-image: url(../../public/images/arrows-grey.cd8805bb0635e098.svg);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 1;
  transform: translate(0);
  transition: transform 0.2s ease-out 0s, opacity 0.2s ease-out 0s;
}

.header-games[_ngcontent-serverApp-c119]
  .header-games__btn[_ngcontent-serverApp-c119] {
  --gradient-header-games-start: #424c8e;
  --gradient-header-games-end: #5c5da4;
  display: flex;
  min-width: 11.3rem;
  height: 4.4rem;
  padding: 0;
  background: linear-gradient(
    250.96deg,
    var(--gradient-header-games-start) 37.17%,
    var(--gradient-header-games-end) 98.54%
  );
  border-radius: 1rem;
  border: none;
  color: #ffdb95;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: none;
  align-items: center;
  line-height: 2.4rem;
  transition: --gradient-header-games-start 0.2s ease-out 0s,
    --gradient-header-games-end 0.2s ease-out 0s, color 0.2s ease-out 0s;
}

.header-games[_ngcontent-serverApp-c119]
  .header-games__btn[_ngcontent-serverApp-c119]:hover {
  --gradient-header-games-start: #5d67ae;
  --gradient-header-games-end: #787ac0;
  color: #ffebc4;
}

.header-games[_ngcontent-serverApp-c119]
  .header-games__btn[_ngcontent-serverApp-c119]:hover
  .icon_arrow-triangle-alt[_ngcontent-serverApp-c119] {
  transform: rotate(0);
}

.header-games[_ngcontent-serverApp-c119]
  .header-games__btn[_ngcontent-serverApp-c119]
  .icon_retro-bug[_ngcontent-serverApp-c119] {
  font-size: 2.2rem;
  margin: 0 0.8rem;
}

.header-games[_ngcontent-serverApp-c119]
  .header-games__btn[_ngcontent-serverApp-c119]
  .icon_arrow-triangle-alt[_ngcontent-serverApp-c119] {
  font-size: 1.5rem;
  color: #fff;
  margin: 0 0.6em 0 1.3rem;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}

[_ngcontent-serverApp-c119]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}

@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c119]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}

.logo_header[_ngcontent-serverApp-c119] {
  position: relative;
  display: flex;
  align-items: center;
  transition: filter 0.2s ease-out 0s;
}

.logo_header[_ngcontent-serverApp-c119]:hover {
  filter: brightness(1.5);
}

.logo_header[_ngcontent-serverApp-c119] .logo__arrow[_ngcontent-serverApp-c119],
.logo_header[_ngcontent-serverApp-c119]
  .logo__circle[_ngcontent-serverApp-c119],
.logo_header[_ngcontent-serverApp-c119]
  .logo__text_prefix[_ngcontent-serverApp-c119],
.logo_header[_ngcontent-serverApp-c119]
  .logo__text_name[_ngcontent-serverApp-c119] {
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.logo_header[_ngcontent-serverApp-c119]
  .logo__arrow[_ngcontent-serverApp-c119] {
  position: absolute;
  display: inline-block;
}

.logo_header[_ngcontent-serverApp-c119]
  .logo__arrow_small[_ngcontent-serverApp-c119] {
  top: 1.5rem;
  left: -0.2rem;
  z-index: 10;
  width: 2.365rem;
  height: 1.826rem;
  background-image: url(../../public/images/arrow-small.36b87e394989c776.svg);
  animation-name: logo-arrow-small;
  animation-duration: 0.8s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
  opacity: 0;
}

.logo_header[_ngcontent-serverApp-c119]
  .logo__arrow_big[_ngcontent-serverApp-c119] {
  top: 0;
  left: -0.3rem;
  z-index: 9;
  width: 3.611rem;
  height: 3.507rem;
  background-image: url(../../public/images/arrow-big.883467efc158adfe.svg);
  animation-name: logo-arrow-big;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  opacity: 0;
}

.logo_header[_ngcontent-serverApp-c119]
  .logo__circle[_ngcontent-serverApp-c119] {
  position: relative;
  display: inline-block;
  width: 3.362rem;
  height: 3.566rem;
  background-image: url(../../public/images/circle.142c70bf1232b78d.svg);
  background-size: 3.362rem 3.466rem;
  animation-name: logo-circle;
  animation-duration: 1.3s;
  animation-delay: 0.1s;
  animation-fill-mode: both;
  opacity: 0;
}

.logo_header[_ngcontent-serverApp-c119] .logo__text[_ngcontent-serverApp-c119] {
  position: relative;
  display: inline-block;
  width: 9.505rem;
  height: 2.019rem;
  margin-left: 0.9rem;
  background-image: url(../../public/images/text.5ab0bc1903b278b1.svg);
  background-size: contain;
  background-repeat: no-repeat;
}

@media all and (max-width: 479px) {
  .logo_header[_ngcontent-serverApp-c119]
    .logo__text[_ngcontent-serverApp-c119] {
    display: none;
  }
}

@keyframes logo-arrow-small {
  0% {
    opacity: 0;
    transform: translate(-1.5rem, 1.5rem);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes logo-arrow-big {
  0% {
    opacity: 0;
    transform: translate(-1.5em, 1.5em);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes logo-circle {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes logo-text-prefix {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes logo-text-name {
  0% {
    opacity: 0;
    transform: translate(-3.8em);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
}

.menu[_ngcontent-serverApp-c119] {
  position: relative;
  z-index: 106;
  display: flex;
  align-items: center;
  gap: 2.3rem;
}

.menu[_ngcontent-serverApp-c119] .menu__link[_ngcontent-serverApp-c119] {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #eaf2ff;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.7rem;
  cursor: pointer;
  transition: color 0.2s ease-out 0s, background-color 0.2s ease-out 0s,
    border-color 0.2s ease-out 0s;
}

.menu[_ngcontent-serverApp-c119]
  .menu__link[_ngcontent-serverApp-c119]
  .icon[_ngcontent-serverApp-c119] {
  font-size: 2.2rem;
  color: #9fb1d5;
  transition: color 0.2s ease-out 0s;
}

.menu[_ngcontent-serverApp-c119] .menu__link[_ngcontent-serverApp-c119]:hover,
.menu[_ngcontent-serverApp-c119]
  .menu__link[_ngcontent-serverApp-c119]:hover
  .icon[_ngcontent-serverApp-c119] {
  color: #fff;
}

.menu[_ngcontent-serverApp-c119]
  .menu__link.is-active[_ngcontent-serverApp-c119],
.menu[_ngcontent-serverApp-c119]
  .menu__link.is-active[_ngcontent-serverApp-c119]
  .icon[_ngcontent-serverApp-c119] {
  color: #7cb0ff;
}

.profile-header[_ngcontent-serverApp-c119] {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__user-actions[_ngcontent-serverApp-c119] {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__login[_ngcontent-serverApp-c119] {
  margin-left: auto;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__login[_ngcontent-serverApp-c119]
  .button_login[_ngcontent-serverApp-c119] {
  height: 4.4rem;
  padding: 0 1.143em;
  background-color: #62d5b2;
  border-color: #62d5b2;
  color: #20274b;
  border-radius: 0.571em;
  line-height: 1;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__login[_ngcontent-serverApp-c119]
  .button_login[_ngcontent-serverApp-c119]
  .icon[_ngcontent-serverApp-c119] {
  font-size: 1.429em;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__login[_ngcontent-serverApp-c119]
  .button_login[_ngcontent-serverApp-c119]:hover {
  background-color: #89e6ca;
  border-color: #89e6ca;
  color: #20274b;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action.button_deposit[_ngcontent-serverApp-c119] {
  height: 4.4rem;
  padding: 0 1.4rem;
  background-color: #62d5b2;
  border-color: #62d5b2;
  color: #20274b;
  border-radius: 1rem;
  line-height: 1;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action.button_deposit[_ngcontent-serverApp-c119]
  .icon[_ngcontent-serverApp-c119] {
  font-size: 1.8rem;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action.button_deposit[_ngcontent-serverApp-c119]:hover {
  background-color: #89e6ca;
  border-color: #89e6ca;
  color: #20274b;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action[_ngcontent-serverApp-c119]
  .button__plus[_ngcontent-serverApp-c119] {
  position: relative;
  display: none;
  width: 1.4em;
  height: 1.4em;
  margin-left: 1em;
  background-color: #4cbd9b;
  border-radius: 0.5em;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action[_ngcontent-serverApp-c119]
  .button__plus[_ngcontent-serverApp-c119]:before,
.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action[_ngcontent-serverApp-c119]
  .button__plus[_ngcontent-serverApp-c119]:after {
  content: "";
  position: absolute;
  display: block;
  background-color: #d1fded;
  border-radius: 0.2em;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action[_ngcontent-serverApp-c119]
  .button__plus[_ngcontent-serverApp-c119]:before {
  top: 0.6em;
  left: 0.3em;
  width: 0.8em;
  height: 0.2em;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__action[_ngcontent-serverApp-c119]
  .button__plus[_ngcontent-serverApp-c119]:after {
  top: 0.3em;
  left: 0.6em;
  width: 0.2em;
  height: 0.8em;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__information[_ngcontent-serverApp-c119] {
  display: inline-block;
  max-width: 18em;
  margin-left: 2em;
  margin-right: auto;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__nickname[_ngcontent-serverApp-c119] {
  height: 1.8em;
  color: #dee5ec;
  font-size: 1.5em;
  font-weight: 400;
  line-height: 1.9em;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__deposit[_ngcontent-serverApp-c119] {
  color: #fff;
  font-size: 1.7em;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__picture[_ngcontent-serverApp-c119] {
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 1.4rem;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__picture[_ngcontent-serverApp-c119]:before {
  border-radius: 1.6rem;
}

.profile-header[_ngcontent-serverApp-c119]
  .profile-header__level[_ngcontent-serverApp-c119] {
  position: absolute;
  right: -0.3rem;
  bottom: -0.3rem;
  font-size: 1rem;
}

.profile-header[_ngcontent-serverApp-c119]
  .currency_RUB[_ngcontent-serverApp-c119]:after {
  top: -0.1em;
  font-size: 70%;
}

@media all and (max-width: 991px) {
  .profile-header[_ngcontent-serverApp-c119]
    .profile-header__wager-bonus[_ngcontent-serverApp-c119],
  .profile-header[_ngcontent-serverApp-c119]
    .profile-header__deposit[_ngcontent-serverApp-c119] {
    display: none;
  }
}

.wager-bonus[_ngcontent-serverApp-c119] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 4.4rem;
  padding: 0 0.9rem;
  background-color: #243666;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: filter 0.2s ease-out 0s;
}

.wager-bonus[_ngcontent-serverApp-c119]:hover {
  filter: brightness(1.15);
}

.wager-bonus[_ngcontent-serverApp-c119]
  .wager-bonus__icon[_ngcontent-serverApp-c119] {
  font-size: 2.6rem;
  background: linear-gradient(180deg, #6289d4 0%, #96c0ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: --gradient-start 0.2s ease-out 0s, --gradient-end 0.2s ease-out 0s;
}

.wager-bonus[_ngcontent-serverApp-c119]
  .wager-bonus__wager[_ngcontent-serverApp-c119] {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1;
  color: #c2d6f4;
}

@media all and (max-width: 991px) {
  .wager-bonus[_ngcontent-serverApp-c119] {
    padding: 0 0.6rem;
  }
}

.deposit[_ngcontent-serverApp-c119] {
  height: 4.4rem;
  padding: 0 1.4rem;
  background: linear-gradient(
    258.29deg,
    rgba(80, 255, 203, 0.26) 0.41%,
    rgba(98, 198, 212, 0.13) 65.4%
  );
  border: none;
  border-radius: 1rem;
  color: #b9fff2;
  line-height: 1;
  transition: filter 0.2s ease-out 0s;
}

.deposit[_ngcontent-serverApp-c119]:hover {
  filter: brightness(1.15);
}

.deposit[_ngcontent-serverApp-c119] .deposit__icon[_ngcontent-serverApp-c119] {
  font-size: 1.8rem;
  margin-right: 0.6rem;
  color: #b9fff2;
}

.deposit[_ngcontent-serverApp-c119] .deposit__bank[_ngcontent-serverApp-c119] {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #b9fff2;
}

.deposit[_ngcontent-serverApp-c119]
  .deposit__tooltip-toggler[_ngcontent-serverApp-c119] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 1.2rem;
  background-color: #62d4b2;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  color: #2b4b65;
  transition: filter 0.2s ease-out 0s;
}

.deposit[_ngcontent-serverApp-c119]
  .deposit__tooltip-toggler[_ngcontent-serverApp-c119]:hover {
  filter: brightness(1.1);
}
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
@property --gradient-main-card-start {
  syntax: "<color>";
  initial-value: rgba(94, 152, 240, 0.6);
  inherits: false;
}
@property --gradient-main-card-end {
  syntax: "<color>";
  initial-value: rgba(28, 46, 108, 0.6);
  inherits: false;
}
.mode-card {
  --gradient-main-card-start: rgba(94, 152, 240, 0.6);
  --gradient-main-card-end: rgba(28, 46, 108, 0.6);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    359.05deg,
    var(--gradient-main-card-start) 7.05%,
    var(--gradient-main-card-end) 107.56%
  );
  border-radius: 2.5rem;
  padding: 3.2rem 2.5rem 2.5rem;
  cursor: pointer;
  flex-basis: 100%;
  overflow: hidden;
  font-family: Gotham;
  transition: --gradient-main-card-start 0.2s ease-out 0s,
    --gradient-main-card-end 0.2s ease-out 0s;
}
.mode-card .mode-card__head {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.mode-card .mode-card__bank {
  color: #7f9df0;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-right: 1rem;
}
.mode-card .mode-card__title-wrap {
  font-weight: 500;
}
.mode-card .mode-card__title {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.mode-card .mode-card__title .icon {
  font-size: 2.4rem;
  margin-left: 0.6rem;
  opacity: 0.5;
  transition: opacity 0.2s ease-out 0s, margin-left 0.2s ease-out 0s;
}
.mode-card .mode-card__soon {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #7f9df080;
}
.mode-card .mode-card__img {
  position: absolute;
  bottom: -7.2rem;
  right: -8.7rem;
  width: 34rem;
  height: 34rem;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: width 0.2s ease-out 0s, height 0.2s ease-out 0s;
}
.mode-card .mode-card__badge {
  display: flex;
  font-weight: 300;
  font-size: 1.2rem;
  width: 4.1rem;
  height: 2.2rem;
  background-color: #fca76a3d;
  border-radius: 2.4rem;
  color: #ffdb95;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}
.mode-card .mode-card__players-number {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1.4rem;
  color: #cdffe1cc;
}
.mode-card .mode-card__players-number .icon {
  color: #cdffe199;
  margin-right: 0.6rem;
  font-size: 2rem;
}
.mode-card .mode-card__number-games {
  color: #97c5df;
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.mode-card .mode-card__new-badge {
  position: absolute;
  top: 0;
  left: 2.5rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3rem;
  font-size: 0.8rem;
  color: #191d3e;
  height: 1.8rem;
  background: linear-gradient(
    180deg,
    rgba(240, 93, 102, 0.77) 0%,
    #f7594f 100%,
    #ff5353 100%
  );
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
}
.mode-card.mode-card_mini {
  background: none;
  background-color: #293e7399;
  border-radius: 1.6rem;
  padding: 1.8rem;
  width: 13.5rem;
  height: 16rem;
  transition: background-color 0.2s ease-out 0s, margin-left 0.2s ease-out 0s;
}
.mode-card.mode-card_mini .mode-card__img {
  bottom: -4rem;
  right: -3rem;
  width: 15rem;
  height: 15rem;
}
.mode-card.mode-card_mini .mode-card__title {
  font-size: 1.2rem;
  margin-bottom: 0;
  line-height: 0;
  white-space: nowrap;
}
.mode-card.mode-card_mini .mode-card__title .icon {
  font-size: 1.3rem;
}
.mode-card.mode-card_mini .mode-card__bank-wrap {
  margin-top: 0.2rem;
}
.mode-card.mode-card_mini .mode-card__bank {
  font-size: 1.1rem;
  line-height: 0;
}
.mode-card.mode-card_mini:hover,
.mode-card.mode-card_mini.is-active {
  background-color: #4969bc99;
}
.mode-card.mode-card_toolbar {
  flex-direction: row;
  width: 16.4rem;
  height: 5.8rem;
  background: none;
  background: rgba(41, 62, 115, 0.6);
  border-radius: 1.2rem;
  padding: 0 1.4rem;
  transition: background-color 0.2s ease-out 0s, margin-left 0.2s ease-out 0s;
}
.mode-card.mode-card_toolbar .mode-card__img {
  bottom: -2.2rem;
  right: -1rem;
  width: 8rem;
  height: 8rem;
}
.mode-card.mode-card_toolbar .mode-card__title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mode-card.mode-card_toolbar .mode-card__title {
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0;
  line-height: 1.2;
  white-space: nowrap;
}
.mode-card.mode-card_toolbar .mode-card__title .icon {
  display: none;
}
.mode-card.mode-card_toolbar .mode-card__bank-wrap {
  display: flex;
  align-items: center;
}
.mode-card.mode-card_toolbar .mode-card__bank {
  font-size: 1.1rem;
  line-height: 1.2;
}
.mode-card.mode-card_toolbar .mode-card__new-flg {
  display: none;
}
.mode-card.mode-card_toolbar:hover,
.mode-card.mode-card_toolbar.is-active {
  background-color: #4969bc99;
}
.mode-card .mode-card__pig-bg {
  position: absolute;
  top: 10rem;
  right: 8.4rem;
  width: 14.2rem;
  height: 8.4rem;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(../../public/images/main-card-pig.ee1428f023c34573.webp);
  transition: top 0.2s ease-out 0s, right 0.2s ease-out 0s,
    height 0.2s ease-out 0s, width 0.2s ease-out 0s;
}
.mode-card.mode-card_crash .mode-card__img {
  background-image: url(../../public/images/card-mode-crash.18bf82d9774e89fb.webp);
}
.mode-card.mode-card_double .mode-card__img {
  background-image: url(../../public/images/card-mode-double.18e40bfdef09a4ea.webp);
}
.mode-card.mode-card_jackpot .mode-card__img {
  background-image: url(../../public/images/card-mode-jackpot.f60fe6209558a6d8.webp);
}
.mode-card.mode-card_wheel .mode-card__img {
  background-image: url(../../public/images/card-mode-wheel.a182fc8e791180a1.webp);
}
.mode-card.mode-card_defuse .mode-card__img {
  background-image: url(../../public/images/card-mode-defuse.94c0ac3988b0baa5.webp);
}
@media all and (min-width: 992px) {
  .mode-card:hover:not(
      .no-animation,
      .mode-card_battleship,
      .mode-card_support,
      .mode-card_xmas
    ) {
    --gradient-main-card-start: #5e98f0;
    --gradient-main-card-end: #1c2e6c;
  }
  .mode-card:hover:not(
      .no-animation,
      .mode-card_battleship,
      .mode-card_support,
      .mode-card_xmas
    )
    .mode-card__title
    .icon {
    opacity: 1;
    margin-left: 1rem;
  }
  .mode-card:hover:not(
      .no-animation,
      .mode-card_battleship,
      .mode-card_support,
      .mode-card_xmas
    )
    .mode-card__img {
    width: 36.1rem;
    height: 36.1rem;
  }
  .mode-card:hover:not(
      .no-animation,
      .mode-card_battleship,
      .mode-card_support,
      .mode-card_xmas
    )
    .mode-card__pig-bg {
    top: 8rem;
    right: 10.4rem;
    height: 8.9rem;
    width: 15rem;
  }
}
@media all and (max-width: 991px) {
  .mode-card {
    height: 27.8rem;
  }
  .mode-card .mode-card__title {
    font-size: 1.8rem;
    line-height: 1.5rem;
    margin-bottom: 0.3rem;
  }
  .mode-card .mode-card__title .icon {
    font-size: 2rem;
    margin-left: 0.3rem;
  }
  .mode-card .mode-card__badge {
    width: 3.7rem;
    height: 2rem;
    border-radius: 2.4rem;
    font-size: 1rem;
    font-weight: 500;
  }
  .mode-card .mode-card__pig-bg {
    top: 3.5rem;
  }
  .mode-card_double.mode-card_toolbar .mode-card__pig-bg {
    display: none;
  }
}
@media all and (max-width: 768px) {
  .mode-card {
    height: 14.1rem;
    padding: 1.5rem 1.4rem;
    border-radius: 1.4rem;
  }
  .mode-card .mode-card__pig-bg {
    right: 4.5rem;
    top: 4.5rem;
    height: 6rem;
    width: 6rem;
  }
  .mode-card .mode-card__bank {
    line-height: 0;
  }
  .mode-card .mode-card__title {
    font-size: 1.5rem;
    margin-bottom: 0;
    line-height: 2.2rem;
  }
  .mode-card .mode-card__title .icon {
    font-size: 1.5rem;
    margin-left: 0.55rem;
  }
  .mode-card .mode-card__img {
    bottom: -4.2rem;
    right: -3.2rem;
    width: 15rem;
    height: 15rem;
  }
  .mode-card .mode-card__players-number {
    font-size: 1.3rem;
  }
  .mode-card .mode-card__players-number .icon {
    font-size: 1.5rem;
    margin-left: 0.4rem;
  }
  .mode-card .mode-card__new-badge {
    left: 1.5rem;
    font-size: 0.7rem;
    height: 1.3rem;
  }
}
.games-menu-tooltip_header[_ngcontent-serverApp-c118] {
  display: grid;
  grid-template-columns: repeat(4, 13.5rem);
  gap: 0.8rem;
}
.games-menu-tooltip_toolbar[_ngcontent-serverApp-c118] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.7rem;
}
</style>
