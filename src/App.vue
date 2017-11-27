<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import url('./assets/css/init.less');
  #app{
    // margin: 0 10px 0 10px;
  }
</style>
