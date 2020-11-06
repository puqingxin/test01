// import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// createApp(App).use(router).mount('#app')
// Vue.use(Router)
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

