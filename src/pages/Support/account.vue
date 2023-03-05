<template>
  <SupportAside account />
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
        <support-faq-topic
          class="topic topic_support"
          :class="{ 'is-open': first }"
          @click="first = !first"
          ><div class="topic__head link">
            <div class="topic__title">
              I can't sign in or constantly getting logout
            </div>
            <div class="topic__content content" v-if="first">
              <h2>
                The problem with authorization can manifest itself for various
                reasons. Some of them:
              </h2>
              <ul>
                <li>
                  Error "<strong>Account is blocked</strong>" — Your account is
                  completely blocked for violating the
                  <strong>User Agreement, or voluntarily.</strong>
                </li>
                <li>
                  Error "<strong>Technical failure</strong>" — Technical work is
                  underway on the server, or there is a problem with
                  authorization. If the error is repeated many times, let us
                  know about the problem through support or social networks!
                </li>
              </ul>
              <p><strong></strong></p>
              <div class="quote quote_default quote_info">
                <strong
                  >If it's not your case — try to clean browser cache and cookie
                  and re-login.</strong
                >
              </div>
              <p></p>
              <p>Possible reasons:</p>
              <ul>
                <li>Your <strong>IP address is constantly changing</strong></li>
                <li>You've enabled <strong>VPN</strong></li>
                <li>
                  You have
                  <strong
                    >spoofing (constant change) browser User-Agent'a
                    enabled</strong
                  >
                </li>
                <li>You've singed in on <strong>another device</strong></li>
              </ul>
              <p>Possible solutions:</p>
              <ul>
                <li>
                  Disable <strong>third-party extensions</strong> in your
                  browser
                </li>
                <li>
                  Disable <strong>Opera VPN (if you use Opera browser)</strong>
                </li>
              </ul>
              <p>
                <strong
                  >Authorization from two devices at the same time — is
                  forbidden. We appreciate your safety.</strong
                >
              </p>
              <!---->
            </div>
          </div></support-faq-topic
        >
        <support-faq-topic
          class="topic topic_support"
          :class="{ 'is-open': second }"
          @click="second = !second"
          ><div class="topic__head link">
            <div class="topic__title">I was blocked in a chat</div>
            <div class="topic__content content" v-if="second">
              <p>
                If you think that you have changed and will no longer violate
                the rules - Leave a message via the button below
              </p>
              <p><strong></strong></p>
              <div class="quote quote_default quote_info">
                <strong
                  >Unjustified contesting of the temporary blocking in the chat
                  may increase the blocking period if the technical support
                  agent considers the issued time insufficient!</strong
                >
              </div>
              <p></p>
              <div class="topic__action">
                <a
                  class="button button_purple"
                  href="/en/support/account/7-i-was-blocked-in-chat/create"
                  ><div class="button__text">I need specialist help</div>
                  <div class="icon icon_support"></div
                ></a>
              </div>
              <!---->
            </div>
          </div></support-faq-topic
        >
        <support-faq-topic
          class="topic topic_support"
          :class="{ 'is-open': three }"
          @click="three = !three"
          ><div class="topic__head link">
            <div class="topic__title">
              I was blocked in social media channels
            </div>
            <div class="topic__content content" v-if="three">
              <p>
                If you think that the restriction was issued incorrectly, or you
                have already changes and will no longer violate it, Fill out the
                appeal in this form
              </p>
              <div class="topic__action">
                <a
                  class="button button_purple"
                  href="/en/support/account/8-i-was-blocked-in-social-media-channels/create"
                  ><div class="button__text">I need specialist help</div>
                  <div class="icon icon_support"></div
                ></a>
              </div>
              <!---->
            </div>
          </div></support-faq-topic
        >
        <support-faq-topic
          class="topic topic_support"
          :class="{ 'is-open': four }"
          @click="four = !four"
          ><div class="topic__head link">
            <div class="topic__title">I want to switch to a new account</div>
            <div class="topic__content content" v-if="four">
              <p>
                The rules of the site prohibit the use of two or more accounts,
                in this regard, you can warn us and voluntarily block one of the
                accounts.
              </p>

              <p>Specify the necessary data in the following form:</p>
              <ul>
                <li>1. Link to the CSFAIL profile of the old account</li>
                <li>2. Link to the CSFAIL profile of the new account</li>
                <li>3. The reason for the transition</li>
              </ul>

              <p>
                <strong class="text_blue"
                  >Statistics / Balance / Inventory, as well as other data are
                  not transferred between accounts.</strong
                >
              </p>
              <p>
                The appeal can be created from the old or from a new account.
              </p>
              <div class="topic__action">
                <a
                  class="button button_purple"
                  href="/en/support/account/269-I-want-to-switch-to-a-new-account/create"
                  ><div class="button__text">I need specialist help</div>
                  <div class="icon icon_support"></div
                ></a>
              </div>
              <!---->
            </div>
          </div></support-faq-topic
        >
        <support-faq-topic class="topic topic_support"
        :class="{'is-open': five}"
        @click="five=!five"
          ><div class="topic__head link">
            <div class="topic__title">I see "Inventory is empty"</div>
            <div class="topic__content content" v-if="five"><p>This inscription means, that your account inventory is empty - <strong>this inventory is unrelated with your Steam inventory.</strong></p><p>You can transfer items from the Steam inventory to the site by depositing. To deposit items, follow these steps:</p><p><br></p><h2>Go to the tab "<a href="/en/payment/global/skins" rel="noopener noreferrer" target="_blank">Deposit</a>" -&gt; "<a href="/en/payment/global/skins" rel="noopener noreferrer" target="_blank">Skins</a>" -&gt; make a deposit through Skinsback</h2><!----></div>
          </div></support-faq-topic
        >
        <support-faq-topic class="topic topic_support"
        :class="{'is-open': six}"
        @click="six=!six"
          ><div class="topic__head link">
            <div class="topic__title">Actions on my account are limited</div>
            <div class="topic__content content" v-if="six"><h2>If you get an error the actions on your account are limited <strong>—</strong> no need to panic.</h2><p><strong>Possible reasons:</strong></p><ul><li>You are logged in to another device or your <strong>IP address </strong>has changed. Just re-login.</li><li>You've been blocked for<strong> using multiple accounts</strong>, scripts, or bots</li></ul><p><strong>*</strong>In case of blocking — withdrawals, activate bonuses and chat won't be available for you.</p><p>We stand for fair play. There is no opportunity to remove the lock that was issued fairly.</p><p>Do not create tickets requesting to unblock account(s). Do not waste our time - we do not give a second chance.</p><p><strong>Attempts to create another accounts will lead to blocking.</strong></p><p><strong></strong></p><div class="quote quote_default quote_info"><strong>If you are convinced that you were blocked by mistake - contact us and we will quickly remove the restrictions.</strong></div><p></p><p><strong></strong></p><div class="quote quote_default quote_info"><strong>In the ticket, indicate the accounts for which you could be blocked — in this way you will save yourself and us timeThese tickets are the last to be processed, so please be patient and wait for an answer.</strong></div><p></p><div class="topic__action"><a class="button button_purple" href="/en/support/account/3-Actions-on-my-account-are-limited/create"><div class="button__text">I need specialist help</div><div class="icon icon_support"></div></a></div><!----></div>
          </div></support-faq-topic
        >
        <support-faq-topic class="topic topic_support"
        :class="{'is-open': seven}"
        @click="seven=!seven"
          ><div class="topic__head link">
            <div class="topic__title">
              Types of violations and penalties for them
            </div>
            <div class="topic__content content" v-if="seven"><h1>Types of violations are collected here according to the User Agreement.</h1><p><br></p><h2>1. Abuse of the Bonus System</h2><p><em>* Any abuse - circumvention of the technical restrictions established on the site and violates clause 3.4.1 UA</em></p><p><em>* Playing mainly for bonus items and/or promotional codes, without using the main part of the perfect deposit - can be regarded as an abuse of the bonus system.</em></p><p><br></p><ul><li>The user can get a block issued by the system, which prohibits: making a withdrawal, using any bonuses, using the chat and playing in Jackpot mode, if you have received this block, you need to contact the support section: "Actions on my account are limited"</li><li>The support agent, at its discretion, may offer an amnesty to a user with this violation outside the terms of the general amnesty.</li></ul><p><em>The amnesty includes resetting the account funds with the return of the deposit-withdrawal difference, resetting the inventory on the site.</em></p><p><strong><em></em></strong></p><div class="quote quote_default quote_info"><strong><em>Punishment - from restrictions on receiving all bonuses, to account blocking without a refund.</em></strong></div><p></p><h2>2. Multi-accounting or account transfer.</h2><p><em>&nbsp;* Violate paragraphs of the UA under the number: 3.4.6 and 3.4.7.</em></p><p><br></p><ul><li>The user can get a block issued by the system, which prohibits: making a withdrawal, using any bonuses, using the chat and playing in Jackpot mode, if you have received this block, you need to contact the support section: "Actions on my account are limited"</li><li>The support agent, at its discretion, may offer an amnesty to a user with this violation outside the terms of the general amnesty.</li></ul><p>The amnesty includes resetting the account funds with the return of the deposit-withdrawal difference, resetting the inventory on the site.</p><p><strong><em></em></strong></p><div class="quote quote_default quote_info"><strong><em>The punishment is the blocking of all accounts associated with the violation without a refund.</em></strong></div><p></p><h2>3. Use of third party software</h2><p><em>*Scripts, bots and any other means that can help you gain an advantage over other players or the site administration: violates clauses 3.4.1; 3.4.2; 3.4.5: 3.4.5.1 PS.</em></p><ul><li>You can talk about the principle of this software for the first time and get a bonus at the discretion and suggestion of the administration.</li></ul><p><strong><em></em></strong></p><div class="quote quote_default quote_info"><strong><em>Punishment - account blocking without a refund.</em></strong></div><p></p><h2>4. Use part or full name of the secret code / promo code</h2><p>*When creating your referral code, after the publication of the first one (3.4.9 PS)</p><p><strong><em></em></strong></p><div class="quote quote_default quote_info"><strong><em>Punishment - restriction on the referral system.</em></strong></div><p></p><h2>5. Publicly accuse the site of cheating or slander the site in every possible way.</h2><p><strong><em></em></strong></p><div class="quote quote_default quote_info"><strong><em>Punishable by blocking an account without a refund</em></strong></div><p></p><h2>6. Use the Naming of the project or its partners when creating a referral link</h2><p><strong><em></em></strong></p><div class="quote quote_default quote_info"><strong><em>Penalized by blocking the referral system</em></strong></div><p></p><p>* Any violation of the terms of the PS from section 3.4 is prohibited for the User, and may be punished up to blocking the account.</p><!----></div>
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
      four: false,
      five: false,
      six: false,
      seven: false,
    };
  },
};
</script>
    
    <style>
</style>