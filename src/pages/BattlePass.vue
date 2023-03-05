<template>
  <div class="container">
    <router-outlet></router-outlet
    ><seasonpass-home class="seasonpass seasonpass-page ng-star-inserted">
      <div
        class="seasonpass-header seasonpass-header_winter seasonpass-page__header ng-star-inserted"
      >
        <div class="seasonpass-header__logo"></div>
        <div class="seasonpass-header__content">
          <div class="seasonpass-header__head">
            <div class="seasonpass-header__title-wrapper">
              <div class="seasonpass-header__subtitle">Season 4</div>
              <div class="seasonpass-header__title">Winterpass</div>
            </div>
            <seasonpass-timer
              _nghost-serverapp-c142=""
              class="seasonpass-header__timer seasonpass-timer seasonpass-timer_winter"
            >
              <div _ngcontent-serverapp-c142="" class="seasonpass-timer__head">
                Left before the season's end
              </div>
              <div
                _ngcontent-serverapp-c142=""
                class="seasonpass-timer__content ng-star-inserted"
              >
                <div
                  _ngcontent-serverapp-c142=""
                  class="seasonpass-timer__cell"
                >
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__value"
                  >
                  {{currentTime.days}}
                  </div>
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__label"
                  >
                    days
                  </div>
                </div>
                <div
                  _ngcontent-serverapp-c142=""
                  class="seasonpass-timer__cell"
                >
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__value"
                  >
                  {{currentTime.hours}}
                  </div>
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__label"
                  >
                    Hour.
                  </div>
                </div>
                <div
                  _ngcontent-serverapp-c142=""
                  class="seasonpass-timer__cell"
                >
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__value"
                  >
                    {{currentTime.minutes}}
                  </div>
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__label"
                  >
                    Min.
                  </div>
                </div>
                <div
                  _ngcontent-serverapp-c142=""
                  class="seasonpass-timer__cell is-muted"
                >
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__value"
                  >
                    {{currentTime.seconds}}
                  </div>
                  <div
                    _ngcontent-serverapp-c142=""
                    class="seasonpass-timer__label"
                  >
                    Sec.
                  </div>
                </div>
              </div>
              
            </seasonpass-timer>
          </div>
          <div
            class="seasonpass-header__not-logged not-logged ng-star-inserted"
          >
            <div class="not-logged__content">
              <img
                src="../../public/images/icon/padlock.png"
                class="icon not-logged__icon"
              />
              <div class="not-logged__text">
                <div class="not-logged__title">Attention!</div>
                <div class="not-logged__subtitle">
                  Authorization required to participate
                </div>
              </div>
            </div>
            <users-login-button
              classlist="not-logged__button button button_md" 
              _nghost-serverapp-c87=""
              @click="$store.state.modal = true, $store.state.auth_modal = true"
              ><button
                _ngcontent-serverapp-c87=""
                type="button"
                class="not-logged__button button button_md"
              >
                <img src="../../public/images/icon/padlock.png" class="icon" /><span
                  _ngcontent-serverapp-c87=""
                  class="button__text"
                  >Authorization</span
                >
              </button></users-login-button
            >
          </div>
          
        </div>
        <div class="seasonpass-header__gaben"></div>
        <div class="seasonpass-header__frames"></div>
      </div>
      <div
        class="seasonpass-page__timeline seasonpass-timeline ng-star-inserted"
      >
        <div class="seasonpass-timeline__slider">
          <swiper
            slidesperview="auto"
            class="seasonpass-timeline__content is-at-start swiper swiper-initialized swiper-horizontal swiper-pointer-events ng-star-inserted"
          >
            
            <div
              class="swiper-wrapper"
              :style="{'transform': 'translate3d('+String(SlidePx)+'px, 0px, 0px)'}"
            >
            
                <!-- <div
                    data-swiper-slide-index="0"
                    class="swiper-slide ng-star-inserted swiper-slide-active"
                    ref="MainBanner"
                >
                  
                    <seasonpass-prize
                    
                    _nghost-serverapp-c141=""
                    class="is-unavailable ng-star-inserted"
                    >
                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__status icon icon_check ng-star-inserted"
                    ></div>
                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__picture ng-star-inserted"
                    >
                        <img
                        _ngcontent-serverapp-c141=""
                        class="image"
                        src="../../public/images/dfbcf02f-6691-49da-ab17-725374b50868-6387adda05753.png"
                        alt="Random customization"
                        />
                    </div>
                    
                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward_preview ng-star-inserted"
                    >
                        <img src="../../public/images/icon/eye.png" class="icon" />
                    </div>

                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__level-wrapper ng-star-inserted"
                    >
                        <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__shield shield_blue"
                        ></div>
                        <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__level"
                        >
                        1
                        </div>
                    </div>
                    </seasonpass-prize
                    >
                </div> -->

                <div
                    class="swiper-slide ng-star-inserted swiper-slide-active"
                    v-for="(box, index) in Boxs"
                    :key="index"
                    ref="MainBanner"
                >
                  
                    <seasonpass-prize
                    _nghost-serverapp-c141=""
                    class="is-unavailable ng-star-inserted"
                    >
                    
                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__status icon icon_check ng-star-inserted"
                    ></div>
                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__picture ng-star-inserted"
                    >
                        <img
                        _ngcontent-serverapp-c141=""
                        class="image"
                        :src="getPhoto(box.image)"
                        :alt="box.title"
                        />
                    </div>
                    
                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward_preview ng-star-inserted"
                    >
                        <img src="../../public/images/icon/eye.png" class="icon" v-if="box.icon=='eye'" />
                        <img src="../../public/images/icon/padlock.png" class="icon" v-else-if="box.icon=='lock'" />
                    </div>

                    <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__level-wrapper ng-star-inserted"
                    >
                        <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__shield shield_blue"
                        ></div>
                        <div
                        _ngcontent-serverapp-c141=""
                        class="seasonpass-reward__level"
                        >
                        {{ index+1 }}
                        </div>
                    </div>
                    </seasonpass-prize
                    >
                </div>
              
            </div>
             </swiper
          >
          <div class="seasonpass-timeline__controls">
            <button v-if="BtnBackSlide" @click="BackSlide"
              class="seasonpass-timeline__control seasonpass-timeline__control_prev button button_square"
            >
            <img src="../../public/images/icon/right-chevron.png" class="icon" style="transform: rotate(180deg);"/></button
            ><button
              class="seasonpass-timeline__control seasonpass-timeline__control_next button button_square"
              @click="NextSlide"
            >
              <img src="../../public/images/icon/right-chevron.png" class="icon" />
            </button>
          </div>
        </div>
        <div
          class="seasonpass-timeline__progress progress progress_lg progress_silver"
        >
          <div class="progress__text">
            3 019 experience to the next level
          </div>
          <div
            class="progress__text progress__text_back"
            style="clip-path: inset(0px 0px 0px 0%)"
          >
            3 019 experience to the next level
          </div>
          <div class="progress__bar" style="width: 0%"></div>
        </div>
      </div>
      <seasonpass-quests
        class="seasonpass-page__tasks ng-star-inserted"
        _nghost-serverapp-c145=""
      >
        <div
          _ngcontent-serverapp-c145=""
          class="seasonpass-page__tabs seasonpass-tabs"
        >
          <div _ngcontent-serverapp-c145="" class="tab" :class="{'is-active': MobileGeneralBtn}" @click="MobileGeneralBtn=true, MobileTaskGeneral ='block', MobileDailyBtn=false, MobileTaskDaily ='none', MobileWeeklyBtn=false, MobileTaskWeekly ='none'">
            <img src="../../public/images/icon/google-docs.png" class="icon_tabs" />
            General
          </div>
          <div _ngcontent-serverapp-c145="" class="tab" :class="{'is-active': MobileDailyBtn}" @click="MobileDailyBtn=true, MobileTaskDaily ='block', MobileGeneralBtn=false, MobileTaskGeneral ='none', MobileWeeklyBtn=false, MobileTaskWeekly ='none'">
            <img
              src="../../public/images/icon/clock.png"
              class="icon_tabs"
            />Daily
          </div>
          <div _ngcontent-serverapp-c145="" class="tab" :class="{'is-active': MobileWeeklyBtn}" @click="MobileWeeklyBtn=true, MobileTaskWeekly ='block', MobileGeneralBtn=false, MobileTaskGeneral ='none', MobileDailyBtn=false, MobileTaskDaily ='none'">
            <img src="../../public/images/icon/calendar.png" class="icon_tabs" />
            Weekly
          </div>
        </div>
        <div
          _ngcontent-serverapp-c145=""
          class="seasonpass-page__tasks-list ng-star-inserted"
        >
          <seasonpass-quests-group
            _ngcontent-serverapp-c145=""
            title="General tasks"
            icon="icon_file-text-bold"
            class="seasonpass-tasks is-active ng-star-inserted"
            _nghost-serverapp-c144=""
            :style="{'display': MobileTaskGeneral}"
          >
            <div _ngcontent-serverapp-c144="" class="seasonpass-tasks__head">
              <div _ngcontent-serverapp-c144="" class="seasonpass-tasks__icon">
                <img
                  src="../../public/images/icon/google-docs.png"
                  class="icon_seasonpass_task"
                />
              </div>
              <div
                _ngcontent-serverapp-c144=""
                class="seasonpass-tasks__title-wrapper"
              >
                <div
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-tasks__title"
                >
                  General tasks
                </div>
                <div
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-tasks__subtitle"
                >
                  One-time tasks
                </div>
              </div>
              <div
                _ngcontent-serverapp-c144=""
                class="seasonpass-tasks__counters"
              >
                <span
                  _ngcontent-serverapp-c144=""
                  class="md-hidden ng-star-inserted"
                  >Completed tasks</span
                >
                0 from
                25
                
              </div>
            </div>
            <cdk-virtual-scroll-viewport
              _ngcontent-serverapp-c144=""
              scroll="vertical"
              maxbufferpx="110"
              class="cdk-virtual-scroll-viewport seasonpass-tasks__scroll cdk-virtual-scrollable scroll scroll_vertical cdk-virtual-scroll-orientation-vertical ng-star-inserted"
            >
              <div
                class="cdk-virtual-scroll-content-wrapper"
                style="transform: translateY(0px)"
              >
                <seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win <span class="strong">5</span> games in Crash with
                        odds above 2x
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 5
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win in Crash <span class="strong">2</span> games in a
                        row
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 2
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Take a prize-winning place in the Skinsrain
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win <span class="strong">20</span> bets in Double
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 20
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Bet on 3 colors in one game Double
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 18
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win <span class="strong">5</span> games in Crash with
                        odds above 5x
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 5
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Activate <span class="strong">2</span> promo codes
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 2
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Buy <span class="strong">2</span> animated avatars
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 2
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Bet on 2 colors in one game Double
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 12
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                >
              </div>
              <div
                class="cdk-virtual-scroll-spacer"
                style="height: 1500px"
              ></div> </cdk-virtual-scroll-viewport
            > </seasonpass-quests-group
          ><seasonpass-quests-group
            _ngcontent-serverapp-c145=""
            title="Daily quests"
            icon="icon_clock-bold"
            class="seasonpass-tasks ng-star-inserted"
            _nghost-serverapp-c144=""
            :style="{'display': MobileTaskDaily}"
          >
            <div _ngcontent-serverapp-c144="" class="seasonpass-tasks__head">
              <div _ngcontent-serverapp-c144="" class="seasonpass-tasks__icon">
                <img
                  src="../../public/images/icon/clock.png"
                  class="icon_seasonpass_task"
                />
              </div>
              <div
                _ngcontent-serverapp-c144=""
                class="seasonpass-tasks__title-wrapper"
              >
                <div
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-tasks__title"
                >
                  Daily quests
                </div>
                <div
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-tasks__subtitle"
                >
                  Update through<span
                    _ngcontent-serverapp-c144=""
                    class="ng-star-inserted"
                    >
                    11:43:59
                    </span
                  >
                </div>
              </div>
              <div
                _ngcontent-serverapp-c144=""
                class="seasonpass-tasks__counters"
              >
                <span
                  _ngcontent-serverapp-c144=""
                  class="md-hidden ng-star-inserted"
                  >Completed tasks</span
                >
                0 from
                8
                
              </div>
            </div>
            <cdk-virtual-scroll-viewport
              _ngcontent-serverapp-c144=""
              scroll="vertical"
              maxbufferpx="110"
              class="cdk-virtual-scroll-viewport seasonpass-tasks__scroll cdk-virtual-scrollable scroll scroll_vertical cdk-virtual-scroll-orientation-vertical ng-star-inserted"
            >
              <div
                class="cdk-virtual-scroll-content-wrapper"
                style="transform: translateY(0px)"
              >
                <seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Send stats to chat <span class="strong">2</span> times
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 2
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Greet admin/moderator in chat
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win in Wheel by betting on a golden color
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 8
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Get <span class="strong">$2</span> deposits from
                        referrals
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 2
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Make a deposit with a secret code
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Drive <span class="strong">5</span> people to the site
                        via "Partnership"
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 5
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win <span class="strong">1</span> games in Crash with
                        odds above 500x
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Top up with <span class="strong">$5</span>
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 5
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                >
              </div>
              <div
                class="cdk-virtual-scroll-spacer"
                style="height: 480px"
              ></div> </cdk-virtual-scroll-viewport
            > </seasonpass-quests-group
          ><seasonpass-quests-group
            _ngcontent-serverapp-c145=""
            title="Weekly quests"
            icon="icon_calendar-bold"
            class="seasonpass-tasks ng-star-inserted"
            _nghost-serverapp-c144=""
            :style="{'display': MobileTaskWeekly}"
          >
            <div _ngcontent-serverapp-c144="" class="seasonpass-tasks__head">
              <div _ngcontent-serverapp-c144="" class="seasonpass-tasks__icon">
                <img
                  src="../../public/images/icon/calendar.png"
                  class="icon_seasonpass_task"
                />
              </div>
              <div
                _ngcontent-serverapp-c144=""
                class="seasonpass-tasks__title-wrapper"
              >
                <div
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-tasks__title"
                >
                  Weekly quests
                </div>
                <div
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-tasks__subtitle"
                >
                  Update through<span
                    _ngcontent-serverapp-c144=""
                    class="ng-star-inserted"
                  >
                    4 days
                    
                    11:44:00
                    </span
                  >
                </div>
              </div>
              <div
                _ngcontent-serverapp-c144=""
                class="seasonpass-tasks__counters"
              >
                <span
                  _ngcontent-serverapp-c144=""
                  class="md-hidden ng-star-inserted"
                  >Completed tasks</span
                >
                0 from
                7
                
              </div>
            </div>
            <cdk-virtual-scroll-viewport
              _ngcontent-serverapp-c144=""
              scroll="vertical"
              maxbufferpx="110"
              class="cdk-virtual-scroll-viewport seasonpass-tasks__scroll cdk-virtual-scrollable scroll scroll_vertical cdk-virtual-scroll-orientation-vertical ng-star-inserted"
            >
              <div
                class="cdk-virtual-scroll-content-wrapper"
                style="transform: translateY(0px)"
              >
                <seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Get <span class="strong">$17</span> deposits from
                        referrals
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 17
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win in Wheel by betting on a golden color
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 8
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win in Crash <span class="strong">10</span> games in a
                        row
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 10
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win <span class="strong">50</span> games in Crash with
                        odds above 2x
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 50
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Win <span class="strong">40</span> games in Crash with
                        odds above 5x
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 40
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Top up with <span class="strong">$15</span>
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 15
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                ><seasonpass-quest
                  _ngcontent-serverapp-c144=""
                  class="seasonpass-task is-disabled ng-star-inserted"
                  _nghost-serverapp-c143=""
                >
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__content"
                  >
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__head"
                    >
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__title"
                      >
                        Drive <span class="strong">14</span> people to the site
                        via "Partnership"
                      </div>
                      <div
                        _ngcontent-serverapp-c143=""
                        class="seasonpass-task__counters ng-star-inserted"
                      >
                        0 / 14
                      </div>
                      
                    </div>
                    
                  </div>
                  <div
                    _ngcontent-serverapp-c143=""
                    class="seasonpass-task__receive is-locked"
                  >
                    
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__icon"
                    >
                      <img
                        src="../../public/images/icon/padlock.png"
                        class="icon_task"
                      />
                    </div>
                    <div
                      _ngcontent-serverapp-c143=""
                      class="seasonpass-task__exp ng-star-inserted"
                    >
                      LVL 1
                      
                    </div>
                    
                  </div> </seasonpass-quest
                >
              </div>
              <div
                class="cdk-virtual-scroll-spacer"
                style="height: 420px"
              ></div> </cdk-virtual-scroll-viewport
            > </seasonpass-quests-group
          >
        </div>
         </seasonpass-quests
      > </seasonpass-home
    >
  </div>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer'
import gsap from 'gsap'

export default {
  components: {
     Footer
  },
  data() {
    return {
        Boxs:[
              {"image": "dfbcf02f-6691-49da-ab17-725374b50868-6387adda05753.png", "icon": "eye", "title": "Random customization"},
              {"image": "a2a985d6-4d70-4b2f-b2f8-eedf97246bbb-63865ffd4f935.png", "icon": "eye", "title": "Rudolf"},
              {"image": "dfbcf02f-6691-49da-ab17-725374b50868-6387adda05753.png", "icon": "eye", "title": "Cat Avatars"},
              {"image": "3217cc9a-87fd-4d2f-99cd-62fa2259c0fa-633ddf334e91d.png", "icon": "lock", "title": "Random skin"},
              {"image": "7936d451-0557-46c0-82fa-97be19a969f3-6387adda2e3b2.png", "icon": "eye", "title": "Cream case"},
              {"image": "0bb20c3a-3b64-4925-969f-7d18c8376580-63865ffd3f458.png", "icon": "eye", "title": "Good boy"},
              {"image": "37a30add-06fe-40b8-aeab-ce9a0bd3c4ce-6387adda2fa70.png", "icon": "eye", "title": "Mystery pistols"},
              {"image": "96eb36dc-06e8-4c5e-80e3-6690791a5728-6387adda0e83b.png", "icon": "eye", "title": "Liquid nitrogen"},
              {"image": "a2969402-6a4b-4143-a37e-fe88e91ac0ca-633eb508f27f4.png", "icon": "eye", "title": "+50% to a deposit from 10$"},
              {"image": "1f2755a8-7651-4310-92a4-b8671df1ca8e-6387adf2d23a5.png", "icon": "eye", "title": "Year 2023"},
              {"image": "dfbcf02f-6691-49da-ab17-725374b50868-6387adda05753.png", "icon": "eye", "title": "Snow avatars"},
              {"image": "8855438a-3a0c-42a7-a956-ad0e59085773-6304c38e069e2.png", "icon": "eye", "title": "AWP farm"},
              {"image": "e250548e-7643-4015-b698-6106f8606ccc-6387adf2eeac9.png", "icon": "eye", "title": "Snowmen"},
              {"image": "d92b5d24-7fb6-4460-b16b-70b43b8f7e39-63865ffe05d8c.png", "icon": "eye", "title": "Holiday mood"},
              {"image": "eb0babd6-68f3-4c06-b410-4933b46be86d-6387adf2d759b.png", "icon": "eye", "title": "Christmas decorations"},
              {"image": "9bab280b-3d3a-4554-b166-077d48f67c32-633458107df97.png", "icon": "eye", "title": "Army skins category"}
          ],
        SlidePx: 0,
        WidthSlide: 0,
        ClickNext: 0,
        BtnBackSlide: false,
        currentTime: {days: 6, hours: 11, minutes: 44, seconds: 22},
        timer: null,
        MobileTaskGeneral: 'block',
        MobileTaskDaily: 'block',
        MobileTaskWeekly: 'block',
        MobileGeneralBtn: true,
        MobileDailyBtn: false,
        MobileWeeklyBtn: false,

    }
  },
  methods: {
    getPhoto(image) {
      return require('../../public/images/'+image)
    },
    updateWidth() {
      this.WidthSlide = this.$refs.MainBanner[0].offsetWidth;
      this.SeasonpassQuestsQroup()
    },
    CheckBtnBack() {
        if(this.ClickNext != 0){
            this.BtnBackSlide = true
        }else{
            this.BtnBackSlide = false
        }
    },
    NextSlide() {
        if(this.ClickNext <= this.Boxs.length-3){
            this.ClickNext++
            var newValue = (Number(this.ClickNext) * this.WidthSlide)*-1
            gsap.to(this.$data, { duration: 0.2, SlidePx: newValue });
        }
        this.CheckBtnBack()
    },
    BackSlide() {
        if(this.ClickNext != 0){
            this.ClickNext--
            var newValue = (Number(this.ClickNext) * this.WidthSlide)*-1
            gsap.to(this.$data, { duration: 0.2, SlidePx: newValue });
        }
        this.CheckBtnBack()
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime.seconds--
        if(this.currentTime.seconds == 0){
            this.currentTime.minutes--
            if(this.currentTime.minutes == 0){
                this.currentTime.hours--
                if(this.currentTime.hours == 0){
                    this.currentTime.days--
                    if(this.currentTime.days < 0){
                        this.stopTimer()
                    }
                    this.currentTime.hours = 24
                }
                
                this.currentTime.minutes = 60 
            }
             
            this.currentTime.seconds = 60 
        }
        
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    },
    SeasonpassQuestsQroup() {
      if(window.screen.width < 991){
        this.MobileTaskDaily= 'none'
        this.MobileTaskWeekly = 'none'
      }else{
        this.MobileTaskDaily= 'block'
        this.MobileTaskWeekly = 'block'
      }
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  mounted() {
    this.updateWidth()
    this.startTimer()
    this.SeasonpassQuestsQroup()
  },
  destroyed(){
    this.stopTimer()
  }

    
};
</script>

<style scoped>
    [_ngcontent-serverApp-c138]:root {
            --gutter: 2rem;
            --gutter-page: 4rem;
            --gutter-shop: 2.5rem;
            --gutter-support: 2.5rem
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
            --gradient-live-drop-start: rgba(38, 49, 91, .45);
            --gradient-live-drop-end: rgba(50, 63, 109, .45);
            position: relative;
            display: block;
            min-width: 19.5rem;
            height: 6.5rem;
            border-radius: 1.2rem;
            overflow: hidden;
            cursor: pointer;
            background: linear-gradient(141.72deg, var(--gradient-live-drop-start) 22.05%, var(--gradient-live-drop-end) 89.64%);
            transition: --gradient-live-drop-start .2s ease-out 0s, --gradient-live-drop-end .2s ease-out 0s
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
        .games-menu-tooltip_header[_ngcontent-serverApp-c114] {
            display: flex
        }

        .games-menu-tooltip_header[_ngcontent-serverApp-c114] .mode-card[_ngcontent-serverApp-c114] {
            margin-right: .8rem
        }

        .games-menu-tooltip_toolbar[_ngcontent-serverApp-c114] {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: .7rem
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

        .seasonpass-page {
            display: block;
            height: 100%;
            width: 100%;
            padding-top: 5rem;
            padding-left: var(--gutter);
            margin-left: calc(var(--gutter) * -1)
        }

        .seasonpass-page .seasonpass-page__header {
            position: relative;
            z-index: 1
        }

        .seasonpass-page .seasonpass-page__timeline {
            position: relative;
            z-index: 2;
            margin-top: 4rem
        }

        @media (hover: hover) {
            .seasonpass-page {
                margin-right: calc(var(--gutter) * -1);
                padding-right: var(--gutter)
            }
        }

        @media all and (max-width: 991px) {
            .seasonpass-page {
                padding: 3rem var(--gutter-page) var(--gutter-page);
                margin: 0
            }

            .seasonpass-page .seasonpass-page__timeline {
                padding: 1rem;
                margin-top: 2rem
            }

            .seasonpass-page .seasonpass-page__tasks {
                margin-top: 1.8rem
            }

            .seasonpass-page .seasonpass-page__tasks-list {
                margin-top: 1.5rem
            }
        }

        @media all and (max-width: 767px) {
            .seasonpass-page .seasonpass-page__timeline {
                padding-top: 1rem
            }
        }

        .seasonpass-level {
            position: relative;
            display: flex;
            width: 100%;
            height: 8rem;
            border-radius: 1.2rem;
            overflow: hidden
        }

        .seasonpass-level .seasonpass-exp-progress__counters span.preload {
            margin-right: .4rem;
            width: 4rem;
            height: 1.7rem;
            background-color: #20274b1a
        }

        .seasonpass-level .seasonpass-exp-progress__counters span.preload:last-child {
            margin-left: .4rem
        }

        .seasonpass-level .seasonpass-level__current {
            z-index: 1;
            display: flex;
            align-items: center;
            flex: 0 0 auto;
            width: 18rem;
            height: auto;
            padding-left: 2rem;
            padding-right: 5rem;
            background-image: linear-gradient(73.36deg, rgba(133, 150, 196, .23) 9.02%, rgba(162, 182, 255, .27) 100.66%);
            -webkit-backdrop-filter: blur(.8rem);
            backdrop-filter: blur(.8rem);
            border-radius: inherit;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000;
            transform: translateZ(0)
        }

        .seasonpass-level .seasonpass-level__number {
            display: block;
            flex-shrink: 0;
            width: 5.2rem;
            height: 5.2rem;
            background-color: transparent;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
            color: #e4edff;
            font-size: 2rem;
            font-weight: 600;
            line-height: 4.6rem;
            text-transform: uppercase;
            text-align: center;
            text-shadow: 0 .1rem 0 rgba(0, 0, 0, .1)
        }

        .seasonpass-level .seasonpass-level__label {
            display: block;
            width: auto;
            margin-left: .8rem;
            color: #e0f8ff;
            font-size: 1.6rem;
            font-weight: 900;
            line-height: 1.8rem;
            text-transform: uppercase
        }

        .seasonpass-level .seasonpass-level__details {
            display: flex;
            align-items: center;
            width: 100%;
            height: auto;
            padding: 0 2rem;
            background-color: #8488ec30;
            -webkit-backdrop-filter: blur(1.1rem);
            backdrop-filter: blur(1.1rem);
            border: .1rem solid rgba(145, 149, 236, .08);
            box-shadow: 0 1.4rem 2.4rem #0000000a;
            border-radius: inherit;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000;
            transform: translateZ(0)
        }

        .seasonpass-level .seasonpass-level__more {
            z-index: 1;
            width: auto;
            height: 3.6rem;
            margin-left: 2rem;
            color: #4c4f63;
            background-color: #e6c991;
            border-color: #e6c991;
            border-radius: .8rem;
            font-size: 1.3rem;
            font-weight: 900
        }

        .seasonpass-level .seasonpass-level__more:hover {
            color: #79716c;
            background-color: #f2dbae;
            border-color: #f2dbae
        }

        @media all and (max-width: 767px) {
            .seasonpass-level {
                flex-flow: column;
                height: 9.4rem;
                -webkit-backface-visibility: hidden;
                -webkit-perspective: 1000;
                -webkit-transform: translate3d(0, 0, 0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                perspective: 1000;
                transform: translateZ(0)
            }

            .seasonpass-level .seasonpass-level__current {
                width: 100%;
                height: 4.4rem;
                background-color: transparent;
                background-image: none;
                -webkit-backdrop-filter: none;
                backdrop-filter: none;
                padding: 0 1.2rem;
                border-radius: 1rem 1rem 0 0;
                border-image: linear-gradient(to right, rgba(146, 217, 222, .23) 9.02%, rgba(67, 107, 132, .27) 100.66%) 100% 0
            }

            .seasonpass-level .seasonpass-level__current:after {
                content: "";
                position: absolute;
                bottom: -.1rem;
                left: 0;
                right: 0;
                display: block;
                width: 100%;
                height: 1px;
                background: rgba(34, 36, 85, .19)
            }

            .seasonpass-level .seasonpass-level__number {
                width: 2.6rem;
                height: 2.6rem;
                font-size: 1.2rem;
                line-height: 2.2rem
            }

            .seasonpass-level .seasonpass-level__label {
                width: auto;
                margin-left: .5rem;
                font-size: 1.2rem;
                line-height: 1.6rem
            }

            .seasonpass-level .seasonpass-level__details {
                z-index: 1;
                height: 100%;
                padding: 0 1.2rem;
                background-color: transparent;
                background-image: none;
                -webkit-backdrop-filter: none;
                backdrop-filter: none;
                border: none;
                border-radius: 0 0 1rem 1rem;
                box-shadow: none
            }

            .seasonpass-level .seasonpass-level__more {
                position: absolute;
                top: -3.6rem;
                right: .6rem;
                height: 2.7rem;
                padding: 0 1.2rem;
                border-radius: .6rem;
                font-size: 1.1rem;
                font-weight: 900;
                line-height: 2.7rem
            }
        }

        .seasonpass-exp-progress {
            position: relative;
            display: block;
            width: 100%;
            height: auto
        }

        .seasonpass-exp-progress .seasonpass-exp-progress__head {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: center
        }

        .seasonpass-exp-progress .seasonpass-exp-progress__title {
            color: #d8d8ff;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 1.8rem
        }

        .seasonpass-exp-progress .seasonpass-exp-progress__counters {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            margin-left: auto;
            color: #b8bce6;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.7rem;
            text-transform: uppercase;
            white-space: nowrap
        }

        .seasonpass-exp-progress .seasonpass-exp-progress__counters .strong {
            display: inline-block;
            color: #f6f1c9;
            margin-right: .3rem
        }

        .seasonpass-exp-progress .seasonpass-exp-progress__icon {
            width: 2.3rem;
            height: 2.3rem;
            margin-right: .4rem;
            background-size: contain;
            background-repeat: no-repeat
        }

        .seasonpass-exp-progress .seasonpass-exp-progress__progress {
            margin-top: .7rem;
            border-radius: .2rem;
            background-color: #1a213a4d
        }

        @media all and (max-width: 767px) {
            .seasonpass-exp-progress .seasonpass-exp-progress__icon {
                margin-right: .5rem;
                width: 1.6rem;
                height: 1.6rem
            }

            .seasonpass-exp-progress .seasonpass-exp-progress__counters {
                font-size: 1.2rem;
                line-height: 1.4rem
            }

            .seasonpass-exp-progress .seasonpass-exp-progress__progress {
                margin-top: .8rem
            }
        }

        @media all and (max-width: 424px) {
            .seasonpass-exp-progress .seasonpass-exp-progress__icon {
                display: none
            }
        }

        .seasonpass-header {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            height: 30.4rem;
            border-radius: 1.2rem
        }

        .seasonpass-header:before,
        .seasonpass-header:after {
            content: "";
            position: absolute;
            display: block;
            background-repeat: no-repeat;
            pointer-events: none;
            border-radius: inherit
        }

        .seasonpass-header .seasonpass-header__frames {
            position: absolute;
            display: block;
            pointer-events: none
        }

        .seasonpass-header .seasonpass-header__frames:before,
        .seasonpass-header .seasonpass-header__frames:after {
            content: "";
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat
        }

        .seasonpass-header .seasonpass-header__logo {
            position: relative;
            display: block;
            flex: 0 0 auto
        }

        .seasonpass-header .seasonpass-header__logo:before,
        .seasonpass-header .seasonpass-header__logo:after {
            content: "";
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            pointer-events: none
        }

        .seasonpass-header .seasonpass-header__logo:before {
            z-index: 1;
            background-size: contain;
            background-repeat: no-repeat
        }

        .seasonpass-header .seasonpass-header__logo:after {
            z-index: -1;
            border-radius: 50%
        }

        .seasonpass-header .seasonpass-header__content {
            z-index: 4;
            display: block;
            width: 100%;
            height: auto;
            margin-left: 4rem;
            margin-right: 35.5rem
        }

        .seasonpass-header .seasonpass-header__head {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            height: auto
        }

        .seasonpass-header .seasonpass-header__head .seasonpass-header__subtitle span.preload {
            margin-left: 1rem;
            width: 4rem;
            height: 1em;
            background-color: #323e69
        }

        .seasonpass-header .seasonpass-header__head .seasonpass-header__title.preload {
            width: 43.3rem;
            height: 1em;
            background-color: #323e69
        }

        .seasonpass-header .seasonpass-header__head .seasonpass-header__subtitle span.preload,
        .seasonpass-header .seasonpass-header__head .seasonpass-header__title.preload {
            background-color: #20274b1a
        }

        .seasonpass-header .seasonpass-header__title-wrapper {
            position: relative;
            display: block;
            margin-right: 1rem;
            -webkit-user-select: none;
            user-select: none
        }

        .seasonpass-header .seasonpass-header__title {
            display: block;
            color: #fff;
            font-size: 6.9rem;
            font-weight: 900;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: -.02em;
            white-space: nowrap
        }

        .seasonpass-header .seasonpass-header__subtitle {
            display: flex;
            align-items: center;
            font-size: 3.4rem;
            font-weight: 400;
            line-height: 1;
            text-transform: uppercase
        }

        .seasonpass-header .seasonpass-header__timer {
            width: auto
        }

        .seasonpass-header .seasonpass-header__level,
        .seasonpass-header .seasonpass-header__not-logged {
            margin-top: 2.5rem
        }

        .seasonpass-header .seasonpass-header__gaben {
            position: absolute;
            display: block;
            background-size: 100%;
            background-repeat: no-repeat;
            pointer-events: none
        }

        @media all and (max-width: 991px) {
            .seasonpass-header .seasonpass-header__head {
                padding-left: 12.4rem
            }

            .seasonpass-header .seasonpass-header__title {
                font-size: 4.9rem
            }

            .seasonpass-header .seasonpass-header__content {
                margin-right: 4rem
            }
        }

        @media all and (max-width: 767px) {
            .seasonpass-header .seasonpass-header__content {
                margin: 0 1.6rem
            }

            .seasonpass-header .seasonpass-header__head {
                flex-direction: column;
                align-items: flex-start
            }

            .seasonpass-header .seasonpass-header__subtitle {
                font-size: 1.6rem
            }

            .seasonpass-header .seasonpass-header__title {
                font-size: 2.2rem
            }
        }

        .seasonpass-header_winter {
            background-image: linear-gradient(280.39deg, #7233F8 16.12%, #6B8CFF 83.3%)
        }

        .seasonpass-header_winter:before {
            top: -3.9rem;
            left: 0;
            right: -2rem;
            bottom: -4rem;
            z-index: 3;
            background-image: url(../../public/images/garland-left.dd1cb1177f0c3112.webp), url(../../public/images/garland-right.465e9532f72aaa40.webp), url(../../public/images/garland-middle.9c7e35e84616cd0c.webp), url(../../public/images/snow-left.ab1477c673bdc0e3.webp), url(../../public/images/snow-right.af3c1e0c35a791ac.webp);
            background-size: 32.3rem 8.4rem, 12.1rem 7.2rem, 26.6rem 6.6rem, 24rem 5.5rem, 20.1rem 5.5rem;
            background-position: left top, right top, center top, 8.7rem 99%, calc(100% - 28.6rem) 97%
        }

        .seasonpass-header_winter:after {
            inset: 0;
            z-index: 1;
            background-image: url(../../public/images/bg-left.658552d3996ec7a6.webp), url(../../public/images/bg-right.47c8f00dba162659.webp), url(../../public/images/snowflakes.aa5bf40e0bb5480b.webp);
            background-size: contain, contain, 104.1rem 24.6rem;
            background-position: left, right, 2.6rem 3.3rem;
            background-repeat: no-repeat;
            pointer-events: none
        }

        .seasonpass-header_winter .seasonpass-header__logo {
            z-index: 4;
            width: 21.5rem;
            height: 20rem;
            margin-left: 4rem
        }

        .seasonpass-header_winter .seasonpass-header__logo:before {
            background-image: url(../../public/images/logo.c5db62173b8013bf.webp)
        }

        .seasonpass-header_winter .seasonpass-header__logo:after {
            background-color: #a6a5ff66;
            filter: blur(2rem)
        }

        .seasonpass-header_winter .seasonpass-header__gaben {
            top: -1.5rem;
            right: 2rem;
            z-index: 5;
            width: 30.1rem;
            height: 42.3rem;
            background-image: url(../../public/images/gabe.a07776fb459c814d.webp)
        }

        .seasonpass-header_winter .seasonpass-header__frames {
            top: -.2rem;
            bottom: -.1rem;
            left: 0;
            right: 0;
            z-index: 2
        }

        .seasonpass-header_winter .seasonpass-header__frames:before,
        .seasonpass-header_winter .seasonpass-header__frames:after {
            background-size: contain
        }

        .seasonpass-header_winter .seasonpass-header__frames:before {
            background-position: left;
            background-image: url(../../public/images/frame-left.c66230300667de2f.webp)
        }

        .seasonpass-header_winter .seasonpass-header__frames:after {
            background-position: right;
            background-image: url(../../public/images/frame-right.d457946468fe5545.webp)
        }

        .seasonpass-header_winter .seasonpass-header__subtitle {
            color: #ffbfbf
        }

        .seasonpass-header_winter .seasonpass-level .seasonpass-level__current {
            background: linear-gradient(73.36deg, rgba(230, 243, 255, .46) 9.03%, rgba(162, 188, 255, .64) 57.23%);
            -webkit-backdrop-filter: blur(.8rem);
            backdrop-filter: blur(.8rem)
        }

        .seasonpass-header_winter .seasonpass-level .seasonpass-level__number {
            color: #fff9e4
        }

        .seasonpass-header_winter .seasonpass-level .seasonpass-level__label {
            color: #dee7ff
        }

        .seasonpass-header_winter .seasonpass-level .seasonpass-level__details {
            background: rgba(133, 182, 255, .36);
            border: .1rem solid rgba(145, 149, 236, .08);
            box-shadow: 0 1.4rem 2.4rem #0000000a;
            -webkit-backdrop-filter: blur(.5rem);
            backdrop-filter: blur(.5rem)
        }

        .seasonpass-header_winter .seasonpass-level .seasonpass-level__more {
            background-color: #a7d5ff;
            border-color: #a7d5ff;
            color: #54689d
        }

        .seasonpass-header_winter .seasonpass-level .seasonpass-level__more:hover {
            background-color: #bfe0ff;
            border-color: #bfe0ff;
            color: #577ad3
        }

        .seasonpass-header_winter .seasonpass-exp-progress .seasonpass-exp-progress__title {
            color: #cfe2ff
        }

        .seasonpass-header_winter .seasonpass-exp-progress .seasonpass-exp-progress__counters {
            color: #ffa5b5
        }

        .seasonpass-header_winter .seasonpass-exp-progress .seasonpass-exp-progress__counters .strong {
            color: #fffdf0
        }

        .seasonpass-header_winter .seasonpass-exp-progress .seasonpass-exp-progress__progress {
            background-color: #2c207938
        }

        .seasonpass-header_winter .seasonpass-exp-progress .seasonpass-exp-progress__progress .progress__bar {
            background-image: linear-gradient(270deg, #FFA4CF 0%, #D095FF 100%)
        }

        .seasonpass-header_winter .not-logged {
            background: rgba(133, 182, 255, .36);
            -webkit-backdrop-filter: blur(.55rem);
            backdrop-filter: blur(.55rem)
        }

        .seasonpass-header_winter .not-logged .not-logged__button {
            background-color: #a7d5ff;
            border-color: #a7d5ff;
            color: #54689d
        }

        .seasonpass-header_winter .not-logged .not-logged__button:hover {
            background-color: #bfe0ff;
            border-color: #bfe0ff;
            color: #577ad3
        }

        @media all and (max-width: 991px) {
            .seasonpass-header_winter {
                height: 27.4rem
            }

            .seasonpass-header_winter:after {
                background-image: url(../../public/images/bg-left.658552d3996ec7a6.webp), url(../../public/images/snowflakes.aa5bf40e0bb5480b.webp);
                background-size: auto 100%, 104.1rem 24.6rem;
                background-position: left, 2.6rem 3.3rem
            }

            .seasonpass-header_winter .seasonpass-header__logo {
                position: absolute;
                top: 3.6rem;
                left: 3rem;
                width: 12.4rem;
                height: 11.535rem;
                margin-left: 0
            }

            .seasonpass-header_winter .seasonpass-header__gaben {
                display: none
            }
        }

        @media all and (max-width: 767px) {
            .seasonpass-header_winter {
                height: 25.6rem
            }

            .seasonpass-header_winter:before {
                background-image: url(../../public/images/garland-right.465e9532f72aaa40.webp);
                background-size: 12.1rem 7.2rem;
                background-position: right top
            }

            .seasonpass-header_winter:after {
                background-image: url(../../public/images/bg-left.658552d3996ec7a6.webp);
                background-size: auto 100%;
                background-position: left
            }

            .seasonpass-header_winter .seasonpass-header__frames:before {
                display: none
            }

            .seasonpass-header_winter .seasonpass-header__logo {
                top: 2.3rem;
                left: 1.6rem;
                width: 11rem;
                height: 10.9rem
            }

            .seasonpass-header_winter .seasonpass-level {
                background: rgba(27, 37, 126, .46);
                -webkit-backdrop-filter: blur(.55rem);
                backdrop-filter: blur(.55rem)
            }

            .seasonpass-header_winter .seasonpass-level .seasonpass-level__current,
            .seasonpass-header_winter .seasonpass-level .seasonpass-level__details {
                background: transparent;
                -webkit-backdrop-filter: none;
                backdrop-filter: none
            }

            .seasonpass-header_winter .not-logged {
                background: rgba(27, 37, 126, .46);
                -webkit-backdrop-filter: blur(.55rem);
                backdrop-filter: blur(.55rem)
            }
        }

        .seasonpass .not-logged {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            width: 100%;
            height: 8rem;
            border-radius: 1.2rem;
            background: linear-gradient(73.36deg, rgba(145, 133, 196, .23) 9.02%, rgba(162, 176, 255, .27) 100.66%);
            -webkit-backdrop-filter: blur(.8rem);
            backdrop-filter: blur(.8rem);
            padding-left: 2.2rem;
            padding-right: 1.7rem;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000;
            transform: translateZ(0)
        }

        .seasonpass .not-logged .not-logged__content {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            align-content: center
        }

        .seasonpass .not-logged .not-logged__icon {
            width: 3.4rem;
            height: 3.4rem;
            flex-shrink: 0;
            margin-right: 1.8rem;
            font-size: 3.4rem
        }

        .seasonpass .not-logged .not-logged__title {
            color: #ffdbc7;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.3rem
        }

        .seasonpass .not-logged .not-logged__subtitle {
            color: #fff;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1.9rem
        }

        .seasonpass .not-logged .not-logged__button {
            border-color: #e5c991;
            background-color: #e5c991;
            color: #4c4e63;
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1.8rem
        }

        .seasonpass .not-logged .not-logged__button .icon {
            font-size: 2.4rem
        }

        .seasonpass .not-logged .not-logged__button:hover {
            color: #79716c;
            background-color: #f2dbae;
            border-color: #f2dbae
        }

        @media all and (max-width: 767px) {
            .seasonpass .not-logged {
                height: 9.2rem;
                padding-left: 1.8rem;
                padding-right: 2.2rem
            }

            .seasonpass .not-logged .not-logged__icon {
                width: 3.2rem;
                height: 3.2rem;
                font-size: 3.2rem;
                margin-right: 1.2rem
            }

            .seasonpass .not-logged .not-logged__title {
                font-size: 1.6rem;
                line-height: 2.1rem
            }
        }

        @media all and (max-width: 699px) {
            .seasonpass .not-logged .not-logged__button {
                width: 4.8rem;
                padding: 0
            }

            .seasonpass .not-logged .not-logged__button .icon {
                margin: 0;
                font-size: 2rem
            }

            .seasonpass .not-logged .not-logged__button .button__text {
                display: none
            }
        }

        .seasonpass-timeline {
            display: block;
            width: 100%;
            height: auto;
            padding: 2rem;
            background-color: #1c2344;
            background-color: #1419334d;
            -webkit-backdrop-filter: blur(1.4rem);
            backdrop-filter: blur(1.4rem);
            border-radius: 1.2rem;
            overflow: hidden;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000;
            transform: translateZ(0)
        }

        .seasonpass-timeline .seasonpass-timeline__slider {
            position: relative;
            display: block;
            width: 100%;
            height: auto
        }

        .seasonpass-timeline .seasonpass-timeline__content {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: flex-start;
            width: 100%;
            height: auto;
            padding-bottom: 2.2rem;
            -webkit-mask-image: linear-gradient(90deg, rgba(20, 22, 51, 0) 0%, #141933 4%, #141933 96%, rgba(20, 25, 51, 0) 100%);
            mask-image: linear-gradient(90deg, rgba(20, 22, 51, 0) 0%, #141933 4%, #141933 96%, rgba(20, 25, 51, 0) 100%)
        }

        .seasonpass-timeline .seasonpass-timeline__content.is-at-start {
            -webkit-mask-image: linear-gradient(270deg, rgba(20, 25, 51, 0) 0%, #141933 4%);
            mask-image: linear-gradient(270deg, rgba(20, 25, 51, 0) 0%, #141933 4%)
        }

        .seasonpass-timeline .seasonpass-timeline__content.is-at-end {
            -webkit-mask-image: linear-gradient(90deg, rgba(20, 22, 51, 0) 0%, #141933 4%);
            mask-image: linear-gradient(90deg, rgba(20, 22, 51, 0) 0%, #141933 4%)
        }

        .seasonpass-timeline .seasonpass-timeline__control {
            position: absolute;
            top: 7.4rem;
            z-index: 1;
            display: inline-block;
            width: 4.6rem;
            height: 4.6rem;
            color: #8b9ab8;
            background-color: #2b3359;
            border-color: #2b3359;
            box-shadow: 0 1.2rem 2rem #151b394d;
            border-radius: 1.2rem;
            transition: opacity .2s ease-out 0s
        }

        .seasonpass-timeline .seasonpass-timeline__control:hover {
            color: #c0c8e9;
            background-color: #39426c;
            border-color: #39426c
        }

        .seasonpass-timeline .seasonpass-timeline__control.is-hidden {
            opacity: 0
        }

        .seasonpass-timeline .seasonpass-timeline__control.seasonpass-timeline__control_next {
            right: 0
        }

        .seasonpass-timeline .seasonpass-timeline__control.seasonpass-timeline__control_prev {
            left: 0
        }

        .seasonpass-timeline .seasonpass-timeline__progress {
            margin-top: 2rem
        }

        @media all and (max-width: 991px) {
            .seasonpass-timeline {
                overflow: visible
            }

            .seasonpass-timeline .seasonpass-timeline__content {
                -webkit-mask-image: linear-gradient(90deg, rgba(20, 22, 51, 0) 0%, rgb(20, 25, 51) 10%, rgb(20, 25, 51) 90%, rgba(20, 25, 51, 0) 100%);
                mask-image: linear-gradient(90deg, rgba(20, 22, 51, 0) 0%, rgb(20, 25, 51) 10%, rgb(20, 25, 51) 90%, rgba(20, 25, 51, 0) 100%)
            }

            .seasonpass-timeline .seasonpass-timeline__control.seasonpass-timeline__control_next {
                right: -.8rem
            }

            .seasonpass-timeline .seasonpass-timeline__control.seasonpass-timeline__control_prev {
                left: -.8rem
            }

            .seasonpass-timeline .seasonpass-timeline__progress {
                margin: 3rem 1.5rem 0
            }
        }

        @media all and (max-width: 767px) {
            .seasonpass-timeline .seasonpass-timeline__control {
                top: 4.7rem;
                width: 3rem;
                height: 3rem;
                border-radius: .8rem;
                font-size: 1rem
            }
        }

        .progress_silver {
            background-color: #293258;
            border-radius: .6rem;
            color: #fff;
            font-size: 1.3rem;
            font-weight: 500;
            text-align: center
        }

        .progress_silver .progress__text {
            position: absolute;
            inset: 0;
            z-index: 2;
            margin: auto;
            color: #303a61
        }

        .progress_silver .progress__text_back {
            color: #8d98c3
        }

        .progress_silver .progress__bar {
            position: relative;
            background-image: linear-gradient(90deg, #c4d6f3 0%, #7f85dd 100%)
        }

        .progress_silver .progress__bar.has-pointer {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0
        }

        .progress_silver .progress__bar.has-pointer:before {
            content: "";
            position: absolute;
            top: -1.6rem;
            right: 0;
            display: block;
            width: .2rem;
            height: 1.6rem;
            background-color: #7f85dd
        }

        @media all and (max-width: 991px) {
            .progress_silver {
                border-radius: .2rem;
                color: #8d98c3
            }

            .progress_silver.progress_lg {
                height: .8rem;
                line-height: .8rem
            }

            .progress_silver .progress__text {
                top: -2rem;
                color: #8d98c3
            }

            .progress_silver .progress__bar:before {
                display: none
            }

            .progress_silver .progress__text_back {
                display: none
            }
        }

        .shield_blue {
            background-image: url(../../public/images/level-blue.c4e2d65420a1895c.svg)
        }

        .shield_yellow {
        }

        .shield_green {
        }
        [_ngcontent-serverApp-c142]:root {
            --gutter: 2rem;
            --gutter-page: 4rem;
            --gutter-shop: 2.5rem;
            --gutter-support: 2.5rem
        }

        @media all and (max-width: 991px) {
            [_ngcontent-serverApp-c142]:root {
                --gutter: 1.5rem;
                --gutter-page: 2rem
            }
        }

        [_nghost-serverApp-c142] {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            height: auto;
            -webkit-user-select: none;
            user-select: none
        }

        .seasonpass-timer_summer[_nghost-serverApp-c142] .seasonpass-timer__head[_ngcontent-serverApp-c142] {
            color: #becfdf
        }

        .seasonpass-timer_summer[_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] {
            background-color: #1a2d7466;
            box-shadow: none
        }

        .seasonpass-timer_summer[_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] {
            background-color: #1a2d744d
        }

        .seasonpass-timer_summer[_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #87b4dd
        }

        .seasonpass-timer_summer[_nghost-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #cfe5f9
        }

        .seasonpass-timer_summer[_nghost-serverApp-c142] .seasonpass-timer__label[_ngcontent-serverApp-c142] {
            color: #88a8e6
        }

        .seasonpass-timer_autumn[_nghost-serverApp-c142] .seasonpass-timer__head[_ngcontent-serverApp-c142] {
            color: #ffe1c5
        }

        .seasonpass-timer_autumn[_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] {
            background-color: #6c2a2a66;
            box-shadow: none
        }

        .seasonpass-timer_autumn[_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] {
            background-color: #7a27274d
        }

        .seasonpass-timer_autumn[_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #dd9c87
        }

        .seasonpass-timer_autumn[_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] .seasonpass-timer__label[_ngcontent-serverApp-c142] {
            color: #e38874
        }

        .seasonpass-timer_autumn[_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #f9e3cf
        }

        .seasonpass-timer_autumn[_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] .seasonpass-timer__label[_ngcontent-serverApp-c142] {
            color: #e5aa88
        }

        .seasonpass-timer_winter[_nghost-serverApp-c142] .seasonpass-timer__head[_ngcontent-serverApp-c142] {
            color: #c6c5ff
        }

        .seasonpass-timer_winter[_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] {
            box-shadow: none;
            background-color: #18175266;
            -webkit-backdrop-filter: blur(.6rem);
            backdrop-filter: blur(.6rem)
        }

        .seasonpass-timer_winter[_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] {
            background-color: #301f604d
        }

        .seasonpass-timer_winter[_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #afa9f8
        }

        .seasonpass-timer_winter[_nghost-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #e3eeff
        }

        .seasonpass-timer_winter[_nghost-serverApp-c142] .seasonpass-timer__label[_ngcontent-serverApp-c142] {
            color: #a9b1f8
        }

        [_nghost-serverApp-c142] .seasonpass-timer__value.preload[_ngcontent-serverApp-c142] {
            box-shadow: none;
            width: 2.6rem;
            height: 1em;
            background-color: #13132f1a
        }

        [_nghost-serverApp-c142] .seasonpass-timer__head[_ngcontent-serverApp-c142] {
            display: block;
            width: 100%;
            height: 1rem;
            color: #cebedf;
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.4rem;
            text-transform: uppercase;
            text-align: right
        }

        [_nghost-serverApp-c142] .seasonpass-timer__content[_ngcontent-serverApp-c142] {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
            width: auto;
            height: auto;
            margin-top: 1.4rem
        }

        [_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 5.4rem;
            height: 7.4rem;
            background-color: #13132f66;
            border-radius: .8rem;
            box-shadow: 0 1.4rem 1.4rem #1a26352b;
            -webkit-backdrop-filter: blur(2.4rem);
            backdrop-filter: blur(2.4rem);
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000;
            transform: translateZ(0)
        }

        [_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142]:first-child {
            width: 6rem
        }

        [_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142]+.seasonpass-timer__cell[_ngcontent-serverApp-c142] {
            margin-left: .5rem
        }

        [_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] {
            background-color: #13132f4d
        }

        [_nghost-serverApp-c142] .seasonpass-timer__cell.is-muted[_ngcontent-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #8e90bd
        }

        [_nghost-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
            color: #cac6df;
            font-family: DIN Pro Cond;
            font-size: 3.6rem;
            font-weight: 300;
            line-height: 1;
            text-transform: uppercase
        }

        [_nghost-serverApp-c142] .seasonpass-timer__label[_ngcontent-serverApp-c142] {
            margin-top: .4rem;
            color: #727696;
            font-size: .9rem;
            font-weight: 500;
            line-height: 1.1rem;
            text-transform: uppercase
        }

        @media all and (max-width: 991px) {
            [_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] {
                width: 4.9rem;
                height: 7rem
            }

            [_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142]:first-child {
                width: 5.5rem
            }

            [_nghost-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
                font-size: 2.6rem
            }
        }

        @media all and (max-width: 767px) {
            [_nghost-serverApp-c142] .seasonpass-timer__head[_ngcontent-serverApp-c142] {
                display: none
            }

            [_nghost-serverApp-c142] .seasonpass-timer__content[_ngcontent-serverApp-c142] {
                margin-top: .5rem
            }

            [_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142] {
                width: 4rem;
                height: 5rem
            }

            [_nghost-serverApp-c142] .seasonpass-timer__cell[_ngcontent-serverApp-c142]:first-child {
                width: 4rem
            }

            [_nghost-serverApp-c142] .seasonpass-timer__value[_ngcontent-serverApp-c142] {
                font-size: 2.2rem
            }

            [_nghost-serverApp-c142] .seasonpass-timer__value.preload[_ngcontent-serverApp-c142] {
                width: 1.5rem
            }

            [_nghost-serverApp-c142] .seasonpass-timer__label[_ngcontent-serverApp-c142] {
                margin-top: 0;
                font-size: .7rem
            }
        }
        [_ngcontent-serverApp-c145]:root {
            --gutter: 2rem;
            --gutter-page: 4rem;
            --gutter-shop: 2.5rem;
            --gutter-support: 2.5rem
        }

        @media all and (max-width: 991px) {
            [_ngcontent-serverApp-c145]:root {
                --gutter: 1.5rem;
                --gutter-page: 2rem
            }
        }

        [_nghost-serverApp-c145] {
            display: block;
            width: 100%;
            height: auto
        }

        .seasonpass-page__tasks-list[_ngcontent-serverApp-c145] {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: stretch;
            gap: 1rem;
            margin-top: 2rem
        }

        .seasonpass-tabs[_ngcontent-serverApp-c145] {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            border-bottom: .1rem #2C345B solid
        }

        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab[_ngcontent-serverApp-c145] {
            position: relative;
            display: flex;
            align-items: baseline;
            width: 33.333%;
            height: 3.2rem;
            color: #8698ba;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 2rem;
            cursor: pointer;
            transition: color .2s ease-out 0s
        }

        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab[_ngcontent-serverApp-c145]:not(:last-child) {
            margin-right: 1.7rem
        }

        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab[_ngcontent-serverApp-c145] .icon[_ngcontent-serverApp-c145] {
            margin-right: .7rem
        }

        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab[_ngcontent-serverApp-c145]:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -.1rem;
            width: 0%;
            height: .1rem;
            background-color: #ffba7a;
            will-change: width;
            transition: width .2s ease-out 0s
        }

        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab[_ngcontent-serverApp-c145]:hover,
        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab.is-active[_ngcontent-serverApp-c145] {
            color: #fff
        }

        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab[_ngcontent-serverApp-c145]:hover:before,
        .seasonpass-tabs[_ngcontent-serverApp-c145] .tab.is-active[_ngcontent-serverApp-c145]:before {
            width: 100%
        }

        @media all and (min-width: 992px) {
            .seasonpass-tabs[_ngcontent-serverApp-c145] {
                display: none
            }
        }

        @media all and (max-width: 424px) {
            .seasonpass-tabs[_ngcontent-serverApp-c145] .tab[_ngcontent-serverApp-c145] {
                font-size: 1.3rem
            }
        }
        [_ngcontent-serverApp-c141]:root {
            --gutter: 2rem;
            --gutter-page: 4rem;
            --gutter-shop: 2.5rem;
            --gutter-support: 2.5rem
        }

        @media all and (max-width: 991px) {
            [_ngcontent-serverApp-c141]:root {
                --gutter: 1.5rem;
                --gutter-page: 2rem
            }
        }

        @property --gradient-color1 {
            syntax: "<color>";
            initial-value: #21274D;
            inherits: false;
        }

        @property --gradient-color2 {
            syntax: "<color>";
            initial-value: #242F50;
            inherits: false;
        }

        [_nghost-serverApp-c141] {
            --gradient-color1: #21274D;
            --gradient-color2: #242F50;
            position: relative;
            z-index: 1;
            display: block;
            width: 16rem;
            height: 20rem;
            flex-grow: 0;
            flex-shrink: 0;
            margin: 0 .1rem;
            background-color: #20274c;
            background-image: linear-gradient(180deg, var(--gradient-color1), var(--gradient-color2));
            border-radius: .6rem;
            text-align: center;
            transition: --gradient-color1 .2s ease-out 0s, --gradient-color2 .2s ease-out 0s
        }

        [_nghost-serverApp-c141]:hover {
            --gradient-color1: rgba(37, 44, 77, 1);
            --gradient-color2: rgba(46, 58, 92, 1)
        }

        [_nghost-serverApp-c141]:hover .seasonpass-reward__picture[_ngcontent-serverApp-c141] {
            transform: translateY(-.4rem)
        }

        .is-received[_nghost-serverApp-c141] .seasonpass-reward__status[_ngcontent-serverApp-c141] {
            opacity: 1;
            visibility: visible
        }

        .is-received[_nghost-serverApp-c141] .seasonpass-reward__action[_ngcontent-serverApp-c141] {
            padding: 0 2rem;
            min-width: 10.8rem;
            color: #72e0e0;
            background-color: #35476c;
            border-color: #35476c;
            cursor: default
        }

        .is-received[_nghost-serverApp-c141] .seasonpass-reward__picture[_ngcontent-serverApp-c141] {
            opacity: .3
        }

        .is-available[_nghost-serverApp-c141] {
            --gradient-color1: #273055;
            --gradient-color2: #2E4064;
            --gradient-color3: var(--gradient-color1);
            z-index: 1;
            background-image: linear-gradient(180deg, var(--gradient-color1), var(--gradient-color2))
        }

        .is-available[_nghost-serverApp-c141]:hover {
            --gradient-color1: #2A345C;
            --gradient-color2: #31446B;
            --gradient-color3: var(--gradient-color1)
        }

        .is-available[_nghost-serverApp-c141]:before,
        .is-available[_nghost-serverApp-c141]:after {
            content: "";
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            margin: auto;
            border-radius: inherit
        }

        .is-available[_nghost-serverApp-c141]:before {
            z-index: -2;
            border: .2rem solid #446d87
        }

        .is-available[_nghost-serverApp-c141]:after {
            z-index: -1;
            border-radius: .5rem;
            background-image: linear-gradient(180deg, var(--gradient-color3), transparent)
        }

        .is-available[_nghost-serverApp-c141] .seasonpass-reward__action[_ngcontent-serverApp-c141] {
            min-width: 10.8rem;
            color: #dff;
            background-color: #51a6aa;
            border-color: #51a6aa
        }

        .is-available[_nghost-serverApp-c141] .seasonpass-reward__action[_ngcontent-serverApp-c141]:hover {
            color: #fff;
            background-color: #70c6ca;
            border-color: #70c6ca
        }

        .is-available[_nghost-serverApp-c141] .seasonpass-reward__picture[_ngcontent-serverApp-c141] {
            opacity: 1
        }

        .is-current[_nghost-serverApp-c141] {
            --gradient-color1: #354867;
            --gradient-color2: #385272;
            --gradient-color3: var(--gradient-color1);
            z-index: 1;
            background-image: linear-gradient(180deg, var(--gradient-color1), var(--gradient-color2))
        }

        .is-current[_nghost-serverApp-c141]:hover {
            --gradient-color1: #384D6E;
            --gradient-color2: #3B5779;
            --gradient-color3: var(--gradient-color1)
        }

        .is-current[_nghost-serverApp-c141]:before,
        .is-current[_nghost-serverApp-c141]:after {
            content: "";
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            margin: auto;
            border-radius: inherit
        }

        .is-current[_nghost-serverApp-c141]:before {
            z-index: -2;
            border: .2rem solid #446d87
        }

        .is-current[_nghost-serverApp-c141]:after {
            z-index: -1;
            border-radius: .5rem;
            background-image: linear-gradient(180deg, var(--gradient-color3), transparent)
        }

        .is-current[_nghost-serverApp-c141] .seasonpass-reward__action[_ngcontent-serverApp-c141] {
            color: #643b2a;
            background-color: #ffba7a;
            border-color: #ffba7a
        }

        .is-current[_nghost-serverApp-c141] .seasonpass-reward__action[_ngcontent-serverApp-c141]:hover {
            background-color: #ffcd9e;
            border-color: #ffcd9e
        }

        .is-current[_nghost-serverApp-c141] .seasonpass-reward__picture[_ngcontent-serverApp-c141] {
            opacity: 1
        }

        .is-unavailable[_nghost-serverApp-c141] {
            --gradient-color1: #21274D;
            --gradient-color2: #232E52
        }

        .is-unavailable[_nghost-serverApp-c141] .seasonpass-reward__action[_ngcontent-serverApp-c141] {
            width: 3.2rem;
            font-size: 2rem;
            color: #5e6d99;
            background-color: #202849;
            border-color: #202849
        }

        .is-unavailable[_nghost-serverApp-c141]:hover {
            --gradient-color1: #222950;
            --gradient-color2: #27365C
        }

        .is-unavailable[_nghost-serverApp-c141]:hover .seasonpass-reward__picture[_ngcontent-serverApp-c141] {
            opacity: 1
        }

        [_nghost-serverApp-c141] .seasonpass-reward__status[_ngcontent-serverApp-c141] {
            position: absolute;
            top: .8rem;
            right: .8rem;
            display: block;
            width: 2.4rem;
            height: 2.4rem;
            background-color: #88f4e933;
            border-radius: .5rem;
            color: #84ebeb;
            font-size: 1.2rem;
            line-height: 2.4rem;
            text-align: center;
            opacity: 0;
            visibility: hidden
        }

        [_nghost-serverApp-c141] .seasonpass-reward__picture[_ngcontent-serverApp-c141] {
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
            width: 100%;
            height: 67%;
            margin: 0 auto;
            background-color: transparent;
            background-size: 95% auto;
            background-position: center center;
            background-repeat: no-repeat;
            background-clip: border-box;
            transition: transform .2s ease-out 0s, opacity .2s ease-out 0s
        }

        [_nghost-serverApp-c141] .seasonpass-reward__picture[_ngcontent-serverApp-c141] .image[_ngcontent-serverApp-c141] {
            position: relative;
            z-index: 2;
            max-width: 100%;
            max-height: 100%
        }

        [_nghost-serverApp-c141] .seasonpass-reward__action[_ngcontent-serverApp-c141] {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-width: auto;
            width: auto;
            height: 3.2rem;
            color: #5e6d99;
            background-color: #202849;
            border: .2rem solid #202849;
            font-size: 1.2rem;
            font-weight: 900;
            line-height: 1;
            text-transform: uppercase;
            text-align: center;
            border-radius: .8rem;
            -webkit-user-select: none;
            user-select: none;
            cursor: pointer
        }

        [_nghost-serverApp-c141] .seasonpass-reward__level-wrapper[_ngcontent-serverApp-c141] {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1.6rem;
            display: block;
            width: 3.2rem;
            height: 3.6rem;
            margin: auto;
            color: #e4edff;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 3.3rem;
            text-transform: uppercase;
            text-align: center;
            text-shadow: 0 .1rem 0 rgba(0, 0, 0, .1)
        }

        [_nghost-serverApp-c141] .seasonpass-reward__shield[_ngcontent-serverApp-c141] {
            width: 100%;
            height: 100%;
            background-size: contain;
            background-repeat: no-repeat
        }

        [_nghost-serverApp-c141] .seasonpass-reward__level[_ngcontent-serverApp-c141] {
            position: absolute;
            inset: 0
        }

        [_nghost-serverApp-c141] .seasonpass-reward_preview[_ngcontent-serverApp-c141] {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-width: auto;
            width: 3.2rem;
            height: 3.2rem;
            background-color: #2e3d61;
            border-color: #2e3d61;
            color: #5b6d98;
            font-size: 2.2rem;
            font-weight: 900;
            line-height: 1;
            text-transform: uppercase;
            text-align: center;
            border-radius: .8rem;
            -webkit-user-select: none;
            user-select: none;
            cursor: pointer;
            transition: background-color .2s ease-out 0s, border-color .2s ease-out 0s, color .2s ease-out 0s
        }

        [_nghost-serverApp-c141] .seasonpass-reward_preview[_ngcontent-serverApp-c141]:hover {
            background-color: #34466f;
            border-color: #34466f;
            color: #6c87ae
        }

        [_nghost-serverApp-c141] .seasonpass-reward__action.preload[_ngcontent-serverApp-c141] {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 3.4rem;
            background-color: #28315a;
            margin: auto;
            width: 10.8rem;
            border: none
        }

        @media all and (max-width: 767px) {
            [_nghost-serverApp-c141] {
                width: 13.3rem;
                height: 16.8rem
            }
        }
        [_ngcontent-serverApp-c144]:root {
            --gutter: 2rem;
            --gutter-page: 4rem;
            --gutter-shop: 2.5rem;
            --gutter-support: 2.5rem
        }

        @media all and (max-width: 991px) {
            [_ngcontent-serverApp-c144]:root {
                --gutter: 1.5rem;
                --gutter-page: 2rem
            }
        }

        [_nghost-serverApp-c144] {
            position: relative;
            display: block;
            width: 100%;
            height: auto;
            padding: 2rem;
            background-color: #252e52;
            border-radius: 1rem
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__head[_ngcontent-serverApp-c144] {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: center;
            width: 100%;
            height: 3.8rem
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__head[_ngcontent-serverApp-c144] .seasonpass-tasks__subtitle[_ngcontent-serverApp-c144] span.preload[_ngcontent-serverApp-c144] {
            width: 6rem;
            height: 1em;
            background-color: #29335d
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__head[_ngcontent-serverApp-c144] .seasonpass-tasks__counters.preload[_ngcontent-serverApp-c144] {
            width: 6.4rem
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__icon[_ngcontent-serverApp-c144] {
            color: #8d97bb;
            font-size: 2.4rem;
            margin-right: 1.5rem
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__title[_ngcontent-serverApp-c144] {
            color: #fff;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 2.2rem
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__subtitle[_ngcontent-serverApp-c144] {
            display: flex;
            align-items: center;
            margin-top: .2rem;
            color: #8f9bc5;
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__subtitle[_ngcontent-serverApp-c144] span[_ngcontent-serverApp-c144] {
            margin-left: .5rem
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__counters[_ngcontent-serverApp-c144] {
            display: block;
            width: auto;
            height: 2.8rem;
            padding: 0 1rem;
            margin-left: auto;
            background-color: #2d375e;
            border-radius: .6rem;
            color: #8f9bc5;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.8rem;
            white-space: nowrap
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__counters[_ngcontent-serverApp-c144] .md-hidden[_ngcontent-serverApp-c144] {
            display: none
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__scroll[_ngcontent-serverApp-c144] {
            position: relative;
            min-height: 37rem;
            height: calc(100vh - 95rem);
            margin-top: 2rem;
            -webkit-mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0), #000 5rem, #000 100%);
            mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0), #000 5rem, #000 100%)
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__scroll.is-empty[_ngcontent-serverApp-c144] {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            overflow: hidden
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__scroll.is-empty[_ngcontent-serverApp-c144] .seasonpass-tasks__icon[_ngcontent-serverApp-c144] {
            display: block;
            margin-right: 0;
            margin-bottom: 1rem;
            color: #434d78;
            font-size: 3.2rem
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__scroll.is-empty[_ngcontent-serverApp-c144] .seasonpass-tasks__title[_ngcontent-serverApp-c144] {
            color: #434d78
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__scroll.is-shadow-hidden[_ngcontent-serverApp-c144] {
            -webkit-mask-image: none;
            mask-image: none
        }

        [_nghost-serverApp-c144] .seasonpass-tasks__scroll[_ngcontent-serverApp-c144] .cdk-virtual-scroll-content-wrapper[_ngcontent-serverApp-c144] {
            width: 100%
        }

        @media (hover: hover) {
            [_nghost-serverApp-c144] .seasonpass-tasks__scroll[_ngcontent-serverApp-c144] .cdk-virtual-scroll-content-wrapper[_ngcontent-serverApp-c144] {
                padding-right: .85rem
            }
        }

        @media (hover: hover) {
            [_nghost-serverApp-c144] .seasonpass-tasks__scroll[_ngcontent-serverApp-c144] {
                margin-right: -1.15rem
            }
        }

        .is-completed[_nghost-serverApp-c144] .seasonpass-tasks__counters[_ngcontent-serverApp-c144] {
            background-color: #283a59;
            color: #99c7d1
        }

        @media all and (max-width: 1399px) {
            [_nghost-serverApp-c144] .seasonpass-tasks__scroll[_ngcontent-serverApp-c144] {
                height: calc(100vh - 87.2rem)
            }
        }

        @media all and (max-width: 991px) {
            [_nghost-serverApp-c144] {
                display: none;
                padding: 0;
                background-color: transparent
            }

            [_nghost-serverApp-c144] .seasonpass-tasks__head[_ngcontent-serverApp-c144] {
                height: auto
            }

            [_nghost-serverApp-c144] .seasonpass-tasks__icon[_ngcontent-serverApp-c144],
            [_nghost-serverApp-c144] .seasonpass-tasks__title-wrapper[_ngcontent-serverApp-c144] {
                display: none
            }

            [_nghost-serverApp-c144] .seasonpass-tasks__counters[_ngcontent-serverApp-c144] {
                height: auto;
                margin-left: 0;
                padding: 0;
                background-color: transparent;
                line-height: 1
            }

            [_nghost-serverApp-c144] .seasonpass-tasks__counters[_ngcontent-serverApp-c144] .md-hidden[_ngcontent-serverApp-c144] {
                display: inline-block
            }

            [_nghost-serverApp-c144] .seasonpass-tasks__scroll[_ngcontent-serverApp-c144] {
                height: calc(100vh - 88rem);
                margin-top: 1.5rem;
                -webkit-mask-image: none;
                mask-image: none
            }

            .is-active[_nghost-serverApp-c144] {
                display: block
            }

            .is-completed[_nghost-serverApp-c144] .seasonpass-tasks__counters[_ngcontent-serverApp-c144] {
                background-color: transparent
            }

            .preload[_nghost-serverApp-c144] .seasonpass-tasks__icon[_ngcontent-serverApp-c144] {
                display: none
            }

            .preload[_nghost-serverApp-c144] .seasonpass-tasks__counters[_ngcontent-serverApp-c144] {
                width: 18rem;
                height: 1.4rem;
                background-color: #262f56
            }
        }

        @media all and (min-width: 992px) and (max-width: 1599px) {
            [_nghost-serverApp-c144] .seasonpass-tasks__icon[_ngcontent-serverApp-c144] {
                display: none
            }

            .preload[_nghost-serverApp-c144] .seasonpass-tasks__icon[_ngcontent-serverApp-c144] {
                display: none
            }
        }
        cdk-virtual-scroll-viewport {
            display: block;
            position: relative;
            transform: translateZ(0)
        }

        .cdk-virtual-scrollable {
            overflow: auto;
            will-change: scroll-position;
            contain: strict;
            -webkit-overflow-scrolling: touch
        }

        .cdk-virtual-scroll-content-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            contain: content
        }

        [dir=rtl] .cdk-virtual-scroll-content-wrapper {
            right: 0;
            left: auto
        }

        .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {
            min-height: 100%
        }

        .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),
        .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),
        .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),
        .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]) {
            padding-left: 0;
            padding-right: 0;
            margin-left: 0;
            margin-right: 0;
            border-left-width: 0;
            border-right-width: 0;
            outline: none
        }

        .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {
            min-width: 100%
        }

        .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),
        .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),
        .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),
        .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]) {
            padding-top: 0;
            padding-bottom: 0;
            margin-top: 0;
            margin-bottom: 0;
            border-top-width: 0;
            border-bottom-width: 0;
            outline: none
        }

        .cdk-virtual-scroll-spacer {
            height: 1px;
            transform-origin: 0 0;
            flex: 0 0 auto
        }

        [dir=rtl] .cdk-virtual-scroll-spacer {
            transform-origin: 100% 0
        }
        [_ngcontent-serverApp-c143]:root {
            --gutter: 2rem;
            --gutter-page: 4rem;
            --gutter-shop: 2.5rem;
            --gutter-support: 2.5rem
        }

        @media all and (max-width: 991px) {
            [_ngcontent-serverApp-c143]:root {
                --gutter: 1.5rem;
                --gutter-page: 2rem
            }
        }

        [_nghost-serverApp-c143] {
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: center;
            width: 100%;
            height: 60px;
            background-color: #2b3559;
            border-radius: 8px;
            overflow: hidden
        }

        [_nghost-serverApp-c143]:not(:last-child) {
            margin-bottom: 5px
        }

        [_nghost-serverApp-c143]:hover.has-hover .seasonpass-task__button[_ngcontent-serverApp-c143] {
            opacity: 1;
            visibility: visible
        }

        [_nghost-serverApp-c143]:hover.has-hover .seasonpass-task__title[_ngcontent-serverApp-c143],
        [_nghost-serverApp-c143]:hover.has-hover .seasonpass-task__counters[_ngcontent-serverApp-c143],
        [_nghost-serverApp-c143]:hover.has-hover .seasonpass-task__progress[_ngcontent-serverApp-c143] {
            filter: blur(2px)
        }

        [_nghost-serverApp-c143] .seasonpass-task__content[_ngcontent-serverApp-c143] {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 60px;
            padding: 0 20px;
            cursor: pointer
        }

        [_nghost-serverApp-c143] .seasonpass-task__head[_ngcontent-serverApp-c143] {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: center
        }

        [_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143] {
            width: 100%;
            color: #fff;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            margin-right: 5px;
            word-wrap: break-word;
            word-break: break-all
        }

        [_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143] .strong[_ngcontent-serverApp-c143] {
            font-weight: 600
        }

        [_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143] {
            margin-left: 10px;
            color: #99a9d1;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            text-transform: uppercase;
            white-space: nowrap
        }

        [_nghost-serverApp-c143] .seasonpass-task__progress[_ngcontent-serverApp-c143] {
            margin-top: 10px
        }

        [_nghost-serverApp-c143] .seasonpass-task__receive[_ngcontent-serverApp-c143] {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            width: 62px;
            height: 100%;
            background-color: #303b5e;
            text-align: center
        }

        

        
        [_nghost-serverApp-c143] .seasonpass-task__receive.is-locked[_ngcontent-serverApp-c143] .seasonpass-task__exp[_ngcontent-serverApp-c143] {
            color: #7e92c6;
            font-weight: 700;
            text-transform: uppercase
        }

        [_nghost-serverApp-c143] .seasonpass-task__icon[_ngcontent-serverApp-c143] {
            width: 24px;
            height: 24px;
        }

        [_nghost-serverApp-c143] .seasonpass-task__exp[_ngcontent-serverApp-c143] {
            margin-top: 3px;
            color: #e0d4b1;
            font-size: 12px;
            font-weight: 600;
            line-height: 15px
        }

        [_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143],
        [_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143],
        [_nghost-serverApp-c143] .seasonpass-task__progress[_ngcontent-serverApp-c143] {
            filter: blur(0);
            transition: filter .2s ease-out 0s
        }

        .is-completed[_nghost-serverApp-c143] {
            background-color: #283a59;
            opacity: .6;
            transition: opacity .2s ease-out 0s
        }

        .is-completed[_nghost-serverApp-c143] .seasonpass-task__content[_ngcontent-serverApp-c143] {
            display: flex;
            height: 60px
        }

        .is-completed[_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143] {
            position: relative;
            color: #7fe0e2
        }

        .is-completed[_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143]:before {
            content: "\e914";
            position: relative;
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 12px;
            border-radius: 5px;
            background-color: #88f4e91c;
            -webkit-backdrop-filter: blur(9px);
            backdrop-filter: blur(9px);
            color: #84ebeb;
            font-size: 12px;
            line-height: 24px;
            text-align: center;
            font-family: icomoon !important;
            font-style: normal;
            font-weight: 400;
            font-feature-settings: normal;
            font-variant: normal;
            text-transform: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000;
            transform: translateZ(0)
        }

        .is-completed[_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143] {
            color: #98c6d0
        }

        .is-completed[_nghost-serverApp-c143] .seasonpass-task__receive[_ngcontent-serverApp-c143] {
            background-color: #2f4360
        }

        .is-completed[_nghost-serverApp-c143]:hover {
            opacity: 1
        }

        .is-failed[_nghost-serverApp-c143] {
            background-color: #503f5b;
            opacity: .6;
            transition: opacity .2s ease-out 0s
        }

        .is-failed[_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143] {
            position: relative;
            color: #b98094
        }

        .is-failed[_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143]:before {
            display: none
        }

        .is-failed[_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143] {
            color: #e58187
        }

        .is-failed[_nghost-serverApp-c143] .seasonpass-task__receive[_ngcontent-serverApp-c143] {
            background-color: #5a4866
        }

        .is-failed[_nghost-serverApp-c143] .seasonpass-task__receive[_ngcontent-serverApp-c143] .icon[_ngcontent-serverApp-c143] {
            color: #b98094
        }

        .is-failed[_nghost-serverApp-c143]:hover {
            opacity: 1
        }

        .is-disabled[_nghost-serverApp-c143] {
            opacity: .8;
            transition: opacity .2s ease-out 0s
        }

        .is-disabled[_nghost-serverApp-c143]:hover {
            opacity: 1
        }

        .is-disabled[_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143] {
            color: #a3b3dc
        }

        .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] {
            position: absolute;
            top: 0;
            right: 16px;
            bottom: 0;
            z-index: 2;
            margin: auto 0;
            padding: 0 12px;
            font-size: 12px;
            font-weight: 700;
            line-height: 15px;
            opacity: 0;
            visibility: hidden;
            transform: translateZ(2px);
            transition: opacity .2s ease-out 0s, visibility .2s ease-out 0s, color .2s ease-out 0s, border-color .2s ease-out 0s, background-color .2s ease-out 0s
        }

        .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] .icon_check-bold[_ngcontent-serverApp-c143] {
            font-size: 8px
        }

        .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] .icon_arrow-right-bold[_ngcontent-serverApp-c143] {
            font-size: 11px
        }

        .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] .icon_cross-bold[_ngcontent-serverApp-c143] {
            top: 1px;
            font-size: 8px
        }

        .to-begin[_nghost-serverApp-c143] .button[_ngcontent-serverApp-c143] {
            border-color: #65b296;
            background-color: #65b296
        }

        .to-begin[_nghost-serverApp-c143] .button[_ngcontent-serverApp-c143]:hover {
            border-color: #7cbea6;
            background-color: #7cbea6
        }

        .to-follow[_nghost-serverApp-c143] .button[_ngcontent-serverApp-c143] {
            border-color: #5872cd;
            background-color: #5872cd
        }

        .to-follow[_nghost-serverApp-c143] .button[_ngcontent-serverApp-c143]:hover {
            border-color: #7189de;
            background-color: #7189de
        }

        .to-cancel[_nghost-serverApp-c143] .button[_ngcontent-serverApp-c143] {
            color: #ffbaba;
            border-color: #e36170;
            background-color: #e3617040
        }

        .to-cancel[_nghost-serverApp-c143] .button[_ngcontent-serverApp-c143]:hover {
            color: #fff;
            border-color: #ed7482;
            background-color: #ed7482
        }

        [_nghost-serverApp-c143] .seasonpass-task__title.preload[_ngcontent-serverApp-c143] {
            width: 130px;
            height: 18px;
            background-color: #323e69
        }

        [_nghost-serverApp-c143] .seasonpass-task__counters.preload[_ngcontent-serverApp-c143] {
            width: 56px;
            height: 18px;
            background-color: #323e69
        }

        [_nghost-serverApp-c143] .seasonpass-task__exp.preload[_ngcontent-serverApp-c143] {
            width: 30px;
            height: 18px;
            background-color: #3b4362
        }

        [_nghost-serverApp-c143] .seasonpass-task__title.preload[_ngcontent-serverApp-c143],
        [_nghost-serverApp-c143] .seasonpass-task__progress.preload[_ngcontent-serverApp-c143],
        [_nghost-serverApp-c143] .seasonpass-task__counters.preload[_ngcontent-serverApp-c143] {
            background-color: #29335d
        }

        @media all and (max-width: 424px) {
            [_nghost-serverApp-c143] {
                border-radius: 10px
            }

            [_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143] {
                font-size: 13px
            }

            [_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143]:before {
                font-size: 10px
            }

            [_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143] {
                font-size: 12px;
                line-height: 11px
            }

            [_nghost-serverApp-c143] .seasonpass-task__icon[_ngcontent-serverApp-c143] {
                width: 20px;
                height: 20px;
                margin-bottom: 4px
            }

            [_nghost-serverApp-c143] .seasonpass-task__exp[_ngcontent-serverApp-c143] {
                font-size: 9px;
                line-height: 11px
            }

            .is-completed[_nghost-serverApp-c143] .seasonpass-task__content[_ngcontent-serverApp-c143] {
                height: 55px
            }

            .is-completed[_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143]:before {
                margin-right: 4px;
                width: 20px;
                height: 20px;
                font-size: 10px;
                line-height: 20px
            }

            .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] {
                height: 28px;
                font-size: 10px
            }

            .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] .icon_check-bold[_ngcontent-serverApp-c143] {
                font-size: 6px
            }

            .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] .icon_arrow-right-bold[_ngcontent-serverApp-c143] {
                font-size: 9px
            }

            .has-hover[_nghost-serverApp-c143] .seasonpass-task__button[_ngcontent-serverApp-c143] .icon_cross-bold[_ngcontent-serverApp-c143] {
                font-size: 6px
            }

            .preload[_nghost-serverApp-c143] .seasonpass-task__title[_ngcontent-serverApp-c143],
            .preload[_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143] {
                height: 13px
            }
        }

        @media all and (min-width: 992px) and (max-width: 1599px) {
            [_nghost-serverApp-c143] {
                flex-flow: column nowrap;
                height: 100px
            }

            [_nghost-serverApp-c143] .seasonpass-task__receive[_ngcontent-serverApp-c143] {
                flex-flow: row nowrap;
                justify-content: flex-end;
                padding-right: 20px;
                width: 100%;
                height: 40px
            }

            [_nghost-serverApp-c143] .seasonpass-task__exp[_ngcontent-serverApp-c143] {
                margin-top: 0
            }

            [_nghost-serverApp-c143] .seasonpass-task__icon[_ngcontent-serverApp-c143] {
                margin-right: 4px
            }

            [_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143] {
                position: absolute;
                bottom: -29px
            }

            .preload[_nghost-serverApp-c143] .seasonpass-task__counters[_ngcontent-serverApp-c143] {
                position: absolute;
                width: 56px;
                height: 18px;
                background-color: #3b4362
            }
        }   
</style>