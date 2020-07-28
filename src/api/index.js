import axios from 'axios';
import NProgress from 'nprogress';
import ROUTER_NAMES from '@/constants/routes';
import { SET_INFO, SET_TOKEN } from '@/store/user';
import store from '@/store';
import router from '@/router';

export default function setup() {
  axios.defaults.baseURL = 'https://api.veselahviezdicka.sk';
  axios.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {
      NProgress.done();
      // handle error
      store.commit('setError', {
        error: 'error',
      });

      if (error.response && (error.response.status === 401 || error.response.status === 403) && error.request.responseURL.indexOf('api/auth/login') === -1) {
        store.commit(SET_TOKEN, null);
        store.commit(SET_INFO, {});
        router.push({
          name: ROUTER_NAMES.LOGIN,
          query: { error: 'expired' },
        });

        return Promise.resolve({});
      }

      if (error.response) {
        store.commit('setError', {
          error: 'error',
          message: error.response.data.message,
        });
      }

      return Promise.reject(error);
    },
  );
  // before a request is made start the nprogress
  axios.interceptors.request.use((config) => {
    NProgress.start();
    return config;
  });

  let token = store.state.user.token ? store.state.user.token : null;

  if (window.localStorage && window.localStorage.getItem) {
    token = token || localStorage.getItem('token');
  }

  if (token !== 'null' && token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    store.dispatch('userInfo');
  }
}
