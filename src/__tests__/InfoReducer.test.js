import {
  GLOBAL_INFO_LOADING,
  GLOBAL_INFO_LOAD_SUCCESS,
  GLOBAL_INFO_LOAD_FAIL
} from '../actions/types';
import infoReducer from '../reducers/InfoReducer';
import { initialStateMock } from '../mocks';

describe('Info reducer tests', () => {

  it('should return the initial state', () => {
    expect(infoReducer(undefined, {})).toEqual(initialStateMock);
  });

  it('should handle GLOBAL_INFO_LOADING', () => {
    const startAction = {
      type: GLOBAL_INFO_LOADING
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(infoReducer({}, startAction)).toEqual({ loading: true });
  });

  it('should handle GLOBAL_INFO_LOAD_FAIL', () => {
    const failAction = {
      type: GLOBAL_INFO_LOAD_FAIL,
      payload: 'Error message',
    };
    expect(infoReducer({}, failAction)).toEqual({ error: 'Error message', loading: false });
  });

  it('should handle GLOBAL_INFO_LOAD_SUCCESS', () => {
    const failAction = {
      type: GLOBAL_INFO_LOAD_SUCCESS,
      payload: [],
    };
    expect(infoReducer({}, failAction)).toEqual({ globalInfo: [], loading: false });
  });

});
