import Vue from 'vue'
import App from './App.vue'
import FmyButton from './components/button.vue'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.component(FmyButton.name,FmyButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
