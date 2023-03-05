<template>
  <SupportAside deposit />
  <div
    _ngcontent-serverapp-c152=""
    class="support-page__content support-content"
  >
    <router-outlet _ngcontent-serverapp-c152=""></router-outlet
    ><support-faq-topics _nghost-serverapp-c154="">
      <BtnBack />
      <div
        _ngcontent-serverapp-c154=""
        scroll="vertical"
        class="support-content__topics scroll scroll_vertical"
      > 
        <support-faq-topic
          _ngcontent-serverapp-c154=""
          class="topic topic_support"
          :class="{'is-open': first}"
          @click="first = !first"
          ><div class="topic__head link">
            <div class="topic__title">I didn’t receive the money!</div>
            <div class="topic__content content" v-if="first">
              <p>
                The money may be credited to the balance within
                <strong class="text_blue">60 minutes</strong>.
              </p>
              <p>
                In very rare cases - within several days (according to payment
                method).
              </p>

              <div class="quote quote_default quote_info is-at-up">
                <p></p>
                <div class="quote__text">
                  If you didn’t receive the money during 60 minutes, contact us,
                  but if less time has passed, the ticket will be closed
                  automatically.
                </div>
                <p></p>
              </div>

              <p>
                While processing the request, specify this data, otherwise the
                ticket will be closed automatically
              </p>
              <ul>
                <li>Payment method (Credit card, QIWI or other)</li>
                <li>Payment Amount</li>
                <li>Payment time</li>
              </ul>

              <p><strong class="text_blue"></strong></p>
              <strong class="text_blue">
                <p>
                  If you deposit with a credit card and didn’t receive the
                  payment — It means that the
                  <strong class="text_blue"
                    >3DSecure (confirmation of payment via SMS code)</strong
                  >
                  function is not activated on the card
                </p></strong
              >
              <div class="topic__action">
                <a
                  class="button button_purple"
                  href="/en/support/deposits/11-i-didnt-receive-the-money/create"
                  ><div class="button__text">I need specialist help</div>
                  <div class="icon icon_support"></div
                ></a>
              </div>
            </div>
          </div> </support-faq-topic
        ><support-faq-topic
          class="topic topic_support"
          :class="{'is-open': second}"
          @click="second=!second"
          ><div class="topic__head link">
            <div class="topic__title">Payment failed, money not debited!</div>
            <div class="topic__content content" v-if="second"><p>Similar errors occur in all payment systems, they have a different code and a different description, but the essence is the same. Often for the following reasons:</p><ul><li>Your country / card is not supported by the payment system - Try another payment method, use a VPN</li><li>You pay for the first time through this payment system - Try to make a payment in <strong>5-24 hours</strong>. Sometimes the payment system needs to check you in order to cut off fraud.</li></ul><p>Error "Payment to the Seller from the country you specified during registration is prohibited."</p><p>This error occurs with WebMoney and means that it is impossible to make a payment from your WM purse.</p><p></p><div class="quote quote_default quote_info">Unfortunately, we cannot influence these errors. If you see this - We recommend that you try to make a payment through another payment system / another payment method.</div><p></p><!----></div>
          </div> </support-faq-topic
        ><support-faq-topic
          class="topic topic_support"
          :class="{'is-open': three}"
          @click="three = !three"
          ><div class="topic__head link">
            <div class="topic__title">Deposit with skins</div>
            <div class="topic__content content" v-if="three"><p>Skins on our website are accepted using the SkinsBack payment system.</p><p>Often, they underestimate the cost of skins, and also do not accept everything from your Steam inventory.</p><p>The minimum replenishment amount using this method is <strong>~ $4</strong>.</p><p></p><div class="quote quote_default quote_info">Replenishment may take up to 60 minutes; if the balance has not arrived during this time, please contact us.</div><p></p><div class="topic__action"><a class="button button_purple" href="/en/support/deposits/12-deposit-with-skins/create"><div class="button__text">I need specialist help</div><div class="icon icon_support"></div></a></div><!----></div>
          </div> </support-faq-topic
        ><support-faq-topic
          class="topic topic_support"
          :class="{'is-open': four}"
          @click="four=!four"
          ><div class="topic__head link">
            <div class="topic__title">
              I made a mistake in the deposit amount
            </div>
            <div class="topic__content content" v-if="four"><p>If you made a mistake with the payment amount, indicate the wrong amount in the application and do not perform any actions on your account until the full refund.</p><p>After verification, you will receive further return instructions.</p><p></p><div class="quote quote_default quote_info">If after the deposit you made a purchase or sale of a skin, participated in the game, then a refund is not possible!</div><p></p><div class="topic__action"><a class="button button_purple" href="/en/support/deposits/14-i-made-a-mistake-in-the-deposit-amount/create"><div class="button__text">I need specialist help</div><div class="icon icon_support"></div></a></div><!----></div>
          </div>

        </support-faq-topic>
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
        four: false
    }
  }
};
</script>
  
  <style>
</style>