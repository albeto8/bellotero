import {
  TESTIMONIAL_INFO_LOADING,
  TESTIMONIAL_INFO_LOAD_SUCCESS,
  TESTIMONIAL_INFO_LOAD_FAIL
} from '../actions/types';
import reducer from '../reducers/TestimonialReducer';
import { testimonialInfoMock } from '../mocks';

describe('Testimonial reducer tests', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(testimonialInfoMock);
  });

  it('should handle TESTIMONIAL_INFO_LOADING', () => {
    const startAction = {
      type: TESTIMONIAL_INFO_LOADING
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, startAction)).toEqual({ loading: true });
  });

  it('should handle TESTIMONIAL_INFO_LOAD_FAIL', () => {
    const failAction = {
      type: TESTIMONIAL_INFO_LOAD_FAIL,
      payload: 'Error message',
    };
    expect(reducer({}, failAction)).toEqual({ error: 'Error message', loading: false });
  });

  it('should handle TESTIMONIAL_INFO_LOAD_SUCCESS', () => {
    const failAction = {
      type: TESTIMONIAL_INFO_LOAD_SUCCESS,
      payload: [],
    };
    expect(reducer({}, failAction)).toEqual({ testimonialInfo: [], loading: false });
  });

});
