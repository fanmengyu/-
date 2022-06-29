import Vue from 'vue'
import App from './App.vue'
import FmyButton from './components/button.vue'
import FmyDialog from './components/dialog';
import FmyInput from './components/input'
import FmySwitch from './components/swithch';
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.component(FmyButton.name,FmyButton)
Vue.component(FmyDialog.name,FmyDialog)
Vue.component(FmyInput.name,FmyInput)
Vue.component(FmySwitch.name,FmySwitch)
new Vue({
  render: h => h(App)
}).$mount('#app')
