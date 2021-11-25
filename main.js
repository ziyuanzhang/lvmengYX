import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$baseUrl = "https://wx.zzbek.com/pg/";

const app = new Vue({
    ...App
})
app.$mount()
