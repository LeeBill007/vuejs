<template>
  <div>
    <!-- Content -->
    <div class="col-md-3 content">
      <ul>
        <li v-for="item in getdatalist">{{item.first_name}}</li>
      </ul>
      <button class="btn btn-danger" @click="dataList">List</button>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'getdatalist'
      ])
    },
    methods: {
      ...mapActions([
        'dataList'
      ])
    }
  }
</script>

<style scoped>
  .content {
    margin: 150px 0px;
    height: 300px;
    border: 1px solid #000;
  }

  ul>li {
    display: inline;
  }
</style>