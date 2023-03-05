<template>
  <div class="container">
    <router-outlet></router-outlet
    ><referrals-home _nghost-serverapp-c198="">
      <div _ngcontent-serverapp-c198="" class="page-not-logged">
        <img src="../../public/images/icon/blocked.png" class="icon_big" />
        <div _ngcontent-serverapp-c198="" class="page-not-logged__title">
          Authorization required
        </div>
        <div _ngcontent-serverapp-c198="" class="page-not-logged__text">
          The page is available only to authorized users!
        </div>
      </div>
    </referrals-home>
  </div>
  <Footer />
</template>

<script scoped>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
[_nghost-serverApp-c198] {
  display: block;
  width: 100%;
}

[_nghost-serverApp-c161] {
  width: 100%;
}

[_nghost-serverApp-c160] {
  width: 100%;
}
</style>