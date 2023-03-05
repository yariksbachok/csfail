<template>
  <SupportAside contact />
  <div _ngcontent-serverapp-c152="" class="support-page__content support-content">
  <support-contacts class="support-static no-mask"
    >
    <BtnBack name="Contact"/>
    <div class="contacts">
      <div class="contacts__row">
        <div class="contacts__row-header">ITSFAIL LTD:</div>
        Company number 13246765, 16 John Nicholass Crescent, Ellesmere Port,
        Cheshire, United Kingdom CH65 2DL, SIC Codes: 47910
      </div>
      <div class="contacts__support">
        <a href="mailto:support@csfail.com">support@csfail.com</a>
        <div style="margin-top: 10px">
          For advertising: <a href="mailto:adv@csfail.com">adv@csfail.com</a>
        </div>
      </div>
    </div></support-contacts
  >
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
    };
  },
};
</script>
      
      <style>
</style>