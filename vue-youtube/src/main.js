import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '../src/filters/date.filter'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyBQrc2lTu9ztgpZCOaHd-u3oezwjg0C9FA',
  authDomain: 'vue-crm--firebase.firebaseapp.com',
  projectId: 'vue-crm--firebase',
  storageBucket: 'vue-crm--firebase.appspot.com',
  messagingSenderId: '691389792832',
  appId: '1:691389792832:web:7de1ef945421e7bd4455a5',
  measurementId: 'G-VZHKXL6BED'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
