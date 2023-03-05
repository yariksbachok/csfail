<template>
  <SupportAside bonuses />
  <div
    _ngcontent-serverapp-c152=""
    class="support-page__content support-content"
  >
    <router-outlet _ngcontent-serverapp-c152=""></router-outlet
    ><support-faq-topics _nghost-serverapp-c154="">
      <BtnBack />
      <div
        scroll="vertical"
        class="support-content__topics scroll scroll_vertical"
      >
        <support-faq-topic class="topic topic_support"
            :class="{ 'is-open': first }"
            @click="first = !first"
          ><div
            class="topic__head link"
            
          >
            <div class="topic__title">
              How the new wagering system and bonus balance works
            </div>
            <div class="topic__content content" v-if="first">
              <h1>
                Don't worry, now all bonuses are credited to the bonus balance,
                and wagering them is much easier and more profitable.
              </h1>
              <p><br /></p>
              <h1>A little guide to help clear things up:</h1>
              <p><br /></p>
              <p>
                <img
                  src="/cdn/support/section-icons/451eb8d5-8732-42cd-89ad-97b829ba9025-63dbbfcb363f0.jpg"
                />
              </p>
              <p><br /></p>
              <h2>To play with bonus balance:</h2>
              <p>
                <strong
                  >To see this bonus balance and progress, you need to tap<em>
                    (on mobiles)</em
                  >
                  or click <em>(on dekstop)</em> on Gift icon(1)</strong
                >
              </p>
              <p><br /></p>
              <ul>
                <li>
                  Select the betting method<strong> "BALANCE" (2)</strong>, then
                  enter the desired amount in the field for
                  <strong>selecting the bet amount (3)</strong>
                </li>
              </ul>
              <p>
                <em
                  >*The amount must be less than or equal to the bonus balance,
                  you are now ready to bet with the bonus balance.</em
                >
              </p>
              <p><br /></p>
              <ul>
                <li>
                  If you do not want to wager the bonus and go straight to
                  betting with the main balance,
                  <strong>click the cross (4)</strong>
                </li>
                <li>
                  After successful wagering, you will receive the entire wagered
                  amount👌
                </li>
              </ul>
              <h2>What happens if I put the bonus balance and the main one?</h2>
              <p>
                You must wager with your balance to clear the bonus. When
                betting with a balance, the bonus balance is placed first.
              </p>
              <p>For example:</p>
              <ul>
                <li>Main balance 3$;</li>
                <li>Bonus balance 1$;</li>
              </ul>
              <p>
                <em
                  >If you bet up to one dollar, the funds will be debited from
                  the bonus balance.</em
                >
              </p>
              <p>
                <em
                  >If you bet more than one dollar (for example, $1.5 x2), $1
                  will be deducted for the bet from the bonus balance, and $0.5
                  for the bet of the main balance. </em
                ><strong
                  ><em
                    >If you win in this case, you will receive $2 for the bonus
                    balance and $1 for the main one.</em
                  ></strong
                >
              </p>
              <h2>How are wagering counted?</h2>
              <p></p>
              <div class="quote quote_default quote_info">
                1 cent wagered in any of the modes = 1 cent wagering
              </div>
              <p></p>
              <p>
                When the bonus is active,
                <strong
                  >it is possible to place a bet with skins, but this bets won't
                  influence on bonus wager procces.
                </strong>
              </p>
              <p><strong>Additional terms</strong></p>
              <p>Crash - Coefficient. below x1.5 is not allowed.</p>
              <p>Jackpot - Bonus cannot be wagered</p>
              <p>
                Wheel - Unlimited *but you can not place multiple bets in one
                game*
              </p>
              <p>
                Double - No restrictions *but you can not place multiple bets in
                one game*
              </p>
              <p><br /></p>
              <p><strong></strong></p>
              <div class="quote quote_default quote_info">
                <strong
                  >If you have any problems with wagering or have questions -
                  please contact this section!</strong
                >
              </div>
              <p></p>
              <div class="topic__action">
                <a
                  class="button button_purple"
                  href="/en/support/bonuses/615-How-the-new-wagering-system-and-bonus-balance-works/create"
                  ><div class="button__text">I need specialist help</div>
                  <div class="icon icon_support"></div
                ></a>
              </div>
              <!---->
            </div>
          </div></support-faq-topic
        >
        <support-faq-topic class="topic topic_support"
            :class="{ 'is-open': second }"
            @click="second = !second"
          ><div
            class="topic__head link"
            
          >
            <div class="topic__title">Bonus Line and Avatars</div>
            <div class="topic__content content" v-if="second">
              <p>
                <strong>Bonus Line </strong>- A unique bonus mode where GABE
                shares his best items and other rewards with active players!
              </p>
              <p>
                To receie an award from Gabe, you must fulfill one condition -
                install one of the presented CSFAIL avatars in your STEAM
                profile
              </p>
              <p><strong>How to set an avatar?</strong></p>
              <ul>
                <li>
                  Download your favorite avatar through the green "Download"
                  button in the "Conditions of Participation" window
                </li>
                <li>
                  Go to
                  <a
                    href="https://steamcommunity.com/id/me/edit/avatar"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Edit STEAM Profile</a
                  >
                  and set the avatar without change in size/color
                </li>
                <li>
                  Click the "CHECK" button in the "Terms of Participation"
                  window
                </li>
              </ul>
              <p>
                <strong
                  >I set an avatar, the timer is over, but the line of bonuses
                  is still blocked"</strong
                >
              </p>
              <ul>
                <li>
                  <em
                    >Expect another 30-60 minutes, sometimes Gabe needs a little
                    more time to check your avatar!</em
                  >
                </li>
              </ul>
              <p>
                <strong
                  >I get the error "Avatar not found, make sure you set it
                  correctly"</strong
                >
              </p>
              <ul>
                <li>
                  <em
                    >This means that you downloaded or installed the avatar
                    incorrectly. Make sure that you downloaded the avatar
                    through the download button and did not change its size
                    during installation.</em
                  >
                </li>
              </ul>
              <p>
                <strong
                  >I can't claim my prize after 14 days! Will I receive it
                  later?</strong
                >
              </p>
              <ul>
                <li>
                  <em
                    >Prizes in the bonus line are updated every 14 days at 00:00
                    GMT. If you missed one of the days on the way to the last
                    reward, you will not be able to pick up the last prize. When
                    updating the line of bonuses, the opportunity to pick up the
                    last prize will disappear.</em
                  >
                </li>
              </ul>
              <p>
                If you are sure that the avatar is set correctly - contact this
                section through the button "I need specialist help"
              </p>
              <p>
                <strong
                  ><em
                    >We'll need a video of the avatar upload and installation
                    process from start to error.</em
                  ></strong
                >
              </p>
              <div class="topic__action">
                <a
                  class="button button_purple"
                  href="/en/support/bonuses/517-Bonus-Line-and-Avatars/create"
                  ><div class="button__text">I need specialist help</div>
                  <div class="icon icon_support"></div
                ></a>
              </div>
              <!---->
            </div>
          </div></support-faq-topic
        >
        <support-faq-topic class="topic topic_support"
            :class="{ 'is-open': three }"
            @click="three = !three"
          ><div
            class="topic__head link"
            
          >
            <div class="topic__title">Deposit bonuses</div>
            <div class="topic__content content" v-if="three">
              <p>
                On our site, you can receive up to <strong>+ 20%</strong> of the
                main bonus upon deposit
              </p>
              <p>The main top-up bonuses:</p>
              <ul>
                <li>
                  Bonuses for a website in a nickname —
                  <strong>that is 10% to 15%.</strong>
                </li>
                <li>Referral code bonus — <strong>5%.</strong></li>
              </ul>
              <p>
                Bonuses for the site in the nickname start working
                <strong>24 hours</strong> after the nickname is changed. Be sure
                to re-authorize on the site to start the report!
              </p>
              <p>The referral code must be entered in the "Top-up" window.</p>
              <p>
                <strong
                  >In addition, you can get a bonus for the Secret code</strong
                >
              </p>
              <p>
                This code is entered in the "Top-up" window in the "Secret code"
                field and works for one subsequent deposit.
              </p>
              <p>Variants of secret codes:</p>
              <ul>
                <li>
                  Interest on any deposit. Example —
                  <strong>+15% to any deposit.</strong>
                </li>
                <li>
                  Interest on the deposit from the amount. Example —
                  <strong>+15% for a $5 deposit.</strong>
                </li>
                <li>
                  Fixed bonus in $ for any deposit. Example —
                  <strong>+5$ to any deposit.</strong>
                </li>
                <li>
                  Fixed bonus in $ to deposit from the minimum amount. Example —
                  <strong>+5$ for a deposit of $10.</strong>
                </li>
              </ul>
              <p>
                Secret codes do not add up, upon activation of a new secret
                code, the old code will be burned.
              </p>
              <p>
                <strong
                  >Attention! Due to the regular change in the dollar exchange
                  rate, we advise you to top up by 5-10 cents more, for 100%
                  satisfaction of the minimum conditions for activating the
                  secret code.</strong
                >
              </p>
              <h2>
                <strong
                  ><div class="quote quote_default quote_info">
                    All bonuses are issued on the bonus balance.
                  </div></strong
                >
              </h2>
              <h2>
                <a
                  href="/en/support/bonuses/615-How-the-new-wagering-system-and-bonus-balance-works"
                  rel="noopener noreferrer"
                  target="_blank"
                  >How does the bonus balance work?</a
                >
              </h2>
              <!---->
            </div>
          </div></support-faq-topic
        >
      </div>
    </support-faq-topics>
  </div>
</template>
    
  <script>
import BtnBack from "../../components/BackSupport.vue";
import SupportAside from "../../components/SupportAside";
export default {
  components: {
    BtnBack,
    SupportAside,
  },

  data() {
    return {
      first: false,
      second: false,
      three: false,
    };
  },
};
</script>
    
    <style>
</style>