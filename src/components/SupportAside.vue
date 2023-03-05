<template>
  <div _ngcontent-serverapp-c148="" class="support-page__aside support-aside">
    <div _ngcontent-serverapp-c148="" class="support-aside__tabs">
      <a
        _ngcontent-serverapp-c148=""
        routerlink="/support"
        class="support-aside__tab button is-active"
        @click="$router.push('/support')"
        >FAQ</a
      ><a
        _ngcontent-serverapp-c148=""
        routerlink="/support/tickets"
        routerlinkactive="is-active"
        class="support-aside__tab button"
        >My tickets</a
      >
    </div>
    <support-aside-sections
      _ngcontent-serverapp-c148=""
      _nghost-serverapp-c145=""
      
    >
      <div
        _ngcontent-serverapp-c145=""
        scroll="vertical"
        class="support-aside__sections scroll scroll_vertical"
      >
        <support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': account}"
          @click="$router.push('/support/account')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/250bf3c4-5443-4b9e-8424-f172f6beea93-61f144199b2e1.png"
            />
          </div>
          <div class="section__title">Account</div>
          <div class="section__subtitle">
            Restriction, inventory
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': bonuses}"
          @click="$router.push('/support/bonuses')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/71dd04e7-0813-4af3-a024-22cbb6b7e62a-61f1441997ff6.png"
            />
          </div>
          <div class="section__title">Bonuses</div>
          <div class="section__subtitle">
            Questions about bonuses
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          :class="{'is-active': deposit}"
          tabindex="0"
          @click="$router.push('/support/deposits')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/2baf7a6b-d82e-4d9e-a16f-dceaa5c38ea0-61f840ad03451.png"
            />
          </div>
          <div class="section__title">Deposits</div>
          <div class="section__subtitle">
            Deposit not received?
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': withdrawals}"
          @click="$router.push('/support/withdrawals')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/bd0bbadb-6a5c-472d-85eb-064f08e07bb9-61f8406f1ee4a.png"
            />
          </div>
          <div class="section__title">Withdrawals</div>
          <div class="section__subtitle">
            Withdrawal problems
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': website}"
          @click="$router.push('/support/website')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/47d43225-cd96-46ae-94cf-a8ca408c969b-61f144199fd65.png"
            />
          </div>
          <div class="section__title">Website</div>
          <div class="section__subtitle">
            Website problems
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': partnership}"
          @click="$router.push('/support/partnership')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/46153733-092e-40db-a7c9-c419b277cb9a-61f1441996d87.png"
            />
          </div>
          <div class="section__title">Partnership</div>
          <div class="section__subtitle">
            Partnership with us
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': crash}"
          @click="$router.push('/support/crash')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/c3a9acc6-f8b2-46f8-8772-29f17f9fd295-61f840e108978.png"
            />
          </div>
          <div class="section__title">Crash</div>
          <div class="section__subtitle">
            FAQ about Crash
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': wheel}"
          @click="$router.push('/support/wheel')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/6be64454-a0cd-43cd-9a32-9b0c06684e53-61f81dcd974bf.png"
            />
          </div>
          <div class="section__title">Wheel</div>
          <div class="section__subtitle">
            FAQ about Wheel
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': jackpot}"
          @click="$router.push('/support/jackpot')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/df6dd7b8-db61-4bc1-b58b-997c9255d365-61f81dcd9c950.png"
            />
          </div>
          <div class="section__title">Jackpot</div>
          <div class="section__subtitle">
            FAQ about Jackpot
          </div> </support-aside-section
        ><support-aside-section
          _ngcontent-serverapp-c145=""
          routerlinkactive="is-active"
          class="section section_support-aside link"
          tabindex="0"
          :class="{'is-active': double}"
          @click="$router.push('/support/double')"
        >
          <div class="section__icon">
            <img
              class="image"
              src="../../public/images/5fd4f339-0c0e-46ca-bac3-8dca3f2f8644-63ced1260f851.png"
            />
          </div>
          <div class="section__title">Double</div>
          <div class="section__subtitle">Double Questions</div>
        </support-aside-section>
      </div>
    </support-aside-sections>
    <div _ngcontent-serverapp-c148="" class="support-aside__buttons">
      <a
        _ngcontent-serverapp-c148=""
        class="button"
        :class="{'is-active': contact}"
        @click="$router.push('/support/contact')"
        >Contacts</a
      ><a
        _ngcontent-serverapp-c148=""
        class="button"
        :class="{'is-active': privacy_policy}"
        @click="$router.push('/support/privacy-policy')"
      >
        Privacy Policy </a
      ><a
        _ngcontent-serverapp-c148=""
        class="button button_block"
        :class="{'is-active': user_agreement}"
        @click="$router.push('/support/user-agreement')"
        >User agreement</a
      >
    </div>
  </div>
</template>

<script>
export default {
    props: {
        deposit:{
            type: Boolean
        },
        account: {
          type: Boolean
        },
        bonuses: {
          type: Boolean
        },
        withdrawals: {
          type: Boolean
        },
        website: {
          type: Boolean
        },
        partnership: {
          type: Boolean
        },
        crash: {
          type: Boolean
        },
        wheel: {
          type: Boolean
        },
        jackpot: {
          type: Boolean
        },
        double: {
          type: Boolean
        },
        contact: {
          type: Boolean
        },
        privacy_policy: {
          type: Boolean
        },
        user_agreement: {
          type: Boolean
        }
    }
};
</script>

<style>

[_nghost-serverApp-c148] {
      display: block;
      width: 100%
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
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden
    }

    @media (hover: hover) {
      [_nghost-serverApp-c145] {
        margin-right: calc(var(--gutter-support) / -2 - .15rem)
      }
    }

    @media all and (max-width: 992px) {
      [_nghost-serverApp-c145] {
        height: 47rem
      }
    }
    
   
</style>