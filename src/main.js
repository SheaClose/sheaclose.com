import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Home from './Routes/Home'
import Resume from './Routes/Resume'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/nova-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/resume', component: Resume }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
