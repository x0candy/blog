<template>
  <div class="container shadow-lg p-3 mb-5 bg-body rounded">
    <div class="shadow p-3 mb-5 bg-body rounded card" style="width: 18rem;" v-for="(item, index) in artic" :key="index">
      <img src="../../assets/img/1.jpg" class="card-img-right" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ artic[index].title }}</h5>
        <p class="card-text">{{ artic[index].description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      artic: [
        {
          title: 'Card title',
          description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          title: 'Card title',
          description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          title: 'Card title',
          description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          title: 'Card title',
          description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin-top: 25px;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
