import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { ValidationProvider } from 'vee-validate';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import apiSetup from './api';
import localStorageBackwardCompatibilityInit from './utils/localStorage';
import './style/main.scss';
import defineValidation from './utils/validations';
import sk from './assets/lang/sk';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueI18n);

localStorageBackwardCompatibilityInit();
apiSetup();

const i18n = new VueI18n({
  locale: 'sk',
  messages: {
    sk,
  },
});

defineValidation(i18n);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
