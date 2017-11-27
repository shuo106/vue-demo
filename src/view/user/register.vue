<template>
  <div id="register">
    <top></top>
    <form class="form-container">
      <section class="form-field">
        <label>用户名</label>
        <input v-model="form.username" placeholder="请输入用户名" autofocus/>
      </section>
      <section class="form-field">
        <label>密码</label>
        <input v-model="form.password" placeholder="请输入密码"/>
      </section>
      <section class="form-field">
        <label>邮箱</label>
        <input v-model="form.email" placeholder="请输入邮箱"/>
      </section>
      <div class="form-submit" @click="submit">注册</div>
    </form>
  </div>
</template>

<script>
  import top from '../../components/head'
  export default {
    components: {top},
    data () {
      return {
        form: {
          username: null,
          password: null,
          email: null
        }
      }
    },
    methods: {
      submit () {
        // 提交数据
      },
      ajaxSub () {
        let param = {
          name: this.form.username,
          password: this.form.password,
          email: this.form.email
        }
        this.$http.post('/user/signin', param).then(res => {
          console.log(res)
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
      font-size: 16px;
      border-bottom: 1px solid #ddd;
      label {
        width: 30%;
      }
      input {
        width: 60%;
        border: none;
      }
    }
    .form-submit {
      margin: 0.8rem auto;
      width: 100%;
      text-align: center;
      line-height: 1.07rem;
      font-size: 20px;
      border-radius: 3px;
      background-color: @primary;
    }
    
  }
</style>