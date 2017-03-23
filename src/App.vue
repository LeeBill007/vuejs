<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <my-component></my-component>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

