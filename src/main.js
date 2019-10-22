import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios'
// 引入element-ui
import ElementUI from 'element-ui';
// 引入样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 安装UI
Vue.use(ElementUI);
// 安装axios
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
