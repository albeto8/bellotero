import {
  TESTIMONIAL_INFO_LOADING,
  TESTIMONIAL_INFO_LOAD_SUCCESS,
  TESTIMONIAL_INFO_LOAD_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  testimonialInfo: {
    slider: {
      title: '',
      reviews: []
    }
  },
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TESTIMONIAL_INFO_LOADING:
      return {...state, loading: true };
    case TESTIMONIAL_INFO_LOAD_SUCCESS:
      return {...state, loading: false, testimonialInfo: action.payload };
    case TESTIMONIAL_INFO_LOAD_FAIL:
      return {...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
