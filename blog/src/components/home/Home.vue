<template>
  <div>
    <header>
      <nav class="navbar navbar-dark bg-dark center">
        <ul class="list-group list-group-horizontal">
          <li v-for="(item, key) in title" :key="key" class="list-group-item" @click="navPush(item.path)">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: [
        {
          name: '首页',
          path: '/main'
        },
        {
          name: '笔记',
          path: './'
        },
        {
          name: '随想',
          path: './'
        }
      ]
    }
  },
  methods: {
    navPush (path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../style/mixin';

.center {
  @include center;

  span {
    cursor: pointer;
  }
}
</style>
