<template>
  <shell-footer class="footer" :class='{"footer_fixed": fixed_class}'>
    <div class="footer__wrap">
      <div class="footer__control">
        <div class="footer__logo-wrap">
          <div class="footer__logo"></div>
        </div>
        <div class="footer__date">© 2018 – 2023 csfail</div>
        <!-- <shell-language-selector
          class="footer__language"
          _nghost-serverapp-c122=""
        >
          <div
            _ngcontent-serverapp-c122=""
            dropdown=""
            dropdownopenclass="is-open"
            class="languages"
          >
            <div
              _ngcontent-serverapp-c122=""
              dropdowntoggle=""
              class="languages__current"
            >
              <div _ngcontent-serverapp-c122="" class="flag flag_en"></div>
              <div _ngcontent-serverapp-c122="" class="languages__current-name">
                English
              </div>
              <img
                src="../../public/images/icon/down-arrow.png"
                class="icon down_arrow lang_arrow"
              />
            </div>
            <div
              _ngcontent-serverapp-c122=""
              dropdowncontent=""
              class="languages__list"
            >
              <div
                _ngcontent-serverapp-c122=""
                scroll="vertical"
                class="languages__scroll scroll scroll_vertical"
              >
                <a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/ru/"
                  hreflang="ru"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_ru"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Русский
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link is-active"
                  href="https://csfail.pro/en/"
                  hreflang="en"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_en"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    English
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/pt-BR/"
                  hreflang="pt-BR"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_br"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Portuguese (Brazil)
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/tr/"
                  hreflang="tr"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_tr"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Türkçe
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/uk/"
                  hreflang="uk"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_uk"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Українська
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/pl/"
                  hreflang="pl"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_pl"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Polski
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/zh-CN/"
                  hreflang="zh-CN"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_cn"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    中文
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/cs/"
                  hreflang="cs"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_cs"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Český
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/fi/"
                  hreflang="fi"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_fi"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Suomalainen
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/fr/"
                  hreflang="fr"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_fr"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Français
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/de/"
                  hreflang="de"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_de"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Deutsch
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/hu/"
                  hreflang="hu"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_hu"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Magyar
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/it/"
                  hreflang="it"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_it"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Italiano
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/no/"
                  hreflang="no"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_no"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Norsk
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/pt/"
                  hreflang="pt"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_pt"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Português
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/ro/"
                  hreflang="ro"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_ro"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Română
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/sk/"
                  hreflang="sk"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_sk"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Slovenský
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/es/"
                  hreflang="es"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_es"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Español
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/sv/"
                  hreflang="sv"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_sv"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Svensk
                  </div> </a
                ><a
                  _ngcontent-serverapp-c122=""
                  class="languages__item link"
                  href="https://csfail.pro/vi/"
                  hreflang="vi"
                >
                  <div _ngcontent-serverapp-c122="" class="flag flag_vi"></div>
                  <div _ngcontent-serverapp-c122="" class="flag__name">
                    Tiếng việt
                  </div> </a
                >
              </div>
            </div>
          </div>
        </shell-language-selector> -->
      </div>
      <div class="footer__medias medias">
        <div class="medias__title">Social media</div>
        <a target="_blank" class="medias__link" href="https://t.me/csfail"
          ><img src="../../public/images/icon/telegram.png" class="icon" /></a
        ><a
          target="_blank"
          class="medias__link"
          href="https://discord.gg/csfail"
          ><img src="../../public/images/icon/discord.png" class="icon" /></a
        ><a
          target="_blank"
          class="medias__link"
          href="https://vk.com/cs.fail"
          ><img src="../../public/images/icon/vk.png" class="icon" /></a
        ><a
          target="_blank"
          class="medias__link"
          href="https://www.youtube.com/c/CSFAIL2020"
          ><img src="../../public/images/icon/youtube.png" class="icon" /></a
        >
      </div>
      
    </div>
    <div class="footer__danger footer__wrap">
      <div class="footer__info footer__wrap">
        <div class="attention-wrap">
          <div class="footer__attention attention">
            <img
              src="../../public/images/main-footer-18.webp"
              alt="Play responsibly"
              class="attention__img"
            />
            <div class="attention__title">Play responsibly</div>
          </div>
          <a
            href="https://www.trustpilot.com/review/cs.fail"
            target="_blank"
            class="link link_trust-pilot-mobile"
            ><img
              src="../../public/images/main-trust-pilot.webp"
              alt="Trust pilot"
              class="footer__trust"
          /></a>
        </div>
        <div class="footer__address">
          Company number 13246765, 16 John Nicholass Crescent, Ellesmere Port,
          Cheshire, United Kingdom CH65 2DL, SIC Codes: 47910
        </div>
      </div>
      <a
        href="https://www.trustpilot.com/review/cs.fail"
        target="_blank"
        class="link link_trust-pilot"
        ><img
          src="../../public/images/main-trust-pilot.webp"
          alt="Trust pilot"
          class="footer__trust"
      /></a>
    </div>
    <div class="footer__nav">
      <a
        class="link footer__nav-item"
        @click="$router.push('/support')"
        >Support</a
      ><a
        class="link footer__nav-item"
        @click="$router.push('/support/contact')"
        >Contacts</a
      ><a
        class="link footer__nav-item"
        @click="$router.push('/support/user-agreemen')"
        >User agreement</a
      ><a
        class="link footer__nav-item"
        @click="$router.push('/support/privacy-policy')"
        >Privacy Policy</a
      ><a
        class="link footer__nav-item"
        @click="$router.push('/provably-fair')"
        >Provably fair</a
      >
    </div>
  </shell-footer>
</template>

<script>
export default {
    props: {
        fixed_class:{
            type: String,
            required: false,
            default: ''
        },
    }
};
</script>

<style>
    [_ngcontent-serverApp-c122]:root {
      --gutter: 2rem;
      --gutter-page: 4rem;
      --gutter-shop: 2.5rem;
      --gutter-support: 2.5rem
    }

    @media all and (max-width: 991px) {
      [_ngcontent-serverApp-c122]:root {
        --gutter: 1.5rem;
        --gutter-page: 2rem
      }
    }

    .languages[_ngcontent-serverApp-c122] {
      position: relative;
      z-index: 2;
      display: flex;
      flex-flow: column-reverse nowrap;
      justify-content: flex-end;
      min-width: 18rem;
      background-color: #262e51;
      border-radius: 1rem;
      cursor: pointer;
      transition: background-color .2s ease-out 0s, border-radius .2s ease-out 0s
    }

    .languages[_ngcontent-serverApp-c122]:hover:not(.is-open) {
      background-color: #293258
    }

    .languages[_ngcontent-serverApp-c122]:hover:not(.is-open) .languages__list[_ngcontent-serverApp-c122] {
      background-color: #293258
    }

    .languages.is-open[_ngcontent-serverApp-c122] {
      border-radius: 0 0 1rem 1rem;
      box-shadow: 0 1.4rem 5.4rem #15192f80
    }

    .languages.is-open[_ngcontent-serverApp-c122] .languages__current[_ngcontent-serverApp-c122] .flag[_ngcontent-serverApp-c122] {
      opacity: .4
    }

    .languages.is-open[_ngcontent-serverApp-c122] .languages__current[_ngcontent-serverApp-c122] .icon[_ngcontent-serverApp-c122] {
      transform: rotate(0)
    }

    .languages.is-open[_ngcontent-serverApp-c122] .languages__list[_ngcontent-serverApp-c122] {
      opacity: 1;
      visibility: visible;
      transform: translateY(-3rem)
    }

    .languages[_ngcontent-serverApp-c122] .languages__current[_ngcontent-serverApp-c122] {
      display: flex;
      align-items: center;
      gap: .8rem;
      padding: 1.2rem
    }

    .languages[_ngcontent-serverApp-c122] .languages__current[_ngcontent-serverApp-c122] .flag[_ngcontent-serverApp-c122] {
      opacity: 1;
      transition: opacity .2s ease-out 0s
    }

    .languages[_ngcontent-serverApp-c122] .languages__current[_ngcontent-serverApp-c122] .icon[_ngcontent-serverApp-c122] {
      margin-left: auto;
      transform: rotate(180deg);
      transition: transform .2s ease-out 0s
    }

    .languages[_ngcontent-serverApp-c122] .languages__current-name[_ngcontent-serverApp-c122] {
      color: #d6ddea;
      font-weight: 500;
      font-size: 1.4rem
    }

    .languages[_ngcontent-serverApp-c122] .languages__list[_ngcontent-serverApp-c122] {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 17.6rem;
      padding: 1.2rem 0 1.2rem 1.2rem;
      background-color: #262e51;
      border-radius: 1rem 1rem 0 0;
      opacity: 0;
      visibility: hidden;
      transition: background-color .2s ease-out 0s, opacity .2s ease-out 0s, visibility .2s ease-out 0s, transform .2s ease-out 0s
    }

    @media (hover: hover) {
      .languages[_ngcontent-serverApp-c122] .languages__list[_ngcontent-serverApp-c122] {
        padding-right: .75rem
      }
    }

    .languages[_ngcontent-serverApp-c122] .languages__scroll[_ngcontent-serverApp-c122] {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%
    }

    @media (hover: hover) {
      .languages[_ngcontent-serverApp-c122] .languages__scroll[_ngcontent-serverApp-c122] {
        margin-right: -.45rem
      }
    }

    .languages[_ngcontent-serverApp-c122] .languages__item[_ngcontent-serverApp-c122] {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: #d6ddea;
      font-weight: 500;
      font-size: 1.4rem;
      transition: opacity .2s ease-out 0s
    }

    .languages[_ngcontent-serverApp-c122] .languages__item[_ngcontent-serverApp-c122]:hover,
    .languages[_ngcontent-serverApp-c122] .languages__item.is-active[_ngcontent-serverApp-c122] {
      opacity: .4
    }

    .languages[_ngcontent-serverApp-c122] .languages__item.is-active[_ngcontent-serverApp-c122]:hover {
      opacity: .8
    }

    .languages[_ngcontent-serverApp-c122] .flag[_ngcontent-serverApp-c122] {
      flex: 0 0 auto;
      opacity: 1
    }

    .languages_row[_ngcontent-serverApp-c122] .languages__list[_ngcontent-serverApp-c122] {
      left: 3.6rem;
      bottom: 0;
      display: flex;
      width: auto;
      border-radius: 0 1rem 1rem 0;
      transform: translate(-.4rem)
    }

    .languages_row[_ngcontent-serverApp-c122] .flag[_ngcontent-serverApp-c122]:not(:last-child) {
      margin: 0 1rem 0 0
    }

    .languages_row.is-open[_ngcontent-serverApp-c122] .languages__list[_ngcontent-serverApp-c122] {
      transform: translate(0)
    }

    @media all and (max-width: 991px) {
      .languages[_ngcontent-serverApp-c122] {
        min-width: 14rem
      }
    }

    .flag[_ngcontent-serverApp-c122] {
      display: block;
      width: 1.8rem;
      height: 1.8rem;
      background-color: transparent;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: contain;
      background-clip: border-box
    }

    .flag.flag_ru[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/ru.2d7e9688cf7074cb.svg)
    }

    .flag.flag_en[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/en.900e158070a92bf3.svg)
    }

    .flag.flag_pl[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/pl.de97314430678533.svg)
    }

    .flag.flag_tr[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/tr.656819940c982f34.svg)
    }

    .flag.flag_cs[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/cs.dbe17043746a1a2c.svg)
    }

    .flag.flag_fr[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/fr.bbb9bb92568d726c.svg)
    }

    .flag.flag_es[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/es.da6b107524c15386.svg)
    }

    .flag.flag_pt[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/pt.f1ba79f795e64b98.svg)
    }

    .flag.flag_de[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/de.f456236176565e3f.svg)
    }

    .flag.flag_sv[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/sv.aff8f185a81a1ebd.svg)
    }

    .flag.flag_br[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/br.589f596a73f7a86e.svg)
    }

    .flag.flag_uk[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/uk.032489a962599720.svg)
    }

    .flag.flag_fi[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/fi.5defd45625212f10.svg)
    }

    .flag.flag_hu[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/hu.d969e44410298596.svg)
    }

    .flag.flag_it[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/it.c2a728e70e21f481.svg)
    }

    .flag.flag_no[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/no.6a2966bf09e40f43.svg)
    }

    .flag.flag_ro[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/ro.daea66467793f40b.svg)
    }

    .flag.flag_sk[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/sk.dde0475dd854b0e3.svg)
    }

    .flag.flag_vi[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/vi.1a401637790fa17e.svg)
    }

    .flag.flag_cn[_ngcontent-serverApp-c122] {
      background-image: url(../../public/images/cn.81052d135ae518e5.svg)
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

    .footer {
      position: relative;
      z-index: 104;
      display: block;
      width: 100%;
      padding: 4rem 10rem
    }

    .footer_fixed,
    .footer_game {
      margin: auto;
      padding: 4rem 0
    }

    .footer_fixed {
      max-width: 121rem
    }

    .footer_game {
      max-width: 180rem
    }

    .footer.chat_open {
      width: calc(100% - 38.8rem)
    }

    .footer .footer__wrap {
      display: flex;
      justify-content: space-between
    }

    .footer .footer__control {
      display: flex;
      align-items: center
    }

    .footer .footer__language {
      flex: 0 0 auto
    }

    .footer .footer__logo {
      width: 14.6rem;
      height: 4rem;
      margin-right: 2.5rem;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: url(../../public/images/main-footer-logo.30f4143f55c104e3.webp)
    }

    .footer .footer__date {
      font-family: Gotham;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.7rem;
      text-transform: uppercase;
      color: #7f8bad;
      margin-right: 1.4rem
    }

    .footer .footer__medias {
      display: flex;
      align-items: center;
      column-gap: 1.5rem
    }

    .footer .footer__medias .medias__title {
      font-family: Gotham;
      font-weight: 500;
      font-size: 1.2rem;
      text-transform: uppercase;
      color: #7f8bad66
    }

    @media all and (max-width: 768px) {
      .footer .footer__medias .medias__title {
        display: none
      }
    }

    .footer .footer__medias .icon {
      cursor: pointer;
      color: #9fb1d4;
      font-size: 2.5rem;
      transition: color .2s ease-out 0s
    }

    .footer .footer__medias .icon:hover {
      color: #d6e2f9
    }

    .footer .footer__medias .medias__link {
      text-decoration: none
    }

    .footer .footer__medias .medias__link .icon {
      font-size: 2.4rem
    }

    .footer .footer__danger {
      background: rgba(37, 48, 94, .1);
      border: .1rem solid rgba(74, 86, 128, .2);
      border-radius: 2.5rem;
      padding: 2.9rem 3.7rem;
      column-gap: 36.4rem;
      margin-top: 3.1rem
    }

    .footer .footer__danger .footer__attention {
      display: flex;
      align-items: center;
      column-gap: .9rem
    }

    .footer .footer__danger .attention__img {
      width: 6.8rem;
      height: 6.8rem
    }

    .footer .footer__danger .attention__title {
      color: #ba4b67;
      font-weight: 600;
      font-size: 1.4rem;
      text-transform: uppercase;
      width: 29%;
      line-height: 1.8rem;
      letter-spacing: .5px
    }

    .footer .footer__danger .footer__info {
      align-items: center;
      column-gap: 5.5rem
    }

    .footer .footer__danger .footer__address {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.1rem;
      color: #7f8bad
    }

    .footer .footer__danger .footer__trust {
      width: 11.8rem;
      height: 6.4rem;
      object-fit: contain
    }

    .footer .footer__nav {
      display: flex;
      justify-content: center;
      margin-top: 3.2rem;
      column-gap: 4rem
    }

    .footer .footer__nav .footer__nav-item {
      color: #9fb1d4;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.9rem;
      text-decoration: none;
      transition: filter .2s ease-out 0s
    }

    .footer .footer__nav .footer__nav-item:hover {
      filter: brightness(1.5)
    }

    .footer .link_trust-pilot {
      transition: opacity .2s ease-out 0s
    }

    .footer .link_trust-pilot:hover {
      opacity: .5
    }

    @media all and (max-width: 768px) {
      .footer .link_trust-pilot {
        display: none
      }
    }

    .footer .link_trust-pilot-mobile {
      display: none
    }

    @media all and (max-width: 768px) {
      .footer .link_trust-pilot-mobile {
        display: block
      }
    }

    @media all and (max-width: 991px) {
      .footer {
        z-index: 1;
        padding: 0 1.5rem;
        margin-bottom: 3rem;
        margin-top: 3.6rem
      }

      .footer .footer__danger {
        padding: 3rem 3.9rem 3rem 3.4rem;
        column-gap: 11.4rem;
        margin-top: 2.9rem
      }

      .footer .footer__nav {
        margin-top: 3.4rem
      }
    }

    @media all and (max-width: 767px) {
      .footer {
        margin-top: 2.6rem
      }

      .footer .footer__logo-wrap {
        width: 2.9rem;
        height: 2.9rem;
        margin-right: .9rem;
        overflow: hidden
      }

      .footer .footer__logo {
        width: 9.4rem;
        height: 2.9rem
      }

      .footer .footer__date {
        font-size: 1rem;
        line-height: 1.2rem;
        margin-right: 1rem;
        width: 30%
      }

      .footer .footer__medias {
        column-gap: 1.2rem
      }

      .footer .footer__medias .medias__link .icon {
        font-size: 2.1rem
      }

      .footer .footer__danger {
        margin-top: 1.3rem;
        border-radius: 1.4rem;
        padding: 1.5rem 1.4rem .9rem;
        column-gap: 0
      }

      .footer .footer__danger .attention__title {
        font-size: 1rem;
        margin: .8rem 0 0 1.4rem;
        line-height: 1.2rem
      }

      .footer .footer__danger .footer__trust {
        width: 7.6rem;
        margin-top: -1.4rem
      }

      .footer .footer__danger .footer__attention {
        align-items: flex-start;
        column-gap: 0;
        width: 63%
      }

      .footer .footer__danger .attention__img {
        width: 4rem;
        height: 4rem;
        margin-left: 2.2rem
      }

      .footer .footer__danger .footer__address {
        text-align: center;
        font-size: 1rem;
        line-height: 1.5rem
      }

      .footer .footer__info {
        flex-direction: column;
        line-height: 1.1rem
      }

      .footer .attention-wrap {
        display: flex
      }

      .footer .footer__nav {
        margin-top: 1.2rem;
        gap: 1rem 1.4rem;
        flex-wrap: wrap
      }

      .footer .footer__nav .footer__nav-item {
        font-size: 1.3rem
      }
    }

    @media all and (max-width: 991px) {
      .footer .footer__wrap {
        flex-direction: column;
        gap: 1rem
      }

      .footer .footer__language {
        margin-left: auto
      }
    }
</style>