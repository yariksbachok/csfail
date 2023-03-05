<template>
  <div class="container">
    <router-outlet></router-outlet>
    <support-page-layout _nghost-serverapp-c148="">
      <div _ngcontent-serverapp-c148="" class="support-page">
        <SupportAside />
        <div
          _ngcontent-serverapp-c148=""
          class="support-page__content support-content"
        >
          <router-outlet _ngcontent-serverapp-c148=""></router-outlet
          ><support-home
            ><support-empty-block
              _ngcontent-serverapp-c143=""
              blocktitle="Choose a topic"
              _nghost-serverapp-c142=""
            >
              <div
                _ngcontent-serverapp-c142=""
                class="empty-block empty-block_support"
              >
                <img src="../../../public/images/icon/squares.png" class="icon_big" />
                <div _ngcontent-serverapp-c142="" class="empty-block__text">
                  Choose a topic
                </div>
                
              </div>
            </support-empty-block></support-home
          >
        </div>
      </div>
    </support-page-layout>
  </div>
  <Footer/>
</template>

<script>
import SupportAside from "../../components/SupportAside";
import Footer from "../../components/Footer";
export default {
  components: {
    SupportAside, Footer
  },
};
</script>

<style scoped>
[_nghost-serverApp-c143] {
    height: 100%;
}
.empty-block{
    border: none;
}
.empty-block .empty-block__action {
    color: #808fbe;
    background-color: #2d345c;
    border-color: #2d345c;
    margin-bottom: 1rem;
}
.empty-block__or{
    margin-bottom: 2rem;
}
</style>