import Vuex from 'vuex';
import VueBoostrap from 'bootstrap-vue';
import { createLocalVue, mount } from '@vue/test-utils';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import Create from '@/views/gallery/Create.vue';
import axios from 'axios';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios');

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueBoostrap);
localVue.component('ValidationObserver', ValidationObserver);
localVue.component('ValidationProvider', ValidationProvider);

function getStore(changedState = {}) {
  const state = {
    categories: {},
    ...changedState,
  };
  return new Vuex.Store({
    state,
    getters: {
      uploadCategories(s) {
        return s.categories;
      },
    },
  });
}

function getMountedComponent(store, propsData) {
  return mount(Create, {
    propsData,
    store,
    localVue,
    mocks: {
      $t: (t) => t,
    },
  });
}

describe('gallery/Create.vue', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Form render correctly', () => {
    const store = getStore();

    const wrapper = getMountedComponent(store);

    expect(wrapper.find('form')
      .exists())
      .toBeTruthy();

    expect(wrapper.find('input[name=name]')
      .exists())
      .toBeTruthy();

    expect(wrapper.find('button[type=submit]')
      .exists())
      .toBeTruthy();
  });

  it('Form show error when validation should not pass', () => {
    const store = getStore();

    const wrapper = getMountedComponent(store);

    const input = wrapper.find('input[name=name]');

    input.setValue('t1')
      .then(() => {
        expect(wrapper.find('.with-errors')
          .exists())
          .toBeTruthy();
      }, (err) => {
        console.log(err);
      });
  });

  it('Form should not show error while value is correct', () => {
    const store = getStore();

    const wrapper = getMountedComponent(store);

    const input = wrapper.find('input[name=name]');

    input.setValue('t13')
      .then(() => {
        expect(wrapper.find('.with-errors')
          .exists())
          .toBeFalsy();
      }, (err) => console.log(err));
  });
});
