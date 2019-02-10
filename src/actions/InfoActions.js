import axios from 'axios';
import {
  GLOBAL_INFO_LOADING,
  GLOBAL_INFO_LOAD_SUCCESS,
  GLOBAL_INFO_LOAD_FAIL
} from './types';
import { BASE_URL } from '../api'

export const getGlobalInfo = () => async (dispatch) => {
  dispatch({ type: GLOBAL_INFO_LOADING });
  try {
    const response = await axios.get(`${BASE_URL}/app.json`)
    dispatch({ type: GLOBAL_INFO_LOAD_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GLOBAL_INFO_LOAD_FAIL, payload: `${e}` });
  }
};
