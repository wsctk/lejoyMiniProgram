import Vue from 'vue'
import App from './App'
import iconfont from './static/iconfont/iconfont.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
