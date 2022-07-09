<template>
  <div class="card shadow-lg p-3 mb-5 bg-body rounded">
    <div class="title">{{ artic.title }}</div>
    <artic-details :artic="artic"></artic-details>
    <div class="description">
      {{ artic.description }}
    </div>
  </div>
</template>

<script>
import ArticDetails from './ArticDetails.vue'
export default {
  name: 'artic_card',
  props: {
    artic: Object
  },
  components: { ArticDetails },
  data () {
    return {

    }
  }
}</script>

<style lang="scss" scoped>
@import '../../style/mixin';

.card {
  @include center;

  .title {
    font-size: 35px;
    width: 80%;

  }

  .description {
    margin-top: 20px;
    font-size: 14px;
    text-align: left;
    word-break: break-all;
    padding: 0px 40px;
  }
}
</style>
