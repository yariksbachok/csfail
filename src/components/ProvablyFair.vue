<template>
  <provably-fair-menu
    class="provably-fair-page__menu menu"
    _nghost-serverapp-c200=""
  >
    <div _ngcontent-serverapp-c200="" class="menu__title">
      <img src="../../public/images/icon/scale.png" class="icon_bonus_big">Proven
      Fairness
    </div>
    <div _ngcontent-serverapp-c200="" class="menu__tabs">
      <a
        _ngcontent-serverapp-c200=""
        @click="$router.push('/provably-fair')"
        routerlinkactive="is-active"
        class="menu__tab link"
        :class="{'is-active': overview}"
        >Overview</a
      ><a
        _ngcontent-serverapp-c200=""
        @click="$router.push('/provably-fair/description')"
        routerlinkactive="is-active"
        class="menu__tab link"
        :class="{'is-active': detailed}"
        >Detailed description</a
      ><a
        _ngcontent-serverapp-c200=""
        @click="$router.push('/provably-fair/realization')"
        routerlinkactive="is-active"
        class="menu__tab link"
        :class="{'is-active': realization}"
        >Realization</a
      >
    </div>
  </provably-fair-menu>
</template>

<script>
export default {
    props:{
        overview:{
            type: Boolean,
            required: false
        },
        detailed:{
            type: Boolean,
            required: false
        },
        realization:{
            type: Boolean,
            required: false
        }
    }
};
</script>

<style>
[_ngcontent-serverApp-c200]:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}

@media all and (max-width: 991px) {
  [_ngcontent-serverApp-c200]:root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}

[_nghost-serverApp-c200] {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 29.2rem;
  height: -moz-fit-content;
  height: fit-content;
  padding: 2rem;
  border-radius: 1.4rem;
  background-color: #161c34;
}

[_nghost-serverApp-c200] .menu__title[_ngcontent-serverApp-c200] {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #d6e2fa;
}

[_nghost-serverApp-c200]
  .menu__title[_ngcontent-serverApp-c200]
  .icon[_ngcontent-serverApp-c200] {
  font-size: 2.4rem;
  background: linear-gradient(180deg, #59699f 0%, #b8c5f2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

[_nghost-serverApp-c200] .menu__tabs[_ngcontent-serverApp-c200] {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2rem;
}

[_nghost-serverApp-c200] .menu__tab[_ngcontent-serverApp-c200] {
  --gradient-color1: rgba(39, 51, 93, 0.2);
  --gradient-color2: rgba(39, 51, 93, 0.2);
  display: flex;
  background: linear-gradient(
    115.46deg,
    var(--gradient-color1) 21.77%,
    var(--gradient-color2) 80.24%
  );
  border-radius: 1rem;
  padding: 1.6rem 1.8rem;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.9rem;
  color: #9badcf;
  word-break: break-all;
  cursor: pointer;
  transition: color 0.2s ease-out 0s, --gradient-color1 0.2s ease-out 0s,
    --gradient-color2 0.2s ease-out 0s;
}

[_nghost-serverApp-c200] .menu__tab[_ngcontent-serverApp-c200]:hover {
  color: #deebff;
}

[_nghost-serverApp-c200] .menu__tab.is-active[_ngcontent-serverApp-c200] {
  --gradient-color1: #253058;
  --gradient-color2: #3b497b;
  color: #deebff;
}

@media all and (max-width: 991px) {
  [_nghost-serverApp-c200] {
    width: 100%;
  }
}
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
}

code.hljs {
  padding: 3px 5px;
}

.hljs {
  background: #2d2b57;
  color: #e3dfff;
  font-weight: 400;
}

.hljs-subst {
  color: #e3dfff;
}

.hljs-title {
  color: #fad000;
  font-weight: 400;
}

.hljs-name {
  color: #a1feff;
}

.hljs-tag {
  color: #fff;
}

.hljs-attr {
  color: #f8d000;
  font-style: italic;
}

.hljs-built_in,
.hljs-keyword,
.hljs-section,
.hljs-selector-tag {
  color: #fb9e00;
}

.hljs-addition,
.hljs-attribute,
.hljs-bullet,
.hljs-code,
.hljs-deletion,
.hljs-quote,
.hljs-regexp,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-string,
.hljs-symbol,
.hljs-template-tag {
  color: #4cd213;
}

.hljs-meta,
.hljs-meta .hljs-string {
  color: #fb9e00;
}

.hljs-comment {
  color: #ac65ff;
}

.hljs-keyword,
.hljs-literal,
.hljs-name,
.hljs-selector-tag,
.hljs-strong {
  font-weight: 400;
}

.hljs-literal,
.hljs-number {
  color: #fa658d;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: 700;
}

:root {
  --gutter: 2rem;
  --gutter-page: 4rem;
  --gutter-shop: 2.5rem;
  --gutter-support: 2.5rem;
}

@media all and (max-width: 991px) {
  :root {
    --gutter: 1.5rem;
    --gutter-page: 2rem;
  }
}

:host {
  width: 100%;
}

.provably-fair-page {
  display: flex;
  gap: 2rem;
  max-width: 130rem;
  height: calc(100vh - 12em - var(--gutter));
  margin: 0 auto;
  width: 100%;
}

.provably-fair-page .provably-fair-page__content {
  width: 100%;
  padding: var(--gutter);
  border-radius: 1.4rem;
  background: #26315a;
  overflow-x: hidden;
}

.provably-fair-page .content__scroll {
  height: 100%;
}

@media (hover: hover) {
  .provably-fair-page .content__scroll {
    padding-right: calc(var(--gutter) / 2 - 0.15rem);
    margin-right: calc(var(--gutter) / -2 - 0.15rem);
  }
}

.provably-fair-page pre {
  font-size: 1.4rem;
  line-height: 2rem;
}

.provably-fair-page pre .hljs {
  border-radius: 8px;
  background: #222d53;
  white-space: break-spaces;
}

.provably-fair-page pre .code__scroll {
  scrollbar-color: #27325e #404e83;
  scrollbar-width: 0.6rem;
  transform: translateZ(0);
  will-change: transform;
}

.provably-fair-page pre .code__scroll::-webkit-scrollbar {
  width: 0.6rem;
  height: 0.6rem;
  background-color: #404e83;
}

.provably-fair-page pre .code__scroll::-webkit-scrollbar-thumb {
  background-color: #404e83;
  border-radius: 10px;
}

.provably-fair-page pre .code__scroll::-webkit-scrollbar-track {
  background-color: #27325e;
}

.provably-fair-page .content__code {
  margin-top: 1.7rem;
}

.provably-fair-page .content__title {
  margin-bottom: 1.2rem;
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 4.8rem;
  color: #fff;
}

.provably-fair-page .content__paragraph:not(:first-child) {
  margin-top: 1.7rem;
}

.provably-fair-page .content__subtitle {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.3rem;
  color: #f3f8ff;
}

.provably-fair-page .content__text {
  margin-top: 0.8rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.9rem;
  color: #c6d0e0;
}

.provably-fair-page .content__text + .content__text {
  margin-top: 1.7rem;
}

.provably-fair-page .content__text_description {
  color: #f3f8ff;
}

.provably-fair-page .content__list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.8rem;
}

.provably-fair-page .content__list-item {
  position: relative;
  padding-left: 2.1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #97accc;
  word-break: break-all;
}

.provably-fair-page .content__list-item:before {
  content: "";
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  display: inline-block;
  flex: 0 0 auto;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: #aeffe7;
}

.provably-fair-page .content__link {
  color: #ff9b78;
  transition: color 0.2s ease-out 0s;
}

.provably-fair-page .content__link:hover {
  color: #8f94a9;
}

@media all and (max-width: 991px) {
  .provably-fair-page {
    flex-direction: column;
    height: auto;
    padding: 0 var(--gutter-page) var(--gutter-page);
  }
}
</style>