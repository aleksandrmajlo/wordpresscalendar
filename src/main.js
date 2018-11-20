import Vue from 'vue'
import App from './App.vue'

import FullCalendar from 'vue-full-calendar'
import "fullcalendar/dist/fullcalendar.min.css";
Vue.use(FullCalendar)


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


import store from './store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
