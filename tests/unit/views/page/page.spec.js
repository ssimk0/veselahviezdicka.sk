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

function getStore(changedState = {}) {
  const state = {
    details: {
      menu: {
        test: {
          title: 'menu test',
          body: 'body',
        },
      },
    },
    ...changedState,
  };
  return new Vuex.Store({
    state,
    getters: {
      details(s) {
        return s.details;
      },
      user(s) {
        return s.user;
      },
    },
  });
}

function getMountedComponent(store, propsData) {
  return shallowMount(Page, {
    propsData,
    store,
    localVue,
    stubs: ['router-link'],
    mocks: {
      $route,
      $t: () => {},
    },
  });
}

describe('Page.vue', () => {
  it('test if it render correctly to end user', () => {
    const store = getStore();

    const wrapper = getMountedComponent(store);
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

  it('test if it render correctly when page changed to end user', () => {
    const store = getStore({
      details: {
        menu: {
          test: {
            title: 'menu test new',
            body: 'something',
          },
        },
      },
    });

    const wrapper = getMountedComponent(store);
    expect(wrapper.find('.title')
      .text())
      .toMatch('menu test new');

    expect(wrapper.find('.body')
      .text())
      .toMatch('something');

    expect(wrapper.find('.admin-button')
      .exists())
      .toBeFalsy();
  });

  it('test if it render correctly to user with admin rights', () => {
    const store = getStore({
      user: {
        is_admin: true,
      },
    });

    const wrapper = getMountedComponent(store);
    expect(wrapper.find('.title')
      .text())
      .toMatch('menu test');

    expect(wrapper.find('.body')
      .text())
      .toMatch('body');

    expect(wrapper.find('.admin-button')
      .exists())
      .toBeTruthy();

    expect(wrapper.find('.fas.fa-pencil-alt')
      .exists())
      .toBeTruthy();
  });
});
