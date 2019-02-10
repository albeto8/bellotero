import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getConfiguratorInfo } from '../actions';
import {
  CONFIGURATOR_INFO_LOADING,
  CONFIGURATOR_INFO_LOAD_SUCCESS,
  CONFIGURATOR_INFO_LOAD_FAIL
} from '../actions/types';
import { configuratorInfoMock } from '../mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Getting success call from configuration action', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json', {
      status: 200,
      response: configuratorInfoMock
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('It gets global info action success', async (done) => {
    const expectedActions = [
      { type: CONFIGURATOR_INFO_LOADING },
      { type: CONFIGURATOR_INFO_LOAD_SUCCESS, payload: configuratorInfoMock },
    ];

    const store = mockStore({ configuratorInfo: {} });

    moxios.wait(async () => {
      await store.dispatch(getConfiguratorInfo());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

describe('Getting error call from configurator action', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json', {
      status: 404,
      response: 'Error: Request failed with status code 404'
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('It gets global info action error 404', async (done) => {
    const expectedActions = [
      { type: CONFIGURATOR_INFO_LOADING },
      { type: CONFIGURATOR_INFO_LOAD_FAIL, payload: 'Error: Request failed with status code 404' },
    ];

    const store = mockStore({ configuratorInfo: {} });

    moxios.wait(async () => {
      await store.dispatch(getConfiguratorInfo());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
