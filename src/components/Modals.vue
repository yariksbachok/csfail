<template>
  <div class="cdk-overlay-container" v-if="$store.state.modal">
    <div
      class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"
    ></div>
    <div
      class="cdk-global-overlay-wrapper"
      dir="ltr"
      style="justify-content: center; align-items: center"
    >
      <div id="cdk-overlay-0" class="cdk-overlay-pane" style="position: static">
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <cdk-dialog-container
          v-if="$store.state.auth_modal"
          tabindex="-1"
          class="cdk-dialog-container"
          id="cdk-dialog-0"
          role="dialog"
          aria-modal="true"
          ><dialog-login _nghost-serverapp-c89="" class="ng-star-inserted"
            ><div _ngcontent-serverapp-c89="" class="modal-dialog login-modal">
              <button
                _ngcontent-serverapp-c89=""
                class="modal__close"
                @click="
                  ($store.state.modal = false),
                    ($store.state.auth_modal = false)
                "
              ></button
              ><!---->
              <div _ngcontent-serverapp-c89="" class="login-dialog">
                <div
                  _ngcontent-serverapp-c89=""
                  class="login-dialog__heading ng-star-inserted"
                >
                  <div _ngcontent-serverapp-c89="" class="login-dialog__title">
                    Authorization
                  </div>
                  <div
                    _ngcontent-serverapp-c89=""
                    class="login-dialog__sub-title"
                  >
                    Welcome to CSFAIL
                  </div>
                </div>
                <!----><!---->
                <div _ngcontent-serverapp-c89="" class="login-dialog__steam">
                  <users-login-dialog-button
                    _ngcontent-serverapp-c89=""
                    method="steam"
                    classlist="button_steam"
                    icon="icon_steam"
                    _nghost-serverapp-c88=""
                    ><button
                      _ngcontent-serverapp-c88=""
                      type="button"
                      class="button button_block button_steam"
                    >
                      <img
                        src="../../public/images/icon/steam.png"
                        class="icon_bonus_small m-r-0-5-rem"
                      />
                      Login with Steam
                    </button></users-login-dialog-button
                  >
                </div>
                <div
                  _ngcontent-serverapp-c89=""
                  class="login-dialog__divider divider"
                >
                  <div _ngcontent-serverapp-c89="" class="divider__wrapper">
                    <div _ngcontent-serverapp-c89="" class="divider__text">
                      or
                    </div>
                  </div>
                </div>
                <div _ngcontent-serverapp-c89="" class="login-dialog__socials">
                  <users-login-dialog-button
                    _ngcontent-serverapp-c89=""
                    method="telegram"
                    classlist="button_telegram"
                    icon="icon_tg-auth"
                    text="Login with Telegram"
                    _nghost-serverapp-c88=""
                    ><button
                      _ngcontent-serverapp-c88=""
                      type="button"
                      class="button button_block button_telegram"
                    >
                      <img
                        src="../../public/images/icon/telegram1.png"
                        class="icon_bonus_small m-r-0-5-rem"
                      />
                      Login with Telegram
                    </button></users-login-dialog-button
                  ><!----><!----><!----><!---->
                </div>
                <!---->
              </div>
            </div></dialog-login
          ><!----></cdk-dialog-container
        >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
      <div
        id="cdk-overlay-2"
        class="cdk-overlay-pane"
        style="position: static"
        v-if="$store.state.settings_modal"
      >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <cdk-dialog-container
          tabindex="-1"
          class="cdk-dialog-container"
          id="cdk-dialog-2"
          role="dialog"
          aria-modal="true"
          ><dialog-settings _nghost-serverapp-c114="" class="ng-star-inserted"
            ><div
              _ngcontent-serverapp-c114=""
              class="modal-dialog modal-dialog_settings"
            >
              <button
                _ngcontent-serverapp-c114=""
                type="button"
                class="modal__close"
                @click="
                  ($store.state.modal = false),
                    ($store.state.settings_modal = false)
                "
              ></button>
              <div
                _ngcontent-serverapp-c114=""
                class="settings ng-star-inserted"
              >
                <div _ngcontent-serverapp-c114="" class="modal__header">
                  <div _ngcontent-serverapp-c114="" class="modal__title">
                    Settings
                  </div>
                </div>
                <div
                  _ngcontent-serverapp-c114=""
                  class="modal-content__content form form_settings"
                >
                  <shell-sound-toggler
                    _ngcontent-serverapp-c114=""
                    _nghost-serverapp-c113=""
                    ><div
                      _ngcontent-serverapp-c113=""
                      class="form__group ng-star-inserted"
                    >
                      <div _ngcontent-serverapp-c113="" class="form__label">
                        Sound Volume
                      </div>
                      <div _ngcontent-serverapp-c113="" class="form__value">
                        <i
                          _ngcontent-serverapp-c113=""
                          class="icon icon_volume"
                        ></i
                        ><mat-slider
                          _ngcontent-serverapp-c113=""
                          role="slider"
                          min="1"
                          max="100"
                          class="mat-slider mat-focus-indicator mat-accent mat-slider-horizontal"
                          tabindex="0"
                          aria-disabled="false"
                          aria-valuemax="100"
                          aria-valuemin="1"
                          aria-valuenow="30"
                          aria-valuetext="30"
                          aria-orientation="horizontal"
                          style="width: 100%"
                          ><div class="mat-slider-wrapper">
                            <div class="mat-slider-track-wrapper">
                              <div
                                class="mat-slider-track-background"
                                style="
                                  transform: translateX(0px)
                                    scale3d(0.707071, 1, 1);
                                "
                              ></div>
                              <div
                                class="mat-slider-track-fill"
                                style="
                                  transform: translateX(0px)
                                    scale3d(0.292929, 1, 1);
                                "
                              ></div>
                            </div>
                            <div
                              class="mat-slider-ticks-container"
                              style="transform: translateX(0%)"
                            >
                              <div
                                class="mat-slider-ticks"
                                style="
                                  background-size: 0% 2px;
                                  transform: translateZ(0px) translateX(0%);
                                "
                              ></div>
                            </div>
                            <div
                              class="mat-slider-thumb-container"
                              style="transform: translateX(-70.7071%)"
                            >
                              <div class="mat-slider-focus-ring"></div>
                              <div class="mat-slider-thumb"></div>
                              <div class="mat-slider-thumb-label">
                                <span class="mat-slider-thumb-label-text"
                                  >30</span
                                >
                              </div>
                            </div>
                          </div></mat-slider
                        >
                      </div>
                    </div>
                    <!----></shell-sound-toggler
                  >
                  <div _ngcontent-serverapp-c114="" class="form__group">
                    <div _ngcontent-serverapp-c114="" class="form__label">
                      Currency
                    </div>
                    <div
                      _ngcontent-serverapp-c114=""
                      dropdown=""
                      dropdownopenclass="is-open"
                      class="select"
                    >
                      <div
                        _ngcontent-serverapp-c114=""
                        dropdowntoggle=""
                        class="select__head"
                      >
                        ₴ UAH
                      </div>
                      <div
                        _ngcontent-serverapp-c114=""
                        dropdowncontent=""
                        class="select__list"
                      >
                        <div
                          _ngcontent-serverapp-c114=""
                          class="select__scroll"
                        >
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            DH AED
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            $ ARS
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            A$ AUD
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            лв BGN
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            R$ BRL
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ₿ BTC
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            Br BYN
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            C$ CAD
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ₣ CHF
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ¥ CNY
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            Kč CZK
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            kr DKK
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            € EUR
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            £ GBP
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            HK$ HKD
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            Kn HRK
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ƒ HUF
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ₪ ILS
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ¥ JPY
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            KSh KES
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ₸ KZT
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            L MDL
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            $ MXN
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            kr NOK
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            $ NZD
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            zł PLN
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            QR QAR
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            lei RON
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ₽ RUB
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            SR SAR
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            kr SEK
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            S$ SGD
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ฿ THB
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            ₺ TRY
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value active ng-star-inserted"
                          >
                            ₴ UAH
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            Ush UGX
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            $ USD
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            U UZS
                          </div>
                          <div
                            _ngcontent-serverapp-c114=""
                            class="select__value ng-star-inserted"
                          >
                            R ZAR
                          </div>
                          <!---->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    _ngcontent-serverapp-c114=""
                    class="form__group ng-star-inserted"
                  >
                    <span _ngcontent-serverapp-c114="" class="form__label">
                      Disable animations </span
                    ><label _ngcontent-serverapp-c114="" class="switch"
                      ><input
                        _ngcontent-serverapp-c114=""
                        type="checkbox"
                        class="switch__control"
                        id="switch-disableAnimations"
                        disabled="" /><span
                        _ngcontent-serverapp-c114=""
                        class="switch__slider"
                      ></span></label
                    ><!---->
                  </div>
                  <!----><!----><!----><!---->
                  <div
                    _ngcontent-serverapp-c114=""
                    class="form__group ng-star-inserted"
                  >
                    <span _ngcontent-serverapp-c114="" class="form__label">
                      Enable stickers </span
                    ><label _ngcontent-serverapp-c114="" class="switch"
                      ><input
                        _ngcontent-serverapp-c114=""
                        type="checkbox"
                        class="switch__control"
                        id="switch-stickersEnabled"
                        disabled="" /><span
                        _ngcontent-serverapp-c114=""
                        class="switch__slider"
                      ></span></label
                    ><!---->
                  </div>
                  <!----><!---->
                  <div
                    _ngcontent-serverapp-c114=""
                    class="form__group ng-star-inserted"
                  >
                    <span _ngcontent-serverapp-c114="" class="form__label">
                      Streamer mode </span
                    ><label _ngcontent-serverapp-c114="" class="switch"
                      ><input
                        _ngcontent-serverapp-c114=""
                        type="checkbox"
                        class="switch__control"
                        id="switch-streamerMode"
                        disabled="" /><span
                        _ngcontent-serverapp-c114=""
                        class="switch__slider"
                      ></span
                    ></label>
                    <div
                      _ngcontent-serverapp-c114=""
                      class="form__description ng-star-inserted"
                    >
                      Streamer mode hides user avatars as well as the display of
                      nicknames and chat messages
                    </div>
                    <!---->
                  </div>
                  <!----><!----><!---->
                </div>
              </div>
              <!---->
            </div></dialog-settings
          ><!----></cdk-dialog-container
        >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
      <div
        id="cdk-overlay-3"
        class="cdk-overlay-pane"
        style="position: static"
        v-if="$store.state.TopPlayModal"
      >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <cdk-dialog-container
          tabindex="-1"
          class="cdk-dialog-container"
          id="cdk-dialog-3"
          role="dialog"
          aria-modal="true"
          ><dialog-items-rain class="ng-star-inserted"
            ><div class="modal-dialog modal-dialog_rain">
              <button
                class="modal__close"
                @click="
                  ($store.state.modal = false),
                    ($store.state.TopPlayModal = false)
                "
              ></button>
              <div class="modal__header">
                <div class="modal__title">
                  <img
                    src="../../public/images/icon/arrows.png"
                    class="icon_bonus_small m-r-0-5-rem"
                  />Skinsrain<!---->
                </div>
                <div class="modal__subtitle">
                  The top 10 most active players will earn
                  <strong>gifts</strong>
                </div>
              </div>
              <div class="rain-dialog ng-star-inserted">
                <div class="rain-dialog__head"></div>
                <div class="rain-dialog__content">
                  <div class="rain-dialog__list">
                    <div
                      scroll="vertical"
                      transitiongroup=""
                      class="rain-dialog__scroll scroll scroll_vertical ng-star-inserted"
                    >
                      <items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">1</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div
                            class="user__picture picture picture_color-gradient-gold"
                          >
                            <img
                              class="image"
                              src="https://media.giphy.com/media/9nuXRx5EfGsKc/giphy.gif"
                              alt="✪ by^amfetam1n^^ FAIL"
                            />
                          </div>
                          <div class="user__details">
                            <div
                              class="user__nickname nickname nickname_color-gradient-gold"
                            >
                              <a class="link" href="/en/profile/1349642">
                                ✪ by^amfetam1n^^ FAIL
                              </a>
                            </div>
                            <div class="user__label">90 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          36.93
                        </div>
                        <div
                          class="item item_quality-cf6a32 winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/3741/small.webp"
                            alt="StatTrak™ UMP-45 | Exposure (Well-Worn)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">2</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div
                            class="user__picture picture picture_color-blue-cian"
                          >
                            <img
                              class="image"
                              src="https://media.giphy.com/media/vzOY3sENROzDEBirhb/giphy.gif"
                              alt="Andrew FAIL ✪n"
                            />
                          </div>
                          <div class="user__details">
                            <div
                              class="user__nickname nickname nickname_color-blue-cian"
                            >
                              <a class="link" href="/en/profile/2017820">
                                Andrew FAIL ✪n
                              </a>
                            </div>
                            <div class="user__label">90 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          29.54
                        </div>
                        <div
                          class="item item_quality-8847ff winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/18514/small.webp"
                            alt="Desert Eagle | Light Rail (Field-Tested)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">3</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div
                            class="user__picture picture picture_color-gradient-gold"
                          >
                            <img
                              class="image"
                              src="https://media3.giphy.com/media/iVS4wrp1XT3BqUAQjo/giphy.gif"
                              alt="2NoiKK | FAIL"
                            />
                          </div>
                          <div class="user__details">
                            <div
                              class="user__nickname nickname nickname_color-gradient-gold"
                            >
                              <a class="link" href="/en/profile/2173721">
                                2NoiKK | FAIL
                              </a>
                            </div>
                            <div class="user__label">80 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          25.85
                        </div>
                        <div
                          class="item item_quality-cf6a32 winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/10276/small.webp"
                            alt="StatTrak™ MAC-10 | Rangeen (Well-Worn)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">4</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div
                            class="user__picture picture picture_color-pink-yellow"
                          >
                            <img
                              class="image"
                              src="https://media2.giphy.com/media/UwkrJKRKJkFb2/100w.gif"
                              alt="SHEF.run.fail"
                            />
                          </div>
                          <div class="user__details">
                            <div
                              class="user__nickname nickname nickname_color-pink-yellow"
                            >
                              <a class="link" href="/en/profile/1199951">
                                SHEF.run.fail
                              </a>
                            </div>
                            <div class="user__label">80 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          22.16
                        </div>
                        <div
                          class="item item_quality-cf6a32 winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/8598/small.webp"
                            alt="StatTrak™ P2000 | Oceanic (Well-Worn)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">5</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div
                            class="user__picture picture picture_color-lightgreen"
                          >
                            <img
                              class="image"
                              src="https://avatars.steamstatic.com/29ed8b90561897cc4be801160eb37dec69e5958d_medium.jpg"
                              alt="ツ FAIL"
                            />
                          </div>
                          <div class="user__details">
                            <div
                              class="user__nickname nickname nickname_color-lightgreen"
                            >
                              <a class="link" href="/en/profile/1995299">
                                ツ FAIL
                              </a>
                            </div>
                            <div class="user__label">80 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          18.46
                        </div>
                        <div
                          class="item item_quality-4b69ff winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/39174/small.webp"
                            alt="PP-Bizon | Lumen (Minimal Wear)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">6</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div class="user__picture picture">
                            <img
                              class="image"
                              src="https://avatars.steamstatic.com/8a231229c2cacb86cffc709f864db263a85c0466_medium.jpg"
                              alt="Cosmo"
                            />
                          </div>
                          <div class="user__details">
                            <div class="user__nickname nickname">
                              <a class="link" href="/en/profile/1162142">
                                Cosmo
                              </a>
                            </div>
                            <div class="user__label">75 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          18.46
                        </div>
                        <div
                          class="item item_quality-5e98d9 winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/20358/small.webp"
                            alt="Souvenir PP-Bizon | Candy Apple (Field-Tested)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">7</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div class="user__picture picture">
                            <img
                              class="image"
                              src="https://media.giphy.com/media/RiPxTlxRujiMzrsN6B/giphy.gif"
                              alt="FLanD top 355 aim lab"
                            />
                          </div>
                          <div class="user__details">
                            <div class="user__nickname nickname">
                              <a class="link" href="/en/profile/1174044">
                                FLanD top 355 aim lab
                              </a>
                            </div>
                            <div class="user__label">72 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          14.77
                        </div>
                        <div
                          class="item item_quality-4b69ff winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/39334/small.webp"
                            alt="AUG | Plague (Well-Worn)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">8</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div
                            class="user__picture picture picture_color-violet"
                          >
                            <img
                              class="image"
                              src="https://avatars.steamstatic.com/65e3d282baf0225d33574c611da9a03fab2f8c22_medium.jpg"
                              alt="sosik FAIL"
                            />
                          </div>
                          <div class="user__details">
                            <div
                              class="user__nickname nickname nickname_color-violet"
                            >
                              <a class="link" href="/en/profile/1813920">
                                sosik FAIL
                              </a>
                            </div>
                            <div class="user__label">64 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          14.77
                        </div>
                        <div
                          class="item item_quality-8847ff winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/40494/small.webp"
                            alt="G3SG1 | Dream Glade (Field-Tested)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">9</div>
                        <div
                          class="winner__user user user_simple ng-star-inserted"
                        >
                          <div
                            class="user__picture picture picture_color-lightblue-blue"
                          >
                            <img
                              class="image"
                              src="https://avatars.steamstatic.com/910434162b51548daf6528e5c872d938cab34d84_medium.jpg"
                              alt="РональдуFAIL"
                            />
                          </div>
                          <div class="user__details">
                            <div
                              class="user__nickname nickname nickname_color-lightblue-blue"
                            >
                              <a class="link" href="/en/profile/1213198">
                                РональдуFAIL
                              </a>
                            </div>
                            <div class="user__label">60 points</div>
                          </div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          11.08
                        </div>
                        <div
                          class="item item_quality-b0c3d9 winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/40178/small.webp"
                            alt="XM1014 | Blue Tire (Well-Worn)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><items-rain-dialog-prize
                        transitiongroupitem=""
                        class="winner winner_rain ng-star-inserted"
                        ><div class="winner__place">10</div>
                        <div class="winner__user ng-star-inserted">
                          <div class="winner__empty">Empty</div>
                        </div>
                        <!---->
                        <div
                          class="winner__amount currency_UAH ng-star-inserted"
                        >
                          9.23
                        </div>
                        <div
                          class="item item_quality-5e98d9 winner__prize ng-star-inserted"
                        >
                          <img
                            class="image"
                            src="/cdn/items/2176/small.webp"
                            alt="M4A1-S | Boreal Forest (Well-Worn)"
                          />
                        </div>
                        <!----><!----><!----><!----></items-rain-dialog-prize
                      ><!----><!---->
                    </div>
                    <!----><!----><!---->
                  </div>
                  <div class="rain-dialog__information">
                    <div class="rain-dialog__conditions">
                      <div class="rain-dialog__widget widget">
                        <div class="widget__chart ng-star-inserted">
                          <div class="widget__circle ng-star-inserted">
                            <circle-progress
                              role="progressbar"
                              background="#37426C"
                              _nghost-serverapp-c81=""
                              aria-valuemin="95.93027777777777"
                              aria-valuemax="100"
                              class="responsive"
                              style="padding-bottom: 100%"
                              ><svg
                                _ngcontent-serverApp-c81=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 200 200"
                              >
                                <defs _ngcontent-serverApp-c81="">
                                  <!---->
                                  <linearGradient
                                    _ngcontent-serverApp-c81=""
                                    id="gradient"
                                    class="ng-star-inserted"
                                  >
                                    <stop
                                      _ngcontent-serverApp-c81=""
                                      offset="0.05"
                                      stop-color="#5eb9e8"
                                      stop-opacity="1"
                                      class="ng-star-inserted"
                                    ></stop>
                                    <stop
                                      _ngcontent-serverApp-c81=""
                                      offset="0.95"
                                      stop-color="#3f42d3"
                                      stop-opacity="1"
                                      class="ng-star-inserted"
                                    ></stop>
                                    <!---->
                                  </linearGradient>
                                  <!----><!----><!---->
                                </defs>
                                <circle
                                  _ngcontent-serverApp-c81=""
                                  fill="none"
                                  cx="100"
                                  cy="100"
                                  r="92.5"
                                  style="
                                    stroke: rgb(55, 66, 108);
                                    stroke-width: 15;
                                  "
                                ></circle>
                                <path
                                  _ngcontent-serverApp-c81=""
                                  fill="none"
                                  transform=""
                                  style="
                                    stroke-width: 15;
                                    stroke-linecap: round;
                                    stroke: url('#gradient');
                                  "
                                  d="M 76.61447059767148 10.504933015429117 A 92.5 92.5 0 1 0 100 7.5"
                                ></path></svg
                            ></circle-progress>
                          </div>
                          <div class="widget__time ng-star-inserted">28:46</div>
                          <!----><!---->
                          <div class="widget__text">To the last</div>
                        </div>
                        <!----><!---->
                      </div>
                      <div class="rain-dialog__rules">
                        <div class="rain-dialog__rules-title">
                          Raffle prizes
                        </div>
                        <div class="rain-dialog__rules-subtitle">
                          To join the drawing, you should gain points in any of
                          the following ways:
                        </div>
                        <div
                          class="rain-dialog__rules-conditions conditions conditions_rain"
                        >
                          <div class="condition">
                            <div class="condition__details">
                              Game mode<!----><span
                                class="bold"
                                style="margin-left: 3px"
                                >Wheel</span
                              >
                            </div>
                            <div class="condition__coins ng-star-inserted">
                              10 points
                            </div>
                            <!---->
                          </div>
                          <div class="condition">
                            <div class="condition__details">
                              Game mode<!----><span
                                class="bold"
                                style="margin-left: 3px"
                                >Double</span
                              >
                            </div>
                            <div class="condition__coins ng-star-inserted">
                              10 points
                            </div>
                            <!---->
                          </div>
                          <div class="condition">
                            <div class="condition__details">
                              Game mode<!----><span
                                class="bold"
                                style="margin-left: 3px"
                                >Jackpot</span
                              >
                            </div>
                            <div class="condition__coins ng-star-inserted">
                              5 points
                            </div>
                            <!---->
                          </div>
                          <div class="condition">
                            <div class="condition__details">
                              Game mode<!----><span
                                class="bold"
                                style="margin-left: 3px"
                                >Crash</span
                              >
                              <div class="condition__tooltip-toggle">
                                <img
                                  src="../../public/images/icon/information-button.png"
                                  class="icon"
                                />
                              </div>
                              <!---->
                            </div>
                            <div class="condition__coins ng-star-inserted">
                              2 points
                            </div>
                            <!---->
                          </div>
                          <div class="condition">
                            <div class="condition__details">
                              Game mode<!----><span
                                class="bold"
                                style="margin-left: 3px"
                                >Defuse</span
                              >
                              <div class="condition__tooltip-toggle">
                                <img
                                  src="../../public/images/icon/information-button.png"
                                  class="icon"
                                />
                              </div>
                              <!---->
                            </div>
                            <div class="condition__coins ng-star-inserted">
                              2 points
                            </div>
                            <!---->
                          </div>
                          <div class="condition">
                            <div class="condition__details">
                              Game mode<!----><span
                                class="bold"
                                style="margin-left: 3px"
                                >Mines</span
                              >
                              <div class="condition__tooltip-toggle">
                                <img
                                  src="../../public/images/icon/information-button.png"
                                  class="icon"
                                />
                              </div>
                              <!---->
                            </div>
                            <div class="condition__coins ng-star-inserted">
                              2 points
                            </div>
                            <!---->
                          </div>
                          <div class="condition">
                            <div class="condition__details">Chat message</div>
                            <div class="condition__coins ng-star-inserted">
                              0.5 points
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="rain-dialog__history">
                      <button
                        type="button"
                        class="button button_md button_block button_brand is-in-current"
                      >
                        <img
                          src="../../public/images/icon/right-arrow.png"
                          class="icon icon_arrow-left"
                        />
                        <span class="button__text"
                          ><!---->Previous Skinsrain<!----><!----></span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!---->
            </div>
            <!----><!----><!----></dialog-items-rain
          ><!----></cdk-dialog-container
        >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
      <div id="cdk-overlay-4" class="cdk-overlay-pane" style="position: static">
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <cdk-dialog-container
          v-if="$store.state.what_promo"
          tabindex="-1"
          class="cdk-dialog-container"
          id="cdk-dialog-4"
          role="dialog"
          aria-modal="true"
          ><dialog-how-it-works
            _nghost-serverapp-c150=""
            class="ng-star-inserted"
            ><div
              _ngcontent-serverapp-c150=""
              class="modal-dialog modal-dialog_what-promo"
            >
              <div _ngcontent-serverapp-c150="" class="modal__content">
                <button
                  _ngcontent-serverapp-c150=""
                  class="modal__close"
                  @click="
                    ($store.state.modal = false),
                      ($store.state.what_promo = false)
                  "
                ></button>
                <div _ngcontent-serverapp-c150="" class="modal__header">
                  <div _ngcontent-serverapp-c150="" class="modal__title">
                    What are promo codes?
                  </div>
                </div>
                <div _ngcontent-serverapp-c150="" class="what-promo">
                  <div
                    _ngcontent-serverapp-c150=""
                    class="what-promo__content content"
                  >
                    <div _ngcontent-serverapp-c150="" class="content__text">
                      <span
                        _ngcontent-serverapp-c150=""
                        class="content__text_color-grey"
                        >Promo code</span
                      >
                      - is the code that gives a bonus to the bonus balance of
                      the site. <br _ngcontent-serverapp-c150="" /><br
                        _ngcontent-serverapp-c150=""
                      />
                      As a rule, promo codes give 25 cents, but there are other
                      denominations!
                    </div>
                    <div _ngcontent-serverapp-c150="" class="content__subtitle">
                      Activation Features:
                    </div>
                    <div _ngcontent-serverapp-c150="" class="content__text">
                      <ul _ngcontent-serverapp-c150="">
                        <li _ngcontent-serverapp-c150="">
                          Without a website in the nickname — You can activate
                          one code per day.
                        </li>
                        <li _ngcontent-serverapp-c150="">
                          With a site in a nickname — The number of codes per
                          day is not limited.
                        </li>
                        <!---->
                      </ul>
                    </div>
                    <div _ngcontent-serverapp-c150="" class="content__text">
                      You can read more about the wagering of promo codes in<!----><a
                        _ngcontent-serverapp-c150=""
                        class="content__link link"
                        href="/en/support/bonuses/615-How-the-new-wagering-system-and-bonus-balance-works"
                      >
                        website support
                      </a>
                    </div>
                    <div _ngcontent-serverapp-c150="" class="content__text">
                      Find your first promo code, enter it in the appropriate
                      field on the "Bonuses" page, and wrap up free skins!
                    </div>
                  </div>
                </div>
              </div>
            </div></dialog-how-it-works
          ><!----></cdk-dialog-container
        >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
      <div id="cdk-overlay-6" class="cdk-overlay-pane" style="position: static">
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <cdk-dialog-container
          v-if="$store.state.bonus_gabe"
          tabindex="-1"
          class="cdk-dialog-container"
          id="cdk-dialog-6"
          role="dialog"
          aria-modal="true"
          ><dialog-how-it-works
            _nghost-serverapp-c145=""
            class="ng-star-inserted"
            ><div
              _ngcontent-serverapp-c145=""
              class="modal-dialog modal-dialog_info"
            >
              <button
                _ngcontent-serverapp-c145=""
                class="modal__close"
                @click="
                  ($store.state.modal = false),
                    ($store.state.bonus_gabe = false)
                "
              ></button>
              <div _ngcontent-serverapp-c145="" class="info">
                <div _ngcontent-serverapp-c145="" class="info__gaben"></div>
                <div _ngcontent-serverapp-c145="" class="info__content">
                  <div _ngcontent-serverapp-c145="" class="info__title">
                    How do the daily rewards work?
                  </div>
                  <div _ngcontent-serverapp-c145="" class="info__subtitle">
                    Gabe has prepared special rewards for those who have set a
                    CSFAIL avatar!
                  </div>
                  <div _ngcontent-serverapp-c145="" class="info__text">
                    Every day at 00:00 UTC, a new reward is unlocked! You have
                    to hurry up to pick it up, otherwise if you pass, you'll
                    lose the chance to take all the prizes!
                  </div>
                  <div
                    _ngcontent-serverapp-c145=""
                    class="info__warning warning"
                  >
                    <img
                      src="/img/question.87c47cfc.png"
                      class="icon m-r-0-5-rem"
                    />
                    <div
                      _ngcontent-serverapp-c145=""
                      class="warning__title-wrapper"
                    >
                      <div _ngcontent-serverapp-c145="" class="warning__title">
                        Update in<!---->
                        {{ updateDate.days }} days {{ updateDate.hours }}:{{
                          updateDate.minutes
                        }}:{{ updateDate.seconds }}
                        <!----><!---->
                      </div>
                      <div
                        _ngcontent-serverapp-c145=""
                        class="warning__subtitle"
                      >
                        Prizes are updated every 14 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></dialog-how-it-works
          ><!----></cdk-dialog-container
        >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
      <div id="cdk-overlay-9" class="cdk-overlay-pane" style="position: static">
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <cdk-dialog-container
          tabindex="-1"
          class="cdk-dialog-container"
          id="cdk-dialog-9"
          role="dialog"
          aria-modal="true"
          v-if="$store.state.what_top"
          ><dialog-how-it-works
            _nghost-serverapp-c159=""
            class="ng-star-inserted"
            ><div
              _ngcontent-serverapp-c159=""
              class="modal-dialog modal-dialog_how-it-works"
            >
              <div _ngcontent-serverapp-c159="" class="modal__content">
                <button
                  _ngcontent-serverapp-c159=""
                  class="modal__close"
                  @click="
                  ($store.state.modal = false),
                    ($store.state.what_top = false)
                "
                ></button>
                <div _ngcontent-serverapp-c159="" class="modal__header">
                  <div _ngcontent-serverapp-c159="" class="modal__title">
                    How does this work?
                  </div>
                </div>
                <div _ngcontent-serverapp-c159="" class="how-it-works">
                  <div
                    _ngcontent-serverapp-c159=""
                    class="how-it-works__alert alert alert_dashed"
                  >
                  <img src="../../public/images/icon/xp.png" class="icon m-r-0-5-rem">  
                  <span _ngcontent-serverapp-c159="" class="sand"
                      >Get experience on the site - ascend higher in the
                      top!</span
                    >
                  </div>
                  <div
                    _ngcontent-serverapp-c159=""
                    dropdownopenclass="is-open"
                    class="collapsibles collapsibles_filled"
                    :class="{'is-open': first_what_top}"
                    
                  >
                    <div
                      _ngcontent-serverapp-c159=""
                      dropdowntoggle=""
                      class="collapsibles__head"
                      @click="first_what_top=!first_what_top"
                    >
                      <div
                        _ngcontent-serverapp-c159=""
                        class="collapsibles__title"
                      >
                        How are prizes given out?
                      </div>
                      <div
                        _ngcontent-serverapp-c159=""
                        class="collapsibles__icon"
                      ></div>
                    </div>
                    <div
                      _ngcontent-serverapp-c159=""
                      dropdowncontent=""
                      class="collapsibles__content"
                    >
                      All prizes are given out in the form of an item in your
                      inventory on the site. The item can be placed in any of
                      the site modes or bring out!
                    </div>
                  </div>
                  <div
                    _ngcontent-serverapp-c159=""
                    dropdownopenclass="is-open"
                    class="collapsibles collapsibles_filled"
                    :class="{'is-open': second_what_top}"
                    
                  >
                    <div
                      _ngcontent-serverapp-c159=""
                      dropdowntoggle=""
                      class="collapsibles__head"
                      @click="second_what_top = !second_what_top"
                    >
                      <div
                        _ngcontent-serverapp-c159=""
                        class="collapsibles__title"
                      >
                        How is experience counted?
                      </div>
                      <div
                        _ngcontent-serverapp-c159=""
                        class="collapsibles__icon"
                      ></div>
                    </div>
                    <div
                      _ngcontent-serverapp-c159=""
                      dropdowncontent=""
                      class="collapsibles__content"
                    >
                      <div
                        _ngcontent-serverapp-c159=""
                        class="collapsibles__informer"
                      >
                        1 cent won or lost =<!----><span
                          _ngcontent-serverapp-c159=""
                          class="sand"
                          >1</span
                        >
                        <img src="../../public/images/icon/xp.png" class="icon m-l-0-5-rem">
                      </div>
                      <p _ngcontent-serverapp-c159="" class="subtitle">
                        Additional terms
                      </p>
                      <div _ngcontent-serverapp-c159="" class="mode-informer">
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__title"
                        >
                        <img src="../../public/images/icon/coupon1.png" class="icon">
                          Crash
                        </div>
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__text"
                        >
                          <p _ngcontent-serverapp-c159="">
                            If you win a bet with ratio less than x1.50, you'll
                            get half the bet experience
                          </p>
                        </div>
                      </div>
                      <!-- <div _ngcontent-serverapp-c159="" class="mode-informer">
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__title"
                        >
                          <i
                            _ngcontent-serverapp-c159=""
                            class="icon icon_defuse-bomb"
                          ></i>
                          Defuse
                        </div>
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__text"
                        >
                          <p _ngcontent-serverapp-c159="">
                            If you win a bet with ratio less than x1.50, you'll
                            get half the bet experience
                          </p>
                        </div>
                      </div> -->
                      
                      <div _ngcontent-serverapp-c159="" class="mode-informer">
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__title"
                        >
                        <img src="../../public/images/icon/trending-topic.png" class="icon">
                          Jackpot
                        </div>
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__text"
                        >
                          <p _ngcontent-serverapp-c159="">
                            If there are less than 5 players in the game, no
                            experience will be provided.<br
                              _ngcontent-serverapp-c159=""
                            />If you win with a greater than 80% probability,
                            you'll earn half of the experience
                          </p>
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c159="" class="mode-informer">
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__title"
                        >
                        <img src="../../public/images/icon/spinning-wheel.png" class="icon">
                          Wheel
                        </div>
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__text"
                        >
                          <p _ngcontent-serverapp-c159="">
                            When betting on 3 colors, you earn half the
                            experience
                          </p>
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c159="" class="mode-informer">
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__title"
                        >
                        <img src="../../public/images/icon/double.png" class="icon">
                          Double
                        </div>
                        <div
                          _ngcontent-serverapp-c159=""
                          class="mode-informer__text"
                        >
                          <p _ngcontent-serverapp-c159="">
                            When making bet on two colors, you gain a half of
                            experience
                          </p>
                        </div>
                      </div>
                      <div
                        _ngcontent-serverapp-c159=""
                        class="collapsibles__alert alert alert_dashed alert_turquoise"
                      >
                        <img src="../../public/images/icon/question.png" class="icon">
                        <div _ngcontent-serverapp-c159="" class="alert__text">
                          Bonus bets do not give experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></dialog-how-it-works
          ><!----></cdk-dialog-container
        >
        <div
          tabindex="0"
          class="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updateDate: {
      type: Object,
    },
  },
  data() {
    return {
      timer: null,
      first_what_top: true,
      second_what_top: true,
    };
  },
  methods: {
    StartTimer() {
      this.timer = setInterval(() => {
        this.updateDate.seconds--;
        if (this.updateDate.seconds == 0) {
          this.updateDate.minutes--;
          if (this.updateDate.minutes == 0) {
            this.updateDate.hours--;
            if (this.updateDate.hours == 0) {
              this.updateDate.days--;
              if (this.updateDate.days < 0) {
                this.stopTimer();
              }
              this.updateDate.hours = 24;
            }

            this.updateDate.minutes = 60;
          }

          this.updateDate.seconds = 60;
        }
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
  },
  mounted() {
    if (this.updateDate.BonusesTime == true) {
      this.StartTimer();
    }
  },
  destroyed() {
    if (this.updateDate.BonusesTime == true) {
      this.stopTimer();
    }
  },
};
</script>

<style>
.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
[_ngcontent-serverApp-c89]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}
@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c89]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}
@property --gradient-login-tab-start {
  syntax: "<color>";
  initial-value: rgba(62, 84, 139, 0);
  inherits: false;
}
@property --gradient-login-tab-end {
  syntax: "<color>";
  initial-value: rgba(86, 111, 175, 0);
  inherits: false;
}
.modal-dialog[_ngcontent-serverApp-c89] {
  background-color: #333f70;
}
@media all and (max-width: 424px) {
  .modal-dialog[_ngcontent-serverApp-c89] {
    width: 100vw;
  }
}
.modal__header[_ngcontent-serverApp-c89] {
  display: block;
  margin-bottom: 0;
}
.modal__title[_ngcontent-serverApp-c89] {
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: #eceff7;
}
.modal__subtitle[_ngcontent-serverApp-c89] {
  margin-top: 0.1rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  color: #8d9cc4;
}
.divider[_ngcontent-serverApp-c89] {
  margin: 2rem 0;
}
.divider__wrapper[_ngcontent-serverApp-c89] {
  position: relative;
  width: 100%;
  height: 1px;
}
.divider__wrapper[_ngcontent-serverApp-c89]:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 7.5%;
  display: block;
  height: 1px;
  width: 85%;
  background: #414c7e;
}
.divider__text[_ngcontent-serverApp-c89] {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  background: #333f70;
  color: #8d9cc3;
  padding: 7px;
  font-size: 1.2rem;
  transform: translate(-50%, -50%);
  text-transform: none;
  font-weight: 400;
}
.login-dialog__socials[_ngcontent-serverApp-c89] {
  display: flex;
  gap: 0.8rem;
}
.login-modal[_ngcontent-serverApp-c89] {
  min-width: 37.5rem;
  padding: 0;
  border-radius: 1.4rem;
  overflow: initial;
}
.login-modal[_ngcontent-serverApp-c89],
.login-modal[_ngcontent-serverApp-c89] * {
  font-family: Gotham;
}
.login-modal[_ngcontent-serverApp-c89] .modal__close[_ngcontent-serverApp-c89] {
  top: 0;
  right: -2rem;
}
.login-modal__tab_reg[_ngcontent-serverApp-c89] {
  border-radius: 0 1.4rem 0 0;
}
.login-modal__tab_auth[_ngcontent-serverApp-c89] {
  border-radius: 1.4rem 0 0;
}
.button.login-modal__tab[_ngcontent-serverApp-c89] {
  --gradient-login-tab-start: #384479;
  --gradient-login-tab-end: #384479;
  height: 6.8rem;
  width: 50%;
  background: #384479;
  background: linear-gradient(
    127.02deg,
    var(--gradient-login-tab-start) 28.5%,
    var(--gradient-login-tab-end) 99.5%
  );
  color: #8d9cc3;
  font-weight: 500;
  font-size: 1.7rem;
  border: none;
  text-transform: none;
  transition: color 0.2s ease-out 0s,
    --gradient-login-tab-start 0.2s ease-out 0s,
    --gradient-login-tab-end 0.2s ease-out 0s;
}
.button.login-modal__tab[_ngcontent-serverApp-c89]
  .icon[_ngcontent-serverApp-c89] {
  font-size: 2rem;
  margin-right: 0.8rem;
}
.button.login-modal__tab[_ngcontent-serverApp-c89]:hover:not(.is-active) {
  color: #fff;
}
.button.login-modal__tab.is-active[_ngcontent-serverApp-c89] {
  --gradient-login-tab-start: rgba(62, 84, 139, 0.5);
  --gradient-login-tab-end: rgba(86, 111, 175, 0.5);
  color: #fff;
}
.login-dialog[_ngcontent-serverApp-c89] {
  padding: 2.2rem 3.5rem;
}
.login-dialog__heading[_ngcontent-serverApp-c89] {
  text-align: center;
  margin-bottom: 2rem;
}
.login-dialog__title[_ngcontent-serverApp-c89] {
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.6rem;
  text-transform: uppercase;
  color: #eceff7;
}
.login-dialog__sub-title[_ngcontent-serverApp-c89] {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  color: #8d9cc4;
}
.login-dialog__helper[_ngcontent-serverApp-c89] {
  text-align: center;
  margin-top: 1.9rem;
}
.login-dialog__question[_ngcontent-serverApp-c89] {
  color: #8d9cc3;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 400;
  margin-right: 0.5rem;
}
.login-dialog__link[_ngcontent-serverApp-c89] {
  color: #83c5ea;
  text-decoration: underline;
  cursor: pointer;
}
.button_steam[_ngcontent-serverApp-c89] {
  height: 6rem;
}
@media all and (max-width: 991px) {
  .login-modal[_ngcontent-serverApp-c89] {
    width: 100%;
  }
  .login-dialog[_ngcontent-serverApp-c89] {
    padding: 2.2rem 1.5rem;
  }
}
@media all and (max-width: 424px) {
  .login-modal[_ngcontent-serverApp-c89]
    .modal__close[_ngcontent-serverApp-c89] {
    top: -3rem;
    right: 1rem;
  }
}
[_ngcontent-serverApp-c88]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}
@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c88]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}
[_nghost-serverApp-c88] {
  display: block;
  width: 100%;
}
.button[_ngcontent-serverApp-c88] {
  padding: 0;
  border: none;
  width: 100%;
  min-width: 6rem;
  height: 6rem;
  border-radius: 1.6rem;
  transition: filter 0.2s ease-out 0s;
}
.button[_ngcontent-serverApp-c88]:hover {
  filter: brightness(1.2);
}
.button[_ngcontent-serverApp-c88] .icon[_ngcontent-serverApp-c88] {
  font-size: 3rem;
}
.button_steam[_ngcontent-serverApp-c88] {
  width: 100%;
  background-color: #171a21;
}
.button_steam[_ngcontent-serverApp-c88] .icon[_ngcontent-serverApp-c88] {
  margin-right: 1rem;
  font-size: 2.6rem;
}
.button_vk[_ngcontent-serverApp-c88] {
  background: linear-gradient(180deg, #07f 0%, #0f7fff 100%);
  color: #dadada;
}
.button_telegram[_ngcontent-serverApp-c88] {
  background: linear-gradient(180deg, #1d9bf0 0%, #21a6ff 100%);
  color: #dadada;
}
.button_facebook[_ngcontent-serverApp-c88] {
  background: linear-gradient(180deg, #104b93 0%, #1960b6 0.01%, #236eb9 100%);
  color: #dadada;
}
.button_google[_ngcontent-serverApp-c88] {
  background: linear-gradient(180deg, #d6d6d6 0%, #ececec 100%);
}

.button_apple[_ngcontent-serverApp-c88] {
  background: linear-gradient(180deg, #191c33 0%, #202543 100%);
  color: #dadada;
}
.button_discord[_ngcontent-serverApp-c88] {
  background: linear-gradient(180deg, #104b93 0%, #5865f2 0.01%, #5c69fa 100%);
  color: #dcdfff;
}
.button_yandex[_ngcontent-serverApp-c88] {
  background: linear-gradient(180deg, #e84629 0%, #ff6347 100%);
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
.modal-dialog_rain {
  max-width: 78rem;
  background-color: #293258;
  background-attachment: local;
  background-size: 80rem;
  box-shadow: 0 0 2rem 1rem #1214254d;
}
.modal-dialog_rain .modal__header {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
}
.modal-dialog_rain .header__title {
  color: #f5f7fe;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3rem;
  text-transform: uppercase;
}
.modal-dialog_rain .header__title .icon {
  font-size: 2.4rem;
  margin-right: 0.5rem;
}
.modal-dialog_rain .modal__subtitle {
  display: block;
  color: #dfac9a;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.2;
}
.modal-dialog_rain .modal__subtitle strong {
  color: #ff9b78;
  font-weight: 500;
}
.rain-dialog {
  display: block;
}
.rain-dialog .rain-dialog__head {
  display: block;
  margin-bottom: 2.8rem;
}
.rain-dialog .rain-dialog__content {
  display: flex;
  gap: 1.5rem;
}
@media all and (max-width: 767px) {
  .rain-dialog .rain-dialog__content {
    flex-direction: column-reverse;
  }
}
.rain-dialog .rain-dialog__history {
  margin-top: 1.5rem;
}
.rain-dialog .rain-dialog__history .button {
  color: #737ca5;
  background-color: #343e68;
  border-color: #343e68;
}
.rain-dialog .rain-dialog__history .button .icon {
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s ease-out 0s, transform 0.2s ease-out 0s;
}
.rain-dialog .rain-dialog__history .button .icon.icon_arrow-left {
  left: 0;
}
.rain-dialog .rain-dialog__history .button .icon.icon_arrow-right {
  right: 0;
}
.rain-dialog .rain-dialog__history .button:hover {
  color: #c3cdff;
  background-color: #4f63cc;
  border-color: #4f63cc;
}
.rain-dialog .rain-dialog__history .button.is-in-current {
  justify-content: right;
}
.rain-dialog .rain-dialog__history .button.is-in-current .icon_arrow-left {
  opacity: 1;
  transform: rotate(180deg);
  margin-left: 1.5rem;
}
.rain-dialog .rain-dialog__history .button.is-in-history {
  justify-content: left;
}
.rain-dialog .rain-dialog__history .button.is-in-history .icon_arrow-right {
  opacity: 1;
  transform: translate(-2rem);
}
.rain-dialog .rain-dialog__calendar {
  margin-bottom: 2rem;
  font-size: 1.7rem;
}
.rain-dialog .rain-dialog__list {
  display: block;
  flex: 1 1 50%;
}
.rain-dialog .rain-dialog__scroll {
  max-height: 57rem;
}
.rain-dialog .rain-dialog__information {
  display: block;
  flex: 1 1 50%;
}
.rain-dialog .rain-dialog__conditions {
  padding: 2.5rem;
  border-radius: 1.2rem;
  background: rgba(35, 44, 80, 0.6);
  -webkit-backdrop-filter: blur(0.6rem);
  backdrop-filter: blur(0.6rem);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translateZ(0);
}
.rain-dialog .rain-dialog__widget {
  display: block;
}
.rain-dialog .rain-dialog__rules {
  margin-top: 1rem;
}
.rain-dialog .rain-dialog__rules-title {
  display: block;
  width: 100%;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  text-transform: uppercase;
}
.rain-dialog .rain-dialog__rules-subtitle {
  display: block;
  width: 100%;
  margin-top: 0.3rem;
  color: #b2bbdc;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6rem;
}
.rain-dialog .rain-dialog__rules-conditions {
  margin-top: 1.5rem;
}
.rain-no-winners {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 27.3rem;
  height: 49.6rem;
  float: left;
  margin: 0 1.8rem;
  background-color: #2c365f4d;
  border: 0.1rem solid #2c365f;
  border-radius: 1rem;
  color: #858fb2;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-transform: uppercase;
  text-align: center;
}
.conditions_rain {
  display: block;
  width: 100%;
  height: auto;
}
.conditions_rain .condition {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: stretch;
  width: 100%;
  height: 4.2rem;
  line-height: 4.2rem;
  border-radius: 0.8rem;
  background-color: #303a64;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  transition: background-color 0.2s ease-out 0s;
}
.conditions_rain .condition:hover {
  background-color: #333e6b;
}
.conditions_rain .condition:hover .condition__coins {
  background-color: #3d5270;
}
.conditions_rain .condition:not(:last-child) {
  margin-bottom: 0.3rem;
}
.conditions_rain .condition__details {
  position: relative;
  width: 100%;
  padding: 0 1.2rem;
  color: #e5eeff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: inherit;
}
.conditions_rain .condition__details .bold {
  display: inline-block;
  font-weight: 500;
}
.conditions_rain .condition__tooltip-toggle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 3rem;
  height: 3rem;
  margin: auto;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-out 0s;
}
.conditions_rain .condition__tooltip-toggle .icon {
  color: #535f92;
  font-size: 1.2rem;
}
.conditions_rain .condition__tooltip-toggle:hover .icon {
  color: #5a679f;
}
.conditions_rain .condition__coins {
  width: 10rem;
  flex: 0 0 10rem;
  background-color: #394d69;
  color: #70e0ad;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  text-align: center;
  transition: background-color 0.2s ease-out 0s;
}
.winner {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #2e385f;
  border-radius: 1.2rem;
  transition: background-color 0.2s ease-out 0s;
}
.winner:hover {
  background-color: #313c66;
}
.winner:hover .winner__amount {
  background-color: #3f4970;
}
.winner .user__nickname.preload {
  width: 100%;
  height: 1.6rem;
  background-color: #323e69;
}
.winner .user__label.preload {
  width: 4rem;
  height: 1.2rem;
  background-color: #323e69;
}
.winner .user__picture.preload,
.winner .user__nickname.preload,
.winner .user__label.preload {
  background-color: #333f70;
}
.winner:not(:last-child) {
  margin-bottom: 0.2rem;
}
.winner:nth-child(1) {
  background-color: #384474;
}
.winner:nth-child(1):hover {
  background-color: #3b487a;
}
.winner:nth-child(1):hover .winner__amount {
  background-color: #4a5683;
}
.winner:nth-child(1) .winner__place {
  color: #f5d681;
}
.winner:nth-child(1) .winner__amount {
  background-color: #46527d;
}
.winner:nth-child(2) {
  background-color: #35406d;
}
.winner:nth-child(2):hover {
  background-color: #384474;
}
.winner:nth-child(2):hover .winner__amount {
  background-color: #46527d;
}
.winner:nth-child(2) .winner__place {
  color: #abc6f4;
}
.winner:nth-child(2) .winner__amount {
  background-color: #424e76;
}
.winner:nth-child(3) {
  background-color: #313c66;
}
.winner:nth-child(3):hover {
  background-color: #35406d;
}
.winner:nth-child(3):hover .winner__amount {
  background-color: #424e76;
}
.winner:nth-child(3) .winner__place {
  color: #dd886b;
}
.winner:nth-child(3) .winner__amount {
  background-color: #3f4970;
}
.winner .winner__place {
  display: inline-block;
  width: 3.2rem;
  flex: 0 0 3.2rem;
  margin-left: 1.5rem;
  color: #a6b2cb;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.8rem;
  text-align: center;
}
.winner .winner__user {
  width: 16rem;
  margin-left: 1.2rem;
  margin-right: 1rem;
}
.winner .winner__user .user__picture {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.5rem;
}
.winner .winner__user .user__picture:before {
  border-radius: 0.6rem;
}
.winner .winner__user .user__details {
  width: calc(100% - 3.4rem);
}
.winner .winner__user .user__nickname {
  width: 100%;
  color: #d6dfff;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
}
.winner .winner__user .user__nickname .your {
  display: inline-block;
  color: #a6b2cb;
}
.winner .winner__user .user__label {
  display: block;
  width: 100%;
  margin-top: 0.2rem;
  color: #70e0ad;
  font-weight: 600;
}
.winner .winner__empty {
  color: #737ca5;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.4rem;
  text-transform: uppercase;
}
.winner .winner__amount {
  display: block;
  width: 4.2rem;
  height: 2.4rem;
  flex: 0 0 auto;
  margin-left: auto;
  background-color: #3b4569;
  border-radius: 0.6rem;
  color: #ff9b78;
  font-size: 1rem;
  font-weight: 500;
  line-height: 2.4rem;
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: background-color 0.2s ease-out 0s;
}
.winner .winner__prize {
  display: block;
  width: 5.6rem;
  height: 3.4rem;
  margin-right: 1rem;
}
.winner.is-current {
  background-color: #36446c;
}
.winner.is-current:hover {
  background-color: #394873;
}
.winner.is-current:hover .winner__amount {
  background-color: #425480;
}
.winner.is-current .winner__place {
  color: #8cd4ff;
}
.winner.is-current .winner__amount {
  background-color: #3f5079;
}
.winner.is-singly .winner__user {
  width: calc(100% - 7.4rem);
  margin-right: 1.5rem;
}
@media all and (max-width: 424px) {
  .winner .winner__user {
    width: 13rem;
  }
}
.widget {
  position: relative;
  display: block;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
}
.widget .widget__tooltip {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: #808bad;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color 0.2s ease-out 0s;
}
.widget .widget__tooltip:hover {
  color: #99a2bd;
}
.widget .widget__chart {
  position: relative;
  display: block;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  background-color: #273055;
  border-radius: 100%;
}
.widget .widget__time {
  position: absolute;
  top: -1.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  margin: auto;
  width: 100%;
  height: 3.6rem;
  color: #fff;
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
}
.widget .widget__text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -4.5rem;
  display: block;
  margin: auto;
  width: 13.4rem;
  height: 1rem;
  text-align: center;
  color: #7082b5;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}
.widget .widget__circle {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 18rem;
  height: 18rem;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(51, 73, 131, 0.79) 0%,
    rgba(41, 50, 88, 0.58) 100%
  );
  border-radius: 100%;
}
.widget .widget__details {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  background-color: #273055;
  border: 1.5rem solid #29335a;
  border-radius: 100%;
}
.widget .widget__details .widget__icon {
  display: inline-block;
  width: 2.8rem;
  height: 2.8rem;
  color: #697dac;
  font-size: 2.8rem;
}
.widget .widget__details .widget__date {
  display: inline-block;
  margin-top: 1rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.6rem;
}
.widget .widget__details .widget__day {
  display: inline-block;
  margin-top: 0.3rem;
  color: #7082b5;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.2rem;
}
[_ngcontent-serverApp-c150]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}
@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c150]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}
.modal-dialog_what-promo[_ngcontent-serverApp-c150] {
  max-width: 50rem;
}
.what-promo[_ngcontent-serverApp-c150]
  .modal__wrapper[_ngcontent-serverApp-c150] {
  padding: 3rem;
}
.what-promo[_ngcontent-serverApp-c150] .content[_ngcontent-serverApp-c150] {
  color: #8f94a9;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
}
.what-promo[_ngcontent-serverApp-c150]
  .content__text[_ngcontent-serverApp-c150] {
  margin-bottom: 1rem;
}
.what-promo[_ngcontent-serverApp-c150]
  .content__text[_ngcontent-serverApp-c150]
  .content__text_color-grey[_ngcontent-serverApp-c150] {
  color: #a6aabb;
  font-weight: 500;
}
.what-promo[_ngcontent-serverApp-c150]
  .content__text[_ngcontent-serverApp-c150]
  ul[_ngcontent-serverApp-c150] {
  list-style-type: disc;
  padding-left: 2rem;
}
.what-promo[_ngcontent-serverApp-c150]
  .content__text[_ngcontent-serverApp-c150]
  ul[_ngcontent-serverApp-c150]
  li[_ngcontent-serverApp-c150]::marker {
  color: #a5a8ff;
}
.what-promo[_ngcontent-serverApp-c150]
  .content__link[_ngcontent-serverApp-c150] {
  color: #ff9b78;
  text-decoration: underline;
  transition: filter 0.2s ease-out 0s;
}
.what-promo[_ngcontent-serverApp-c150]
  .content__link[_ngcontent-serverApp-c150]:hover {
  filter: brightness(1.1);
}
.what-promo[_ngcontent-serverApp-c150]
  .content__subtitle[_ngcontent-serverApp-c150] {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #a6aabb;
  font-size: 1.6rem;
  font-weight: 500;
}
[_ngcontent-serverApp-c145]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}
@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c145]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}
.modal-dialog_info[_ngcontent-serverApp-c145] {
  max-width: 68.3rem;
  padding-bottom: 0;
  background-color: #242a4a;
}
@media all and (max-width: 767px) {
  .modal-dialog_info[_ngcontent-serverApp-c145] {
    padding-bottom: 3rem;
  }
}
.info[_ngcontent-serverApp-c145] {
  display: flex;
}
.info[_ngcontent-serverApp-c145] .info__gaben[_ngcontent-serverApp-c145] {
  position: relative;
  display: block;
  width: 21.4rem;
  height: 37rem;
  flex-shrink: 0;
  margin-right: 3.2rem;
  -webkit-mask-image: linear-gradient(
    186.17deg,
    #c4c4c4 17.14%,
    rgba(196, 196, 196, 0.62) 77.83%,
    rgba(196, 196, 196, 0) 104.34%
  );
  mask-image: linear-gradient(
    186.17deg,
    #c4c4c4 17.14%,
    rgba(196, 196, 196, 0.62) 77.83%,
    rgba(196, 196, 196, 0) 104.34%
  );
}
.info[_ngcontent-serverApp-c145]
  .info__gaben[_ngcontent-serverApp-c145]:before {
  content: "";
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-image: url(../../public/images/gaben.f16396f3c1e05465.webp);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100%;
}
@media all and (max-width: 767px) {
  .info[_ngcontent-serverApp-c145] .info__gaben[_ngcontent-serverApp-c145] {
    display: none;
  }
}
.info[_ngcontent-serverApp-c145] .info__content[_ngcontent-serverApp-c145] {
  margin-top: 2.2rem;
}
.info[_ngcontent-serverApp-c145] .info__title[_ngcontent-serverApp-c145] {
  max-width: 32.4rem;
  color: #fff;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 2.9rem;
}
.info[_ngcontent-serverApp-c145] .info__subtitle[_ngcontent-serverApp-c145] {
  max-width: 32.6rem;
  margin-top: 1.5rem;
  color: #dde5f5;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.2rem;
}
.info[_ngcontent-serverApp-c145] .info__text[_ngcontent-serverApp-c145] {
  margin-top: 0.8rem;
  color: #939dc1;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.9rem;
}
.info[_ngcontent-serverApp-c145] .warning[_ngcontent-serverApp-c145] {
  display: flex;
  align-items: center;
  height: auto;
  padding: 1.6rem;
  margin-top: 1.9rem;
  background-color: #ffdebf05;
  border: 0.1rem dashed rgba(255, 222, 191, 0.11);
  border-radius: 1rem;
}
.info[_ngcontent-serverApp-c145]
  .warning[_ngcontent-serverApp-c145]
  .icon[_ngcontent-serverApp-c145] {
  align-self: flex-start;
  color: #ffdebf;
  margin-right: 1rem;
  font-size: 1.8rem;
}
@media all and (max-width: 424px) {
  .info[_ngcontent-serverApp-c145]
    .warning[_ngcontent-serverApp-c145]
    .icon[_ngcontent-serverApp-c145] {
    display: none;
  }
}
.info[_ngcontent-serverApp-c145]
  .warning[_ngcontent-serverApp-c145]
  .warning__title[_ngcontent-serverApp-c145] {
  color: #ffdebf;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 2.1rem;
}
.info[_ngcontent-serverApp-c145]
  .warning[_ngcontent-serverApp-c145]
  .warning__subtitle[_ngcontent-serverApp-c145] {
  color: #b09e8c;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
}
[_ngcontent-serverApp-c159]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}
@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c159]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}
.modal-dialog_how-it-works[_ngcontent-serverApp-c159] {
  width: 70rem;
  background-color: #293258;
}
.modal-dialog_how-it-works[_ngcontent-serverApp-c159]
  .modal__title[_ngcontent-serverApp-c159] {
  color: #c6a783;
}
@media (max-width: 991px) {
  .modal-dialog_how-it-works[_ngcontent-serverApp-c159] {
    width: 100vw;
    min-width: 100vw;
  }
}
.alert_dashed[_ngcontent-serverApp-c159] {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  padding: 16px;
  background-color: transparent;
  border: 1px dashed #3a425f;
  border-radius: 12px;
  color: #fff9e4;
  font-size: 14px;
}
.alert_dashed[_ngcontent-serverApp-c159]
  .alert__icon[_ngcontent-serverApp-c159] {
  font-size: 18px;
}
.alert_dashed[_ngcontent-serverApp-c159]
  .alert__text[_ngcontent-serverApp-c159] {
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
}
.alert_dashed[_ngcontent-serverApp-c159]
  .alert__icon[_ngcontent-serverApp-c159]
  + .alert__text[_ngcontent-serverApp-c159] {
  margin-left: 10px;
}
.alert_dashed.alert_danger[_ngcontent-serverApp-c159] {
  color: #fa8181;
  border-color: #fa81811c;
}
.alert_dashed.alert_turquoise[_ngcontent-serverApp-c159] {
  color: #81fafa;
  border-color: #81fafa1c;
}
.alert_dashed.alert_turquoise[_ngcontent-serverApp-c159]
  .alert__text[_ngcontent-serverApp-c159] {
  font-style: italic;
  font-weight: 400;
}
.collapsibles[_ngcontent-serverApp-c159] {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
}
.collapsibles[_ngcontent-serverApp-c159]
  + .collapsibles[_ngcontent-serverApp-c159] {
  margin-top: 6px;
}
.collapsibles.is-open[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159]:after {
  transform: rotate(90deg);
}
.collapsibles.is-open[_ngcontent-serverApp-c159]
  .collapsibles__content[_ngcontent-serverApp-c159] {
  display: block;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__head[_ngcontent-serverApp-c159] {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  border: 1px dashed #2e385f;
  border-radius: 6px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159] {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: #363f6a;
  border-radius: 4px;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159]:before,
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159]:after {
  content: "";
  position: absolute;
  display: block;
  border-radius: 6px;
  background-color: #8f96b9;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159]:before {
  top: 11px;
  left: 7px;
  width: 10px;
  height: 2px;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159]:after {
  top: 7px;
  left: 11px;
  width: 2px;
  height: 10px;
  transform: rotate(0);
  transition: transform 0.2s ease-out 0s;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__title[_ngcontent-serverApp-c159] {
  color: #bec8ed;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159]
  + .collapsibles__title[_ngcontent-serverApp-c159] {
  margin-left: 14px;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__title[_ngcontent-serverApp-c159]
  + .collapsibles__icon[_ngcontent-serverApp-c159] {
  margin-left: auto;
}
.collapsibles[_ngcontent-serverApp-c159]
  .collapsibles__content[_ngcontent-serverApp-c159] {
  display: none;
  margin-top: 10px;
  color: #aebbe9;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159] {
  display: block;
  padding: 20px 24px;
  background-color: #2e385f;
  border-radius: 12px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  + .collapsibles_filled[_ngcontent-serverApp-c159] {
  margin-top: 12px;
}
.collapsibles.collapsibles_filled.is-open[_ngcontent-serverApp-c159] {
  background-color: #2e385f;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__head[_ngcontent-serverApp-c159] {
  padding: 0;
  border: none;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__icon[_ngcontent-serverApp-c159] {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #394470;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__title[_ngcontent-serverApp-c159] {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__content[_ngcontent-serverApp-c159] {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__content[_ngcontent-serverApp-c159]
  a[_ngcontent-serverApp-c159] {
  color: #ffba7a;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__content[_ngcontent-serverApp-c159]
  .bold[_ngcontent-serverApp-c159] {
  font-weight: 600;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__content[_ngcontent-serverApp-c159]
  p[_ngcontent-serverApp-c159]
  + p[_ngcontent-serverApp-c159] {
  margin-top: 10px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__content[_ngcontent-serverApp-c159]
  .subtitle[_ngcontent-serverApp-c159] {
  color: #f9e4ba;
  font-weight: 500;
  margin-bottom: 13px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__informer[_ngcontent-serverApp-c159] {
  display: flex;
  align-items: center;
  padding: 14px 18px;
  margin-bottom: 20px;
  background-color: #f8eee60a;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__informer[_ngcontent-serverApp-c159]
  .coins[_ngcontent-serverApp-c159] {
  margin-left: 4px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__informer[_ngcontent-serverApp-c159]
  .sand[_ngcontent-serverApp-c159] {
  color: #eed9b1;
  margin-left: 4px;
}
.collapsibles.collapsibles_filled[_ngcontent-serverApp-c159]
  .collapsibles__alert[_ngcontent-serverApp-c159] {
  margin-top: 18px;
}
@media all and (max-width: 499px) {
  .collapsibles[_ngcontent-serverApp-c159]
    .collapsibles__content[_ngcontent-serverApp-c159] {
    margin-top: 20px;
  }
}
</style>