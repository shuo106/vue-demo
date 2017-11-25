<template>
  <div class="login-container">
    <head-top></head-top>
    <from class="login-form">
      <section class="form-field">
        <label>用户名</label>
        <input v-model="username" placeholder="请输入用户名" @blur="checkUser"/>
      </section>
      <section class="form-field">
        <label>密码</label>
        <input v-model="password" placeholder="请输入密码" @blur="checkUser"/>
      </section>
      <div class="form-submit">
        <div class="btn" @click="submit">登录</div>
      </div>
    </from>
  </div>
</template>

<script>
  import headTop from '../../components/head'
  import {Toast} from 'mint-ui'
  export default {
    name: 'login',
    components: {headTop},
    data () {
      return {
        username: null, // 用户名
        password: null // 密码
      }
    },
    methods: {
      submit () {
        console.log(this.username + '/' + this.password)
      },
      checkUser () {
        let param = {
          name: this.username
        }
        this.$http.post('user/check-user', param).then(res => {
          Toast({
            message: res.message,
            position: 'middle',
            duration: 3000
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../assets/css/common.less');
  .login-form {
    width: 90%;
    .form-field {
      line-height: 1.07rem;
      display: flex;
      // justify-content: space-between;
      font-size: 16px;
      // border-bottom: 1px solid #ddd;
      label {
        margin-left: 0.53rem;
        width: 30%;
      }
      input {
        border: none;
        width: 60%;
      }
    }
    .form-submit {
      display: flex;
      justify-content: center;
      .btn {
        width: 90%;
        background-color: @primary;
        display: flex;
        justify-content: center;
        line-height: 1.07rem;
        font-size: 20px;
        color: #333;
        letter-spacing: 4px;
        border-radius: 2px;
      }
      
    }
  }
</style>