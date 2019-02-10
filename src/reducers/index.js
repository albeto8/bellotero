import { combineReducers } from 'redux';
import InfoReducer from './InfoReducer';
import ConfiguratorReducer from './ConfiguratorReducer';
import TestimonialReducer from './TestimonialReducer';

export default combineReducers({
  infoReducer: InfoReducer,
  configuratorReducer: ConfiguratorReducer,
  testimonialReducer: TestimonialReducer
});
