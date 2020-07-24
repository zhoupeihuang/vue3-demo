<template>
  <div id="app">
    <div class="headBox">
      <img src="./assets/logo.jpg" alt="">
    </div>
    <div class="leftNavBox">
      <Nav></Nav>
    </div>
    <div class="MainBox">
      <div class="router-view">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
  import Nav from './components/nav.vue'
  export default {
    name: "app",
    components: {
      Nav
    }
  }
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 900px;
    height: 500px;
    position: relative;
    margin: 0 auto;
  }

  .router-view {
    border: 1px #ddd solid;
    width: 800px;
  }
  .headBox{
    width: 100%;
    height: 200px;
    position: relative;
    margin: 0 auto ;
    background-color: cornsilk;
  }
  .leftNavBox{
    float: left;
    height: 100%;
    width: 100px;
    background-color: aquamarine;

  }
  .MainBox{
    float: left;
    height: 100%;
    width: 800px;
    background-color: #ccc;
  }
</style>