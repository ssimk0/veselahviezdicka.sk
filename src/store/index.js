import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user from './user';
import pages from './pages';
import uploads from './uploads';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: {},
  },
  mutations: {
    setError(s, error) {
      s.error = error;
    },
  },
  actions: {},
  modules: {
    pages,
    user,
    uploads,
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createPersistedState(
      {
        storage: window.sessionStorage ? window.sessionStorage : window.localStorage,
      },
    ),
  ],
});
