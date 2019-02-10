import axios from 'axios';
import {
  CONFIGURATOR_INFO_LOADING,
  CONFIGURATOR_INFO_LOAD_SUCCESS,
  CONFIGURATOR_INFO_LOAD_FAIL
} from './types';
import { BASE_URL } from '../api'

export const getConfiguratorInfo = () => async (dispatch) => {
  dispatch({ type: CONFIGURATOR_INFO_LOADING });
  try {
    const response = await axios.get(`${BASE_URL}/page2.json`)
    dispatch({ type: CONFIGURATOR_INFO_LOAD_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: CONFIGURATOR_INFO_LOAD_FAIL, payload: `${e}` });
  }
};
