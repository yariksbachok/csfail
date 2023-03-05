<template>
    <div class="container">
      <router-outlet></router-outlet>
      <support-page-layout _nghost-serverapp-c148="">
        <div _ngcontent-serverapp-c148="" class="support-page">
          <deposite v-if="$route.params.article == 'deposits'"/>
          <account  v-if="$route.params.article == 'account'"/>
          <bonuses v-if="$route.params.article == 'bonuses'"/>
          <withdrawals v-if="$route.params.article == 'withdrawals'"/>
          <website v-if="$route.params.article == 'website'"/>
          <partnership v-if="$route.params.article == 'partnership'"/>
          <crash v-if="$route.params.article == 'crash'"/>
          <wheel v-if="$route.params.article == 'wheel'"/>
          <jackpot v-if="$route.params.article == 'jackpot'"/>
          <double v-if="$route.params.article == 'double'"/>
          <contact v-if="$route.params.article == 'contact'"/>
          <PrivacyPolicy v-if="$route.params.article == 'privacy-policy'"/>
          <UserAgreement v-if="$route.params.article == 'user-agreement'"/>
        </div>
      </support-page-layout>
    </div>
    <Footer/>
  </template>
  
  <script>
 
  import Footer from "../../components/Footer";
  import deposite from "./deposite.vue"
  import account from "./account.vue"
  import bonuses from "./bonuses.vue"
  import withdrawals from "./withdrawals.vue"
  import website from "./website.vue"
  import partnership from "./partnership.vue"
  import crash from "./crash.vue"
  import wheel from "./wheel.vue"
  import jackpot from "./jackpot.vue"
  import double from "./double.vue"
  import contact from "./contact.vue"
  import PrivacyPolicy from "./PrivacyPolicy.vue"
  import UserAgreement from "./UserAgreement.vue"
  export default {
    components: {
      Footer, deposite, account, bonuses, withdrawals, website, partnership, crash, wheel, jackpot, double, contact, PrivacyPolicy, UserAgreement
    },
  };
  </script>
  
  <style>
  
  </style>