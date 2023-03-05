<template>
  <ng-progress
    role="progressbar"
    _nghost-serverapp-c13=""
    spinnerposition="right"
    direction="ltr+"
    thick="false"
    fixed="true"
  >
    <div
      _ngcontent-serverapp-c13=""
      class="ng-progress-bar"
      active="false"
      style="transition: opacity 200ms linear 0s"
    >
      <div _ngcontent-serverapp-c13="" class="ng-bar-placeholder">
        <div
          _ngcontent-serverapp-c13=""
          class="ng-bar"
          style="
            transform: translate3d(0%, 0px, 0px);
            background-color: rgb(66, 76, 130);
            transition: none 0s ease 0s;
          "
        >
          <div
            _ngcontent-serverapp-c13=""
            class="ng-meteor"
            style="
              box-shadow: rgb(66, 76, 130) 0px 0px 10px,
                rgb(66, 76, 130) 0px 0px 5px;
            "
          ></div>
        </div>
      </div>
      <div _ngcontent-serverapp-c13="" class="ng-spinner">
        <div
          _ngcontent-serverapp-c13=""
          class="ng-spinner-icon"
          style="
            border-top-color: rgb(66, 76, 130);
            border-left-color: rgb(66, 76, 130);
          "
        ></div>
      </div>
    </div>
  </ng-progress>
  <shell-wrapper>
    <div class="wrapper" :class="{ chat_open: OpenChat == true }">
      <slot></slot>
    </div>
    <button
      type="button"
      v-if="OpenChat == false"
      @click="OpenChat = true"
      class="chat-toggler button"
    >
      <img src="../../public/images/icon/chat.png" class="icon" />
    </button>
    <transition name="chat">
      <chat-sidebar class="chat-sidebar" v-if="OpenChat == true">
        <chat-container
          class="chat-sidebar__content chat ng-tns-c111-8307 ng-trigger ng-trigger-chatContainerAnimation ng-star-inserted"
          _nghost-serverapp-c111=""
          ><div
            _ngcontent-serverapp-c111=""
            class="chat__head ng-tns-c111-8307 ng-star-inserted"
            style=""
          >
            <img
              src="../../public/images/icon/chat2.png"
              class="icon_bonus_small"
            />
            <!-- <chat-rooms _ngcontent-serverapp-c111="" class="ng-tns-c111-8307"
              ><div
                dropdown=""
                dropdownopenclass="is-open"
                class="chat__rooms chat-rooms ng-star-inserted"
                style=""
              >
                <div dropdowntoggle="" class="chat-rooms__head">
                  <div class="chat-rooms__icon">
                    <div class="chat-rooms__flag chat-rooms__flag_uk"></div>
                  </div>
                  <div class="chat-rooms__counter">95</div>
                </div>
                <div dropdowncontent="" class="chat-rooms__list">
                  <div class="room ng-star-inserted">
                    <div class="room__flag room__flag_ru"></div>
                    <div class="room__text">ru</div>
                    <div class="room__counter">1626</div>
                  </div>
                  <div class="room ng-star-inserted">
                    <div class="room__flag room__flag_en"></div>
                    <div class="room__text">en</div>
                    <div class="room__counter">60</div>
                  </div>
                  <div class="room ng-star-inserted">
                    <div class="room__flag room__flag_tr"></div>
                    <div class="room__text">tr</div>
                    <div class="room__counter">15</div>
                  </div>
                  <div class="room ng-star-inserted">
                    <div class="room__flag room__flag_pt"></div>
                    <div class="room__text">pt</div>
                    <div class="room__counter">35</div>
                  </div>
                  <div class="room ng-star-inserted">
                    <div class="room__flag room__flag_pl"></div>
                    <div class="room__text">pl</div>
                    <div class="room__counter">7</div>
                  </div>
                  <div class="room is-selected ng-star-inserted">
                    <div class="room__flag room__flag_uk"></div>
                    <div class="room__text">uk</div>
                    <div class="room__counter">95</div>
                  </div>
                </div>
              </div>
            </chat-rooms> -->
            <div
              _ngcontent-serverapp-c111=""
              class="chat__online online online_chat ng-tns-c111-8307"
            >
              <div
                _ngcontent-serverapp-c111=""
                class="online__count ng-tns-c111-8307"
              >
                3265<!----><!---->
              </div>
              <div
                _ngcontent-serverapp-c111=""
                class="online__title ng-tns-c111-8307"
              >
                ping 143<!----><!---->
              </div>
            </div>
            <button
              _ngcontent-serverapp-c111=""
              type="button"
              class="chat-sidebar__toggle-close button button_square button_xs button_dark-blue-alpha ng-tns-c111-8307"
              @click="OpenChat = false"
            >
              <img
                src="../../public/images/icon/right-arrow.png"
                class="icon"
              />
            </button>
          </div>
          <items-rain-chat-widget
            _ngcontent-serverapp-c111=""
            class="chat__items-rain ng-tns-c111-8307 ng-star-inserted"
            style=""
            @click="
              ($store.state.modal = true), ($store.state.TopPlayModal = true)
            "
            ><div class="items-rain ng-star-inserted">
              <div class="items-rain__title">
                Skinsrain<!----><!----><!---->
              </div>
              <div class="items-rain__timer items-rain-timer ng-star-inserted">
                <div class="items-rain-timer__text">After</div>
                11:30
              </div>
              <!---->
              <div class="items-rain__background"></div>
            </div>
            <!----></items-rain-chat-widget
          >
          <div
            _ngcontent-serverapp-c111=""
            class="chat__content ng-tns-c111-8307 ng-star-inserted"
            style=""
          >
            <!-- <chat-pinned-message
              _ngcontent-serverapp-c111=""
              class="chat__pinned-message pinned-message ng-tns-c111-8307 ng-star-inserted"
              style=""
              ><div class="pinned-message__head">
                <div class="pinned-message__title">
                  <i class="icon icon_pushpin"></i>Pinned message
                </div>
                
              </div>
              <chat-pinned-message-command
                class="pinned-message__content ng-star-inserted"
                >
                <div
                  routerlink="/payment"
                  class="promo-pinned promo-pinned_secret ng-star-inserted"
                  tabindex="0"
                >
                  <div class="promo-pinned__information">
                    <div class="promo-pinned__title">
                      +38%
                      from any deposit
                    </div>
                    <div class="promo-pinned__subtitle">
                      uses
                      196 / 200
                    </div>
                  </div>
                  <div class="promo-pinned__code">s4kXQV0W</div>
                </div>
                </chat-pinned-message-command
              ></chat-pinned-message
            > -->
            <div
              _ngcontent-serverapp-c111=""
              scroll="vertical"
              class="chat__scroll ng-tns-c111-8307 scroll scroll_vertical"
            >
              <div
                _ngcontent-serverapp-c111=""
                class="chat__messages ng-tns-c111-8307 ng-star-inserted"
                style=""
              >
                <chat-message
                  _ngcontent-serverapp-c111=""
                  class="message message_chat ng-tns-c106-18 ng-tns-c111-0 ng-trigger ng-trigger-messageAnimation ng-star-inserted"
                  v-for="message in messages"
                >
                  <div class="message__avatar ng-tns-c106-18">
                    <a
                      class="message__picture picture ng-tns-c106-18 picture_color-lightblue-blue ng-star-inserted"
                      :href="`/en/profile/${message.user.id}`"
                      style=""
                    >
                      <img
                        class="image ng-tns-c106-18 ng-star-inserted"
                        :src="message.user.avatar"
                        :alt="message.user.username"
                      />
                    </a>
                  </div>
                  <div class="message__content ng-tns-c106-18">
                    <div class="message__head ng-tns-c106-18">
                      <div class="message__nickname nickname ng-tns-c106-18">
                        <span
                          class="message__link link ng-tns-c106-18 ng-star-inserted"
                          style=""
                        >
                          {{ message.user.username }}
                        </span>
                      </div>
                      <date-utc
                        format="HH:mm"
                        class="message__date ng-tns-c106-18 ng-star-inserted"
                        style=""
                        ><time datetime="{{ message.msg.datetime }}">{{
                          message.msg.datetime
                        }}</time></date-utc
                      >
                      <button
                        type="button"
                        variation="dropdown"
                        class="message__menu-toggler button button_link ng-tns-c106-18"
                        aria-expanded="false"
                        @click="MuteFunc"
                      >
                        <img
                          src="../../public/images/icon/more.png"
                          class="icon"
                        />
                      </button>
                    </div>
                    <div
                      v-if="message.type == 'info'"
                      class="message__text message__spam ng-tns-c106-18 ng-star-inserted"
                      style=""
                    >
                      {{ message.msg.text }}
                    </div>
                    <div
                      v-else-if="message.type == 'text'"
                      class="message__text ng-tns-c106-30 ng-star-inserted"
                      style=""
                    >
                      {{ message.msg.text }}
                    </div>
                    <chat-message-content-command
                      class="ng-tns-c106-20 ng-star-inserted"
                      style=""
                      v-else-if="message.type == 'stats'"
                    >
                      <chat-message-command-stats class="ng-star-inserted">
                        <div class="message__command message__command_stats">
                          <div class="command command_stats">
                            <div class="command__wrapper">
                              <div class="command__head">
                                <div class="command__title">My game stats</div>
                              </div>
                              <div class="command__main">
                                <div class="command__line">
                                  <div
                                    class="command__cell command__cell_round"
                                  >
                                    <div class="command__subtitle">Games</div>
                                    <div class="command__count">
                                      <div
                                        class="command__icon stats__icon_bets"
                                      ></div>
                                      <div class="command__count">
                                        {{ message.msg.games }}
                                      </div>
                                    </div>
                                  </div>
                                  <div class="command__cell command__cell_wr">
                                    <div class="command__subtitle">W/R</div>
                                    <div class="command__count">
                                      <div
                                        class="command__icon stats__icon_luck"
                                      ></div>
                                      <div class="command__count">
                                        {{ message.msg.win }}%
                                      </div>
                                    </div>
                                  </div>
                                  <div class="command__cell">
                                    <div class="command__subtitle">Profit</div>
                                    <div class="command__count">
                                      <div
                                        class="command__icon stats__icon_total"
                                      ></div>
                                      <div
                                        class="command__balance currency_UAH"
                                      >
                                        {{ message.msg.profit }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div></chat-message-command-stats
                      ></chat-message-content-command
                    >
                  </div>
                </chat-message>
              </div>
            </div>
            <div
              _ngcontent-serverapp-c111=""
              class="chat__scrolldown ng-tns-c111-8307"
            >
              <button
                _ngcontent-serverapp-c111=""
                type="button"
                class="button button_radius button_brand button_to-new-messages ng-tns-c111-8307"
              >
                To new messages
              </button>
            </div>
            <!---->
          </div>
          <div
            _ngcontent-serverapp-c111=""
            class="chat__footer ng-tns-c111-8307 ng-star-inserted"
            style=""
          >
            <div
              _ngcontent-serverapp-c111=""
              trigger="click"
              variation="chat"
              maxwidth="400px"
              class="chat__rules ng-tns-c111-8307 ng-star-inserted"
              aria-expanded="false"
            >
              Rules
            </div>
            <!----><!---->
            <div
              _ngcontent-serverapp-c111=""
              class="chat__control ng-tns-c111-8307"
            >
              <textarea
                _ngcontent-serverapp-c111=""
                name="message"
                placeholder="Message"
                class="form__control ng-tns-c111-8307 ng-untouched ng-pristine ng-valid"
              ></textarea>
            </div>
            <!----><button
              _ngcontent-serverapp-c111=""
              type="button"
              class="chat__send button button_square button_purple button_sm ng-tns-c111-8307"
              disabled=""
            >
              <img src="../../public/images/icon/send-message.png" class="icon">
            </button>
          </div>
          <!----><!----><!----><!----></chat-container
        ><!----></chat-sidebar
      >
    </transition>
    <div v-if="mute"
      data-tippy-root=""
      id="tippy-31"
      :style="{
        'z-index': 9999,
        'visibility': 'visible',
        'position': 'absolute',
        'inset': 'auto auto 0px 0px',
        'margin': '0px',
        'transform': MuteCoord
      }"
    >
      <div
        class="tippy-box"
        data-state="visible"
        tabindex="-1"
        data-theme="dropdown"
        data-animation="shift-toward"
        role="tooltip"
        style="max-width: 350px; transition-duration: 300ms"
        data-placement="top"
      >
        <div
          class="tippy-content"
          data-state="visible"
          style="transition-duration: 300ms"
        >
          <div>
            <button
              type="button"
              class="tippy-content__action button ng-tns-c106-29 ng-star-inserted"
            >
              <i class="ng-tns-c106-29 icon icon_volume"></i
              ><span class="button__text ng-tns-c106-29"
                ><!---->Mute<!----><!----></span
              ></button
            ><!----><!---->
          </div>
        </div>
        <div
          class="tippy-arrow"
          style="
            position: absolute;
            left: 0px;
            transform: translate3d(145px, 0px, 0px);
          "
        ></div>
      </div>
    </div>
  </shell-wrapper>
</template>

<script>
export default {
  data() {
    return {
      OpenChat: false,
      mute: false,
      MuteCoord: 'translate3d(0px, 0px, 0px)',
      messages: [
        {
          type: "text",
          user: {
            id: 1,
            username: "test",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", text: "testtest" },
        },
        {
          type: "text",
          user: {
            id: 1,
            username: "test",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", text: "testtest" },
        },
        {
          type: "text",
          user: {
            id: 1,
            username: "test",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", text: "testtest" },
        },
        {
          type: "info",
          user: {
            id: 1,
            username: "test",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", text: "testtest" },
        },
        {
          type: "text",
          user: {
            id: 1,
            username: "test",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", text: "testtest" },
        },
        {
          type: "text",
          user: {
            id: 1,
            username: "test",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", text: "testtest" },
        },
        {
          type: "stats",
          user: {
            id: 9,
            username: "block",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", games: "100", win: 20, profit: 10 },
        },
        {
          type: "text",
          user: {
            id: 10,
            username: "test10",
            avatar:
              "https://avatars.steamstatic.com/9aac846f384ad687d9d14a87222a246b25ec0e34_medium.jpg",
          },
          msg: { datetime: "17:02", text: "testtest" },
        },
      ],
    };
  },
  methods: {
    MuteFunc (e){
      console.log(this.mute)
      if(this.mute == false){
        var cordenat = e.target.getBoundingClientRect()
        console.log(cordenat)
        this.MuteCoord = 'translate3d('+cordenat.left+'px, -'+cordenat.top+'px, 0px)'
        this.mute = true
      }else{
        this.mute = false
      }
    }
  }
};
</script>
<style>
.chat-enter-active,
.chat-leave-active {
  transition: opacity 0.1s;
}
.chat-enter, .chat-leave-to /* .chat-leave-active до версии 2.1.8 */ {
  opacity: 0;
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

.chat-toggler {
  position: fixed;
  bottom: var(--gutter);
  right: var(--gutter);
  z-index: 1000;
  width: 5rem;
  height: 5rem;
  background-color: #5365c0;
  border: none;
  color: #fff;
  font-size: 2rem;
  padding: 0;
  transition: opacity 0.2s ease-out 0s, visibility 0.2s ease-out 0s,
    filter 0.2s ease-out 0s;
}

.chat-toggler:hover {
  filter: brightness(1.2);
}

@media all and (max-width: 991px) {
  .chat-toggler {
    display: none;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  will-change: background-color;
  overflow: hidden;
  transition: background-color 0.2s ease-out 0s, width 0.2s ease-out 0s;
}

@media all and (min-width: 1920px) {
  .wrapper.chat_open {
    width: calc(100% - 38.8rem);
  }
}

@media all and (max-width: 991px) {
  .wrapper.wrapper_game .header {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.wrapper.wrapper_game .container {
  max-width: 184rem;
  padding: 0 var(--gutter);
}

@media all and (max-width: 991px) {
  .wrapper.wrapper_game .container {
    padding: 0;
  }
}

.wrapper.wrapper_xmas {
  background: linear-gradient(180deg, #08071b 0%, #101426 100%);
}

@media all and (max-width: 767px) {
  .wrapper.wrapper_double {
    background-color: inherit;
  }
}

@media all and (max-width: 991px) {
  .wrapper {
    flex-direction: column;
    height: 100%;
  }
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
}

@media all and (min-width: 992px) {
  .container {
    position: relative;
    z-index: 103;
    padding: 0 10rem;
    flex-direction: row;
    padding-bottom: 0;
    min-height: calc(100vh - 10.4rem);
  }
}

.no_scroll {
  height: var(--vh);
  min-height: auto;
  overflow: hidden;
}

.game-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  width: 49.8rem;
  border-radius: 3rem;
  background-color: #1e2444;
  margin-right: var(--gutter);
}

.game-sidebar_wheel {
  overflow: hidden;
}

.game-sidebar.is-hidden {
  display: none;
}

.game-sidebar .game-sidebar__header {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 100%;
  height: 39.4rem;
}

@media all and (max-width: 991px) {
  .game-sidebar {
    width: 100%;
    border-radius: 0;
    background-color: transparent;
  }

  .game-sidebar.game-sidebar_jackpot {
    margin-top: var(--gutter);
  }

  .game-sidebar:not(.game-sidebar_jackpot) {
    margin-top: 7rem;
    margin-bottom: var(--gutter);
  }

  .game-sidebar .game-sidebar__header {
    height: auto;
  }
}
</style>
