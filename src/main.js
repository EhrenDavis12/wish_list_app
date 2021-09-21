import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "./plugins/api";
import "./plugins/lodash";
import "./plugins/moment";

import "./components"
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
