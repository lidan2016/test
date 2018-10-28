// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from "axios"
import qs from "qs"
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store"

Vue.use(ElementUI)
Vue.prototype.HOST = '/api'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://localhost:5000'//'http://www.wwtliu.com';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-unlencoded';
Axios.interceptors.request.use(function(config){
	if(config.method == "post") {
		config.data = qs.stringify(config.data);
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});

Axios.interceptors.response.use(function(response){
	return response;
}, function(error) {
    return Promise.reject(error);
});

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
