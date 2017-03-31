<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/HelloWorld"></router-link>
    <router-link to="/MyVuex"></router-link>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
  }
</script>

