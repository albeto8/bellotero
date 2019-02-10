import axios from 'axios';
import {
  TESTIMONIAL_INFO_LOADING,
  TESTIMONIAL_INFO_LOAD_SUCCESS,
  TESTIMONIAL_INFO_LOAD_FAIL
} from './types';
import { BASE_URL } from '../api'

export const getTestimonialInfo = () => async (dispatch) => {
  dispatch({ type: TESTIMONIAL_INFO_LOADING });
  try {
    const response = await axios.get(`${BASE_URL}/page1.json`)
    dispatch({ type: TESTIMONIAL_INFO_LOAD_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: TESTIMONIAL_INFO_LOAD_FAIL, payload: `${e}` });
  }
};
