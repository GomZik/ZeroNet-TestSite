import 'babel-polyfill'
import Vue from 'vue'

import App from 'App.vue'

Vue.config.debug = true

// Init vue app
let vueApp = new Vue({
  el: 'body',
  components: {
    App
  }
})
