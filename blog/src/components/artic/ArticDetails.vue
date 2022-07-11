<template>
  <!--文章subtitle组件-->
  <div class="details">
    <span>
      <i class="iconfont icon-calendar"></i>
      发表于
      {{ artic.time | dateFormate }}
    </span>|
    <span>
      <i class="iconfont icon-wenjianjia"></i>
      分类于
      {{ artic.type }}
    </span>|
    <span>
      <i class="iconfont icon-pinglun"></i>
      评论
      {{ artic.comment }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'articdetails',
  props: {
    artic: Object
  }
}
</script>

<style lang="scss" scoped>
.details {
  font-size: 12px;
  color: #999999
}
</style>
