import Vue from 'vue'
import App from './App'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/nova-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
