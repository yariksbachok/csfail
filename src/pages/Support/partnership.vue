<template>
    <SupportAside partnership />
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
            class="topic topic_support"
            :class="{ 'is-open': first }"
              @click="first = !first"
            ><div class="topic__head link">
              <div class="topic__title">
                I get notification about hidden inventory
              </div>
              <div class="topic__content content" v-if="first">
                <p>
                  You need to open your <strong>Steam inventory</strong> in
                  <strong>your profile's privacy settings.</strong>
                </p>
                <ol>
                  <li>
                    Go to your Steam profile and click "<strong
                      >Edit Profile</strong
                    >"
                  </li>
                  <li>
                    In the left menu, click "<strong>Privacy Settings</strong>"
                  </li>
                  <li>
                    Look for "<strong>Inventory</strong>" and next change the
                    status to "<strong>Public</strong>"
                  </li>
                </ol>
                <h2>
                  <div class="quote quote_default quote_info">
                    Ready! You have opened your inventory and can accept trades!
                  </div>
                </h2>
                
              </div>
            </div>
            </support-faq-topic
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
      };
    },
  };
  </script>
      
      <style>
  </style>