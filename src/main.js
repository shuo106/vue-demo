// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Mint from 'mint-ui'  // 饿了么移动端UI
import 'mint-ui/lib/style.css'
import 'lib-flexible'  // 手淘H5
import Resource from 'vue-resource'  // ajax请求

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(Resource)

Vue.http.interceptors.push(function (req, next) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('拦截req:', req)
  }
  // 拦截res
  next(function (res) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('拦截res', res)
      // this.$message.error(res);
    }
  })
})

Vue.http.options.root = 'http://localhost:9008/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
