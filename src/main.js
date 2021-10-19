import Vue from 'vue';
import {sync} from "vuex-router-sync";
import App from './App.vue';
import vuetify from './plugins/vuetify';
import "./plugins/api";
import "./plugins/lodash";
import "./plugins/moment";

import "./components";
import router from './router';
import store from './store';

sync(store, router);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.getters["auth/loggedIn"]) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
