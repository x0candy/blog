<template>
  <div class="artic">
    <div class="list">
      <artic-card v-for="(item, index) in artic" :artic="artic[index]" :key="index"></artic-card>
    </div>
    <div class="time_axis">
      <div class="card shadow-lg p-3 mb-5 bg-body rounded">
        <timer-shaft></timer-shaft>
      </div>
    </div>
  </div>
</template>

<script>
import articCard from './artic_card'
import TimerShaft from './TimerShaft'
export default {
  name: 'artic',
  components: { articCard, TimerShaft },
  data () {
    return {
      artic: [
        {
          time: 1657328425,
          title: 'asdasdad',
          type: '前端',
          comment: 2,
          description: '建了一个知识星球：天问之路如果想学习二进制安全，或者和我交流，欢迎来这里找我w 2018-1-281.看玄武实验室的每日安全推送（主要是看了android挖矿，p2p蠕虫）2.配置shadow尝试用gdb和gdbserver来调试https://github.com/CENSUS/shadowhtt .'
        },
        {
          time: 2222222222,
          title: 'asd',
          type: '前端',
          comment: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.artic {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .list {
    height: 200px;
    width: 70%;
    margin-top: 20px;
  }

  .time_axis {
    height: 200px;
    width: 20%;
    margin-top: 20px;
  }
}
</style>
