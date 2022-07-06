<template>
  <div>
    <div class="swiper-container size">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/img/1.jpg" alt="1"></div>
        <div class="swiper-slide"><img src="../../assets/img/2.png" alt="2"></div>
        <div class="swiper-slide"><img src="../../assets/img/3.jpg" alt="3"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div>
      <essay></essay>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import essay from './essay.vue'
export default {
  props: {
    list: {
    }
  },
  components: { Swiper, essay },
  name: 'myswiper',
  data () {
    return {
    }
  },
  mounted () {
    /* eslint-disable */
    new Swiper('.swiper-container', {
      autoplay: 3000,
      loop: true,
      pagination: '.swiper-pagination',
    })
  }
}
</script>

<style lang="scss">
.size {
  width: 90%;
  height: 300px;
  margin-top: 25px
}
</style>
