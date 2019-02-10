import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getTestimonialInfo } from '../actions';
import {
  TESTIMONIAL_INFO_LOADING,
  TESTIMONIAL_INFO_LOAD_SUCCESS,
  TESTIMONIAL_INFO_LOAD_FAIL
} from '../actions/types';
import { testimonialInfoMock } from '../mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Getting success call from testimonial action', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json', {
      status: 200,
      response: testimonialInfoMock
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('It gets testimonial info action success', async (done) => {
    const expectedActions = [
      { type: TESTIMONIAL_INFO_LOADING },
      { type: TESTIMONIAL_INFO_LOAD_SUCCESS, payload: testimonialInfoMock },
    ];

    const store = mockStore({ configuratorInfo: {} });

    moxios.wait(async () => {
      await store.dispatch(getTestimonialInfo());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

describe('Getting error call from testimonial action', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json', {
      status: 404,
      response: 'Error: Request failed with status code 404'
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('It gets testimonial action error 404', async (done) => {
    const expectedActions = [
      { type: TESTIMONIAL_INFO_LOADING },
      { type: TESTIMONIAL_INFO_LOAD_FAIL, payload: 'Error: Request failed with status code 404' },
    ];

    const store = mockStore({ configuratorInfo: {} });

    moxios.wait(async () => {
      await store.dispatch(getTestimonialInfo());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
