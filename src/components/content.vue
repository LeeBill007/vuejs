<template>
  <div>
    <div v-for="item in tempList">
      {{item[12]}}
    </div>
    <button v-for="n in totalCount" v-on:click="getPage(n)">{{n}}</button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    beforeCreate() {
      axios.get('https://stats.js.org/10kJS.json')
        .then((response) => {
          this.posts = response.data;
          this.totalCount = this.posts.length / this.pageCount
          for (let i = this.pageIndex; i < this.pageIndex * this.pageCount; i++) {
            this.tempList.push(this.posts[i])
          }
        })
    },
    data() {
      return {
        posts: [],
        tempList: [],
        pageIndex: 1,
        totalCount: 0,
        pageCount: 10
      }
    },
    methods: {
      getPage(n) {
        this.tempList = []
        // for (let i = 0; i < 5; i++) {
        //   this.tempList.push({
        //     id: i,
        //     name: 'SKL' + i
        //   })
        //   console.log(this.tempList.length);
        //    1    2
        // }1-10 11-20
        console.log(n);
        for (let i = (n - 1) * this.pageCount; i < n * this.pageCount; i++) {
          console.log(i);
          this.tempList.push(this.posts[i])
          console.log(this.tempList)
        }
      }
    }
  }
</script>