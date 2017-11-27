<template>
  <div id="login">
    <top></top>
    <form class="form-container">
      <section class="form-field">
        <label>用户名<span></span></label>
        <input v-model="username" placeholder="请输入用户名" @blur="checkUser" autofocus/>
      </section>
      <section class="form-field">
        <label>密码</label>
        <input v-model="password" placeholder="请输入密码" @blur="checkUser"/>
      </section>
      <div class="form-submit" @click="submit">登录</div>
    </form>
  </div>
</template>

<script>
  import top from '../../components/head'
  import {Toast} from 'mint-ui'
  export default {
    components: {top},
    data () {
      return {
        username: null, // 用户名
        password: null // 密码
      }
    },
    methods: {
      submit () {
        let param = {
          name: this.username,
          password: this.password
        }
        this.$http.post('user/login', param).then(res => {
          if (parseInt(res.body.status) === 200) {
            this.$route.push('/')
          }
        })
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
  .form-container {
    .form-field {
      width: 100%;
      line-height: 1.07rem;
      display: flex;
      // justify-content: space-between;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
      label {
        width: 30%;
        text-align: justify;
      }
      input {
        border: none;
        width: 70%;
      }
    }
    .form-submit {
      width: 100%;
      line-height: 1.07rem;
      margin: 0.8rem auto;
      font-size: 20px;
      text-align: center;
      color: #333;
      background-color: @primary;
      border-radius: 2px;
    }
  }
</style>