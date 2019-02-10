import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getGlobalInfo } from '../actions';
import {
  GLOBAL_INFO_LOADING,
  GLOBAL_INFO_LOAD_SUCCESS,
  GLOBAL_INFO_LOAD_FAIL
} from '../actions/types';
import { globalInfoMock } from '../mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe('Getting success call from info action', () => {
  beforeEach(() => {
    moxios.stubRequest('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json', {
      status: 200,
      response: globalInfoMock
    });
  });

  it('It gets global info action success', async (done) => {
    const expectedActions = [
      { type: GLOBAL_INFO_LOADING },
      { type: GLOBAL_INFO_LOAD_SUCCESS, payload: globalInfoMock },
    ];

    const store = mockStore({ globalInfo: {} });

    moxios.wait(async () => {
      await store.dispatch(getGlobalInfo());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

describe('Getting error call from info action', () => {
  beforeEach(() => {
    moxios.stubRequest('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json', {
      status: 404,
      response: 'Error: Request failed with status code 404'
    });
  });

  it('It gets global info action error 404', async (done) => {
    const expectedActions = [
      { type: GLOBAL_INFO_LOADING },
      { type: GLOBAL_INFO_LOAD_FAIL, payload: 'Error: Request failed with status code 404' },
    ];

    const store = mockStore({ globalInfo: {} });

    moxios.wait(async () => {
      await store.dispatch(getGlobalInfo());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
