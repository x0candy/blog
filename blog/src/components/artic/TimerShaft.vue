<template>
  <div class="line">
    <span class="title">时间轴</span>
    <div class="line-item" v-for="(item, index) in dataList" :key="index">
      <span>{{ item.year }}</span>
      <div class="sencend-item" v-for="(i, id) in artic" :key="id" @click="goComment">
        <a :id="id">{{ i.title }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'timerShaft',
  props: {
    artic: Array
  },
  data () {
    return {
      dataList: [
        {
          year: 2022
        },
        {
          year: 2021
        }
      ]
    }
  },
  methods: {
    // 做一个事件委托，实现a标签的锚点功能
    goComment (e) {
      let position = e.target.getAttribute('id')
      document.getElementById(position).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/timerShaft';
</style>
