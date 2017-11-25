<template>
  <div id="head_top">
    <div class="fixed_head">
      <div class="head_goback" v-if="goback" @click="$router.go(-1)">
        <img src="../assets/img/icon/back.png">
      </div>
      <div class="btn">
        <router-link to='/login'>
          <span class="login_span">注册|</span>
        </router-link>
        <router-link to='/login'>
          <span class="login_span">登陆</span>
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
  #head_top {
    width: 100%;
    height: 1.07rem;
    // padding-right: 0.13rem;
    .fixed_head {
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
        .login_span {
          font-size: 16px;
          letter-spacing: 2px;
        }
      }
    }
    .divider {
      width: 100px;
      // height: 1.07rem;
    }
  }
</style>