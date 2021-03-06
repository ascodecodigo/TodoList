import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

// export var bus = new Vue({
//   methods: {
//     actualizarContador(numTareas) {
//       this.$emit('actualizarContador', numTareas)
//     }
//   }
// })

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
