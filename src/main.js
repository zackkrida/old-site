import Vue from 'vue'
import App from './App.vue'
import router from './router'

import parallaxDirective from './plugins/parallax'
import tiltDirective from './plugins/tilt'

import './registerServiceWorker'

Vue.directive('parallax', parallaxDirective)
Vue.directive('tilt', tiltDirective)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')