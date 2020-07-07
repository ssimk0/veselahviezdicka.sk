import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import apiSetup from './api';
import localStorageBackwardCompatibilityInit from './utils/localStorage';
import './style/main.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

localStorageBackwardCompatibilityInit();
apiSetup();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
