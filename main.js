import Vue from 'vue'
import App from './App'
import iconfont from './static/iconfont/iconfont.css'
import {myRequest} from './util/api.js'
// import {myUpload} from './util/uploadimg.js'

Vue.prototype.$ask = myRequest
// Vue.prototype.$sendimg = myUpload

Vue.config.productionTip = false

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const sec = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}年${m}月${d}日${hh}:${mm}:${sec}`
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
