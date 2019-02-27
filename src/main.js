import Vue from 'vue'
import App from './App.vue'
import router from './index/router'
import store from './store'
import ES6Promise from 'es6-promise'

Vue.use(router)
ES6Promise.polyfill()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
