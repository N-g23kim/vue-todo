import Vue from 'vue';
import router from './router'
import App from './App.vue';

// reset css
import './assets/css/reset.scss';

new Vue({
  el: '#app',
  router,

  render: h => h(App)
});