import uploads from '@/api/uploads';

export const SET_UPLOADS_CATEGORY = 'SET_UPLOADS_CATEGORY';

const state = {
  categories: null,
};

const getters = {
  uploadCategories: (s) => s.categories,
};

const actions = {
  getUploadsCategories({ commit }, type) {
    return uploads.list(type)
      .then((response) => {
        commit(SET_UPLOADS_CATEGORY, {
          type,
          data: response.data,
        });
      });
  },
};

const mutations = {
  [SET_UPLOADS_CATEGORY](s, p) {
    Object.assign(s, {
      categories: {
        [p.type]: p.data,
      },
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
