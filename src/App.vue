<template>
  <div id="app">
    <myheader></myheader>
    <content1></content1>
    <content2></content2>
    <content3></content3>
    <content4></content4>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import myfooter from './components/myfooter'
  import myheader from './components/myheader'
  import content1 from './components/content1'
  import content2 from './components/content2'
  import content3 from './components/content3'
  import content4 from './components/content4'
  
  export default {
    name: 'app',
    components: {
      myfooter,
      myheader,
      content1,
      content2,
      content3,
      content4
    }
  }
</script>