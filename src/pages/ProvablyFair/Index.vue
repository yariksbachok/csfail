<template>
  <div class="container">
    <router-outlet></router-outlet
    ><provably-fair-layout class="provably-fair-page ng-star-inserted">
      <ProvablyFair v-bind:overview="true"/>
      <div class="provably-fair-page__content content">
        <div scroll="vertical" class="content__scroll scroll scroll_vertical">
          <router-outlet></router-outlet
          ><provably-fair-overview
            _nghost-serverapp-c202=""
            class="ng-star-inserted"
          >
            <div _ngcontent-serverapp-c202="" class="content__paragraph">
              <h2 _ngcontent-serverapp-c202="" class="content__subtitle">
                Solving the problem of honesty
              </h2>
              <p _ngcontent-serverapp-c202="" class="content__text">
                The basic concept of provable fairness is that players have the
                opportunity to prove and verify that their scores are fair and
                not rigged. This is achieved through the use of a commitment
                scheme, along with cryptographic hashing.
              </p>
              <p _ngcontent-serverapp-c202="" class="content__text">
                The obligation scheme is used to ensure that the player can
                influence all the generated outcomes of the game. Cryptographic
                hashing is used to ensure that the site also remains honest
                about this commitment scheme. Combining both concepts creates a
                secure environment for online gambling.
              </p>
              <p _ngcontent-serverapp-c202="" class="content__text">
                Simplified representation of this concept:
              </p>
            </div>
            <pre
              _ngcontent-serverapp-c202=""
            >  <code _ngcontent-serverapp-c202="" highlight="fair play result = website data (hashed) + customer data (you)" class="hljs">fair play result = website data (hashed) + customer data (you)</code>
</pre>
            <div _ngcontent-serverapp-c202="" class="content__paragraph">
              <h2 _ngcontent-serverapp-c202="" class="content__subtitle">
                Verification through third party service
              </h2>
              <p _ngcontent-serverapp-c202="" class="content__text">
                All bets placed on our site can be verified both here and on
                third party websites that have also opened the verification
                process. You can find them with a Google search.
              </p>
            </div>
          </provably-fair-overview>
        </div>
      </div>
    </provably-fair-layout>
  </div>
  <Footer />
</template>

<script>
import Footer from "../../components/Footer";
import ProvablyFair from "../../components/ProvablyFair";

export default {
  components: {
    Footer,
    ProvablyFair,
  },
};
</script>

<style>

</style>