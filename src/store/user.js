import user from '@/api/user';

const state = {
  info: {},
  token: '',
};

export const SET_TOKEN = 'SET_TOKEN';
export const SET_INFO = 'SET_INFO';

const getters = {
  user(s) {
    return s.info;
  },
  token(s) {
    return s.token;
  },
};

const actions = {
  login({ commit }, args) {
    return user.login(args).then((response) => {
      commit(SET_TOKEN, response.data.token);
      return response.data.token;
    });
  },
  userInfo({ commit }) {
    return user.userInfo().then((response) => {
      commit(SET_INFO, response.data);
    });
  },
  // forgotPassword({ commit }, args) {
  //
  // },
  // resetPassword({ commit }, args) {
  //
  // },
  // changePassword({ commit }, args) {
  // },
  // editUserProfile({ commit }, args) {
  // },
};

const mutations = {
  [SET_TOKEN](s, token) {
    s.token = token;
    localStorage.setItem('token', token);
  },
  [SET_INFO](s, userInfo) {
    s.info = userInfo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
