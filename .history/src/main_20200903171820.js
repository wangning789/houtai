import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import api from'../src/http/api'
import Assembly from"./components/assembly/Assembly"
import Popup from'./components/Popup/Popup.vue'

Vue.component('assembly', Assembly)
Vue.component('popup', Popup)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
