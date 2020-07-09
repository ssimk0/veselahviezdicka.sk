import pages from '@/api/pages';

const SET_PAGES = 'SET_PAGES';

const state = {
  pages: {},
};

const getters = {
  pages: (s) => s.pages,
};

const actions = {
  getPagesByCategorySlug({ commit }, slug) {
    return pages.list(slug)
      .then((response) => {
        commit(SET_PAGES, {
          slug,
          data: response.data,
        });
      });
  },
};

const mutations = {
  [SET_PAGES](s, p) {
    return Object.assign(s, {
      pages: {
        [p.slug]: p.data,
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
