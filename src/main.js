import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMask from 'v-mask'
import store from './store/index'

Vue.use(VueMask);
Vue.config.productionTip = false

import '@/assets/css/styles.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
