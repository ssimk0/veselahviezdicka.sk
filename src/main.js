import Vue from 'vue';
import Toasted from 'vue-toasted';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
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
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueI18n);
Vue.use(Toasted, {
  duration: 5000,
  iconPack: 'fontawesome',
});

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
