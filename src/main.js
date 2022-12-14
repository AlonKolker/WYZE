import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex';
import {store} from './store/index'
import './assets/style/style.css'

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
