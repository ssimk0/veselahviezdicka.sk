import Vuex from 'vuex';
import VueBoostrap from 'bootstrap-vue';
import { createLocalVue, mount } from '@vue/test-utils';
import Index from '@/views/gallery/Index.vue';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios', () => ({
  get: () => Promise.resolve(),
}));

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueBoostrap);

function getStore(changedState = {}) {
  const state = {
    categories: {
      gallery: [
        {
          thumbnail: 'test',
          id: 1,
          slug: 'test',
          name: 'karneval',
        },
        {
          thumbnail: 'thum',
          id: 2,
          slug: 'image',
          name: 'skolka',
        },
      ],
    },
    ...changedState,
  };
  return new Vuex.Store({
    state,
    getters: {
      uploadCategories(s) {
        return s.categories;
      },
      user() {
        return null;
      },
    },
  });
}

function getMountedComponent(store, propsData) {
  return mount(Index, {
    propsData,
    store,
    localVue,
    stubs: ['router-link'],
    mocks: {
      $t: () => {
      },
    },
  });
}

describe('gallery/Index.vue', () => {
  it('test if it render correctly to end user', () => {
    const store = getStore();

    const wrapper = getMountedComponent(store);
    const cards = wrapper.findAll('.card');

    expect(cards.length)
      .toBe(2);

    expect(wrapper.find('.gallery-card:nth-child(1)')
      .find('.card-text')
      .text())
      .toBe('karneval');

    expect(wrapper.find('.gallery-card:nth-child(1)')
      .find('img')
      .attributes().src)
      .toBe('test');

    expect(wrapper.find('.gallery-card:nth-child(2)')
      .find('.card-text')
      .text())
      .toBe('skolka');

    expect(wrapper.find('.gallery-card:nth-child(2)')
      .find('img')
      .attributes().src)
      .toBe('thum');
  });
});
