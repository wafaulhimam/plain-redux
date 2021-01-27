import { combineReducers } from 'redux';
import counterReducer from './counter/reducers';
import contributorReducer from './contributor/reducers';

export default combineReducers({
  counter: counterReducer,
  contributor: contributorReducer
})
