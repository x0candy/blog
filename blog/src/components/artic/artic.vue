<template>
  <div class="artic">
    <div class="list">
      <artic-card v-for="(item, index) in artic" :artic="artic[index]" :key="index"></artic-card>
    </div>
    <div class="time_axis">
      <div class="card shadow-lg p-3 mb-5 bg-body rounded"></div>
    </div>
  </div>
</template>

<script>
import articCard from './artic_card.vue'
export default {
  name: 'artic',
  components: { articCard },
  data () {
    return {
      artic: [
        {
          time: 2222222222,
          title: 'asd',
          type: '前端'
        },
        {
          time: 2222222222,
          title: 'asd',
          type: '前端'
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
