import {
  CONFIGURATOR_INFO_LOADING,
  CONFIGURATORL_INFO_LOAD_SUCCESS,
  CONFIGURATOR_INFO_LOAD_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  configuratorInfo: {
    calculator: {
      title: '',
      description: ''
    }
  },
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONFIGURATOR_INFO_LOADING:
      return {...state, loading: true };
    case CONFIGURATORL_INFO_LOAD_SUCCESS:
      return {...state, loading: false, globalInfo: action.payload };
    case CONFIGURATOR_INFO_LOAD_FAIL:
      return {...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
