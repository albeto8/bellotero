import {
  GLOBAL_INFO_LOADING,
  GLOBAL_INFO_LOAD_SUCCESS,
  GLOBAL_INFO_LOAD_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  globalInfo: [],
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GLOBAL_INFO_LOADING:
      return {...state, loading: true };
    case GLOBAL_INFO_LOAD_SUCCESS:
      return {...state, loading: false, globalInfo: action.payload };
    case GLOBAL_INFO_LOAD_FAIL:
      return {...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
