import { combineReducers } from 'redux';
import InfoReducer from './InfoReducer';
import ConfiguratorReducer from './ConfiguratorReducer';

export default combineReducers({
  infoReducer: InfoReducer,
  configuratorReducer: ConfiguratorReducer
});
