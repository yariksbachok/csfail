<template>
  <div class="container">
    <router-outlet></router-outlet
    ><leaders-home _nghost-serverapp-c164="">
      <div _ngcontent-serverapp-c164="" class="top-page">
        <leaders-weekly
          _ngcontent-serverapp-c164=""
          class="top-page__weekly-leaders weekly-leaders"
        >
          <div class="weekly-leaders__header">
            <div
              class="page-header page-header_weekly-leaders page-header_gold"
            >
              <div class="page-header__title">
                <img
                  src="../../public/images/icon/trophy.png"
                  class="icon_bonus_small m-r-0-5-rem"
                />Top players
                <!-- <button class="button">
                  <span class="button__text">History</span>
                  <img
                    src="../../public/images/icon/history.png"
                    class="icon"
                  />
                </button> -->
              </div>
              <div class="page-header__subtitle" @click="$store.state.modal = true, $store.state.what_top = true">How does the top work?</div>
            </div>
            <leaders-weekly-timer class="weekly-leaders__timer timer">
              <div class="weekly-leaders__timer timer">
                <div class="timer__cell timer__cell_days">{{ currentTime.days }} days</div>
                <div class="timer__cell">{{ NewcurrentTime.hours1 }}</div>
                <div class="timer__cell">{{ NewcurrentTime.hours2 }}</div>
                <div class="timer__separator"></div>
                <div class="timer__cell">{{ NewcurrentTime.minutes1 }}</div>
                <div class="timer__cell">{{ NewcurrentTime.minutes2 }}</div>
                <div class="timer__separator"></div>
                <div class="timer__cell">{{ NewcurrentTime.seconds1 }}</div>
                <div class="timer__cell">{{ NewcurrentTime.seconds2 }}</div>
              </div>
            </leaders-weekly-timer>
          </div>
          <div transitiongroup="" class="weekly-leaders__hot hot">
            <leaders-weekly-user-hot
              transitiongroupitem=""
              class="hot__player player" v-for="top in top1"
            >
              <div class="player__head">
                <a
                  class="player__picture picture picture_color-pink"
                  :href="top.user.profile"
                  ><img
                    class="image"
                    :src="top.user.images"
                    :alt="top.user.useranme"
                /></a>
                <div class="player__info">
                  <div class="player__nickname nickname nickname_color-pink">
                    <a
                      class="link"
                      :href="top.user.profile"
                    >
                      {{ top.user.username }}
                    </a>
                  </div>
                  <div class="player__xp">
                    <img src="../../public/images/icon/xp.png" class="icon" />
                    <div class="player__xp-value">{{ top.user.xp }}</div>
                  </div>
                </div>
              </div>
              <div class="player__prize player__prize_gold">
                <img
                  src="../../public/images/icon/gold-cup.png"
                  class="icon_bonus_small"
                />
                <div class="player__place">1</div>
              </div>
              <div class="player__skin quality quality_eb4b4b skin skin_top">
                <div class="skin__picture">
                  <img
                    class="image"
                    :src="getPhoto(top.skin.image)"
                    :alt="top.skin.alt"
                  />
                </div>
                <div class="skin__description">
                  <div class="skin__quality">
                    <div class="skin__exterior">{{top.skin.skin_exterior}}</div>
                    <div class="skin__stattrak" v-if="top.skin.skin_stattrak">{{ top.skin.skin_stattrak }}</div>
                  </div>
                  <div class="skin__type">{{ top.skin.skin_type }}</div>
                  <div class="skin__name">{{ top.skin.skin_name }}</div>
                  <div class="skin__price currency_RUB">{{ top.skin.skin_price }}</div>
                </div>
              </div> </leaders-weekly-user-hot
            ><leaders-weekly-user-hot
              transitiongroupitem=""
              class="hot__player player"
              v-for="top in top2"
            >
              <div class="player__head">
                <a
                  class="player__picture picture"
                  :href="top.user.profile"
                  ><img
                    class="image"
                    :src="top.user.images"
                    :alt="top.user.username"
                /></a>
                <div class="player__info">
                  <div class="player__nickname nickname">
                    <a
                      class="link"
                      :href="top.user.profile"
                    >
                      {{top.user.username}}
                    </a>
                  </div>
                  <div class="player__xp">
                    <img src="../../public/images/icon/xp.png" class="icon" />
                    <div class="player__xp-value">{{ top.user.xp }}</div>
                  </div>
                </div>
              </div>
              <div class="player__prize player__prize_silver">
                <img
                  src="../../public/images/icon/silver-cup.png"
                  class="icon_bonus_small"
                />
                <div class="player__place">2</div>
              </div>
              <div class="player__skin quality quality_eb4b4b skin skin_top">
                <div class="skin__picture">
                  <img
                    class="image"
                    :src="getPhoto(top.skin.image)"
                    :alt="top.skin.alt"
                  />
                </div>
                <div class="skin__description">
                  <div class="skin__quality">
                    <div class="skin__exterior">{{ top.skin.skin_exterior }}</div>
                    <div class="skin__stattrak" v-if="top.skin.skin_stattrak">{{ top.skin.skin_stattrak }}</div>
                  </div>
                  <div class="skin__type">{{ top.skin.skin_type }}</div>
                  <div class="skin__name">{{ top.skin.skin_name }}</div>
                  <div class="skin__price currency_RUB">{{ top.skin.skin_price }}</div>
                </div>
              </div> </leaders-weekly-user-hot
            ><leaders-weekly-user-hot
              transitiongroupitem=""
              class="hot__player player" v-for="top in top3"
            >
              <div class="player__head">
                <a
                  class="player__picture picture"
                  :href="top.user.profile"
                  ><img
                    class="image"
                    :src="top.user.images"
                    :alt="top.user.username"
                /></a>
                <div class="player__info">
                  <div class="player__nickname nickname">
                    <a
                      class="link"
                      :href="top.user.profile"
                    >
                      {{ top.user.username }}
                    </a>
                  </div>
                  <div class="player__xp">
                    <img src="../../public/images/icon/xp.png" class="icon" />
                    <div class="player__xp-value">{{ top.user.xp }}</div>
                  </div>
                </div>
              </div>
              <div class="player__prize player__prize_bronze">
                <img
                  src="../../public/images/icon/bronze-cup.png"
                  class="icon_bonus_small"
                />
                <div class="player__place">3</div>
              </div>
              <div class="player__skin quality quality_cf6a32 skin skin_top">
                <div class="skin__picture">
                  <img
                    class="image"
                    :src="getPhoto(top.skin.image)"
                    :alt="top.skin.alt"
                  />
                </div>
                <div class="skin__description">
                  <div class="skin__quality">
                    <div class="skin__exterior">{{ top.skin.skin_exterior }}</div>
                    <div class="skin__stattrak" v-if="top.skin.skin_stattrak">{{ top.skin.skin_stattrak }}</div>
                  </div>
                  <div class="skin__type">{{ top.skin.skin_type }}</div>
                  <div class="skin__name">{{ top.skin.skin_name }}</div>
                  <div class="skin__price currency_RUB">{{ top.skin.skin_price }}</div>
                </div>
              </div>
            </leaders-weekly-user-hot>
          </div>
          <div class="weekly-leaders__others others">
            <div class="others__table table">
              <div class="table__head">
                <div class="table__head-cell">Place</div>
                <div class="table__head-cell">Player</div>
                <div class="table__head-cell">Prize</div>
                <div class="table__head-cell">Experience</div>
              </div>
              <div transitiongroup="" class="table__content">
                <leaders-weekly-user
                  transitiongroupitem=""
                  class="table__player player"
                  v-for="(top, index) in otherTop"
                >
                  <div class="player__place">{{ index+4 }}</div>
                  <div class="player__info">
                    <a
                      class="player__picture picture picture_color-orange-yellow"
                      :href="top.user.profile"
                      ><img
                        class="image"
                        :src="top.user.images"
                        :alt="top.user.username"
                    /></a>
                    <div
                      class="player__nickname nickname nickname_color-orange-yellow"
                    >
                      <a
                        class="link"
                        :href="top.user.profile"
                        >{{ top.user.username }}
                      </a>
                    </div>
                  </div>
                  <div class="player__prize quality quality_cf6a32">
                    <img
                      class="image"
                      :src="getPhoto(top.skin.image)"
                      :alt="top.skin.alt"
                    />
                  </div>
                  <div class="player__xp">
                    <img src="../../public/images/icon/xp.png" class="icon" />
                    <div digitsinfo="1.0-0" class="player__xp-value">
                      {{ top.user.xp }}
                    </div>
                  </div> </leaders-weekly-user
                >
              </div>
            </div>
          </div> </leaders-weekly
        ><leaders-daily
          _ngcontent-serverapp-c164=""
          class="top-page__daily-leaders daily-leaders"
        >
          <div class="daily-leaders__header">
            <div class="page-header page-header_daily-leaders page-header_gold">
              <div class="page-header__title">
                <img
                  src="../../public/images/icon/horseshoe.png"
                  class="icon_bonus_small m-r-0-5-rem"
                />Top of the day
                <!-- <button class="button">
                  <span class="button__text">History</span>
                  <img
                    src="../../public/images/icon/history.png"
                    class="icon"
                  />
                </button> -->
              </div>
              <div class="page-header__subtitle">Win gifts every day!</div>
            </div>
            <leaders-daily-timer class="daily-leaders__timer timer">
              <div class="timer__title">
                The top of the day will be updated in
              </div>
              <div class="timer__content">
                <div class="timer__cells">
                  <div class="timer__cell">{{ NewcurrentTime.hours1 }}</div>
                  <div class="timer__cell">{{ NewcurrentTime.hours2 }}</div>
                </div>
                <div class="timer__separator"></div>
                <div class="timer__cells">
                  <div class="timer__cell">{{ NewcurrentTime.minutes1 }}</div>
                  <div class="timer__cell">{{ NewcurrentTime.minutes2 }}</div>
                </div>
                <div class="timer__separator"></div>
                <div class="timer__cells">
                  <div class="timer__cell">{{ NewcurrentTime.seconds1 }}</div>
                  <div class="timer__cell">{{ NewcurrentTime.seconds2 }}</div>
                </div>
              </div>
            </leaders-daily-timer>
          </div>
          <div class="daily-leaders__table table">
            <div class="table__head">
              <div class="table__head-cell">Player</div>
              <div class="table__head-cell">Prize</div>
            </div>
            <div transitiongroup="" class="table__content">
              <leaders-daily-user
                transitiongroupitem=""
                class="i-0 player table__player"
                v-for="TopDay in TopsDay"
                ><a
                  class="player__picture picture picture_color-blue-green"
                  :href="TopDay.user.profile"
                  ><img
                    class="image"
                    :src="TopDay.user.images"
                    :alt="TopDay.user.username"
                /></a>
                <div class="player__info">
                  <div
                    class="player__nickname nickname nickname_color-blue-green"
                  >
                    <a
                      class="link"
                      :href="TopDay.user.profile"
                    >
                    {{TopDay.user.username}}
                    </a>
                  </div>
                  <div class="player__xp">
                    <img src="../../public/images/icon/xp.png" class="icon" />
                    <div digitsinfo="1.0-0" class="player__xp-value">
                      {{ TopDay.user.xp }}
                    </div>
                  </div>
                </div>
                <div class="player__prize quality quality_cf6a32">
                  <img
                    class="skin__image image"
                    :src="getPhoto(TopDay.skin.image)"
                    :alt="TopDay.skin.alt"
                  />
                </div> </leaders-daily-user
              >
            </div>
          </div>
        </leaders-daily>
      </div>
    </leaders-home>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer";
export default {
    components: {
     Footer
  },
  data() {
    return {
        currentTime: {days: 6, hours: 11, minutes: 44, seconds: 22},
        NewcurrentTime: {hours1: 0, hours2: 0, minutes1:0, minutes2: 0, seconds1: 0, seconds2: 0},
        timer:null,
        TopPlayer: [
            {"user": {"username": "top 1", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top 2", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top3", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS", "skin_stattrak": "ST"}},
            {"user": {"username": "top 4", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top 5", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top 6", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top 7", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top 8", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top 9", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
            {"user": {"username": "top 10", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols", "skin_type": "★ M9 Bayonet", "skin_name": "Black Laminate", "skin_price": "52 216.17", "skin_exterior": "BS"}},
        ],
        TopPlayerDay:[
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
            {"user": {"username": "spid day", "images": "https://media.giphy.com/media/pMztjzgwKXglMMtsHs/giphy.gif", "profile": "https://csfail.pro/en/profile/2290401", "xp": "1 005 505"}, "skin": {"image": "medium(19).webp", "alt": "Random pistols"}},
        ]

    }
  },
  methods: {
    getPhoto(image) {
        return require('../../public/images/'+image)
    },
    cretaeAllTime() {
        var hours = (''+this.currentTime.hours).split('')
        var minutes = (''+this.currentTime.minutes).split('')
        var seconds = (''+this.currentTime.seconds).split('')
        if(hours.length == 1){
            this.NewcurrentTime.hours1 = 0
            this.NewcurrentTime.hours2 = hours[0]
        }else{
            this.NewcurrentTime.hours1 = hours[0]
            this.NewcurrentTime.hours2 = hours[1]
        }
        if(minutes.length == 1){
            this.NewcurrentTime.minutes1 = 0
            this.NewcurrentTime.minutes2 = minutes[0]
        }else{
            this.NewcurrentTime.minutes1 = minutes[0]
            this.NewcurrentTime.minutes2 = minutes[1]
        }
        console.log(seconds)
        console.log(seconds.length)
        if(seconds.length == 1){
            this.NewcurrentTime.seconds1 = 0
            this.NewcurrentTime.seconds2 = seconds[0]
        }else{
            this.NewcurrentTime.seconds1 = seconds[0]
            this.NewcurrentTime.seconds2 = seconds[1]
        }
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
        this.cretaeAllTime() 
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    },
  },
  computed: {
    top1: function(){
        return this.TopPlayer.slice(0, 1);
    },
    top2: function(){
        return this.TopPlayer.slice(1, 2);
    },
    top3: function(){
        return this.TopPlayer.slice(2, 3);
    },
    otherTop: function(){
        return this.TopPlayer.slice(3, 10);
    },
    TopsDay: function(){
        return this.TopPlayerDay.slice(0, 10);
    }
  },
  mounted() {
    this.startTimer()
    this.cretaeAllTime()
  },
  destroyed(){
    this.stopTimer()
  }
};
</script>

<style>

[_nghost-serverApp-c164] {
    width: 100%
}
  

</style>