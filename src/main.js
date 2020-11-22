import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Home from "./components/Home";
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/browse', component: Browse }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')