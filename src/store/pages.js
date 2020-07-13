import pages from '@/api/pages';

const SET_PAGES = 'SET_PAGES';
const SET_PAGE = 'SET_PAGE';

const state = {
  pages: {},
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
    return pages.detail(args.type, args.slug).then((response) => {
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
    return Object.assign(s, {
      pages: {
        [p.slug]: p.data,
      },
    });
  },
  [SET_PAGE](s, p) {
    console.log(s, p);
    return Object.assign(s, {
      page_details: {
        [p.type]: {
          [p.slug]: p.data,
        },
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
