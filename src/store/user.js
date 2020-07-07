const state = {
  info: {},
  token: '',
};

const getters = {
  user(s) {
    return s.info;
  },
  token(s) {
    return s.token;
  },
};

const actions = {
  // login({ commit }, args) {
  //
  // },
  // userInfo({ commit }, args) {
  //
  // },
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
  setToken(s, data) {
    s.token = data.accessToken;
  },
  setInfo(s, userInfo) {
    s.info = userInfo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
