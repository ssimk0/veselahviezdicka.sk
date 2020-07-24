import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Page from '@/views/page/Page.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const $route = {
  path: '/some/path',
  params: {
    type: 'menu',
    slug: 'test',
  },
};

const store = new Vuex.Store({
  state: {
    details: {
      menu: {
        test: {
          title: 'menu test',
          body: 'body',
        },
      },
    },
  },
  getters: {
    details(s) {
      return s.details;
    },
    user(s) {
      return s.user;
    },
  },
});

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Page, {
    store,
    localVue,
    mocks: {
      $route,
    },
  });
});

describe('Page.vue', () => {
  it('test if it render correctly to end user', () => {
    expect(wrapper.find('.title')
      .text())
      .toMatch('menu test');

    expect(wrapper.find('.body')
      .text())
      .toMatch('body');

    expect(wrapper.find('.admin-button')
      .exists())
      .toBeFalsy();
  });
});
