<template>
  <div class="card shadow-lg p-3 mb-5 bg-body rounded">
    <div class="title">{{ artic.title }}</div>
    <div class="details">
      {{ artic.type }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'artic_card',
  props: {
    artic: Object
  },
  data () {
    return {

    }
  }
}</script>

<style lang="scss" scoped>
.title {
  font-size: 35px;
}

.details {
  font-size: 12px;
}
</style>
