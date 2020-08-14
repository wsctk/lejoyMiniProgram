import Vue from 'vue'
import App from './App'
import iconfont from './static/iconfont/iconfont.css'
import {myRequest} from './util/api.js'

Vue.prototype.$ask = myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
