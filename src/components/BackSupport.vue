<template>
  <div
    _ngcontent-serverapp-c154=""
    class="support-header support-header_borderless"
  >
    <div _ngcontent-serverapp-c154="" class="support-header__content">
      <div _ngcontent-serverapp-c154="" class="support-header__title" v-if="name!=null">
        {{ name }}
      </div>
      <div _ngcontent-serverapp-c154="" class="support-header__title" v-else>
        Choose a topic
      </div>
    </div>
    <a
      _ngcontent-serverapp-c154=""
      class="support-header__action button button_sm button_brand"
      @click="$router.push('/support')"
    >
      <img
        src="../../public/images/icon/right-arrow.png"
        class="icon"
        style="transform: rotate(180deg)"
        
      />
      <span _ngcontent-serverapp-c154="" class="button__text">Back</span></a
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    }
  }
};
</script>

<style>
</style>