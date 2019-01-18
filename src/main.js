// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue-awesome
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/index.js';
// import Vant from 'vant';
// import 'vant/lib/index.css';
Vue.config.productionTip = false

// Vue.use(Vant);
Vue.use(ElementUI);
// 全局注册
Vue.component('icon', Icon);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

