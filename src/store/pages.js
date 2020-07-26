import pages from '@/api/pages';

export const SET_PAGES = 'SET_PAGES';
export const SET_PAGE = 'SET_PAGE';
export const CLEAR_PAGE = 'CLEAR_PAGE';

const state = {
  pages: null,
  page_details: {},
};

const getters = {
  pages: (s) => s.pages,
  details: (s) => s.page_details,
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
  getPage({ commit }, args) {
    return pages.detail(args.type, args.slug)
      .then((response) => {
        commit(SET_PAGE, {
          type: args.type,
          slug: args.slug,
          data: response.data,
        });
      });
  },
};

const mutations = {
  [SET_PAGES](s, p) {
    Object.assign(s, {
      pages: {
        [p.slug]: p.data,
      },
    });
  },
  [SET_PAGE](s, p) {
    Object.assign(s, {
      page_details: {
        [p.type]: {
          [p.slug]: p.data,
        },
      },
    });
  },
  [CLEAR_PAGE](s, p) {
    delete s.page_details[p.type][p.slug];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
