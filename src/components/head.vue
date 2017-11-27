<template>
  <div id="top">
    <div class="fixed-head">
      <div class="head-goback" v-if="goback" @click="$router.go(-1)">
        <img src="../assets/img/icon/back.png">
      </div>
      <div class="btn">
        <router-link to='/register'>
          <span class="login-span">注册|</span>
        </router-link>
        <router-link to='/login'>
          <span class="login-span">登陆</span>
        </router-link>
      </div>
    </div>
    <div class="divider"></div>  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userInfo: true,
        goback: 1
      }
    },
    mounted () {
      // this.getUserInfo()
    }
  }
</script>

<style lang="less" scoped>
  @import url("../assets/css/common.less");
  #top {
    width: 100%;
    // padding-right: 0.13rem;
    height: 0.93rem;
    .fixed-head {
      height: 0.93rem;
      background-color: @blue;
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      // height: 100%;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
      .btn {
        padding-right: 0.21rem;
        .login-span {
          font-size: 16px;
          letter-spacing: 2px;
        }
      }
    }
    .divider {
      // width: 100px;
    }
  }
</style>