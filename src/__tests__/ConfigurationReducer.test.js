import {
  CONFIGURATOR_INFO_LOADING,
  CONFIGURATOR_INFO_LOAD_SUCCESS,
  CONFIGURATOR_INFO_LOAD_FAIL
} from '../actions/types';
import configuratorReducer from '../reducers/ConfiguratorReducer';
import { configuratorInfoMock } from '../mocks';

describe('Configuratior reducer tests', () => {

  it('should return the initial state', () => {
    expect(configuratorReducer(undefined, {})).toEqual(configuratorInfoMock);
  });

  it('should handle CONFIGURATOR_INFO_LOADING', () => {
    const startAction = {
      type: CONFIGURATOR_INFO_LOADING
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(configuratorReducer({}, startAction)).toEqual({ loading: true });
  });

  it('should handle CONFIGURATOR_INFO_LOAD_SUCCESS', () => {
    const failAction = {
      type: CONFIGURATOR_INFO_LOAD_FAIL,
      payload: 'Error message',
    };
    expect(configuratorReducer({}, failAction)).toEqual({ error: 'Error message', loading: false });
  });

  it('should handle CONFIGURATOR_INFO_LOAD_FAIL', () => {
    const failAction = {
      type: CONFIGURATOR_INFO_LOAD_SUCCESS,
      payload: [],
    };
    expect(configuratorReducer({}, failAction)).toEqual({ configuratorInfo: [], loading: false });
  });

});
