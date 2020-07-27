import uploads from '@/api/uploads';

export const SET_UPLOADS_CATEGORY = 'SET_UPLOADS_CATEGORY';
export const SET_UPLOADS = 'SET_UPLOADS';

const state = {
  categories: null,
  uploads: null,
};

const getters = {
  uploadCategories: (s) => s.categories,
  uploads: (s) => s.uploads,
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
  getUploadsByCategory({ commit }, args) {
    return uploads.listUploads(args).then((response) => {
      commit(SET_UPLOADS, {
        category: args.category,
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
  [SET_UPLOADS](s, p) {
    Object.assign(s, {
      uploads: {
        [p.category]: p.data,
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
