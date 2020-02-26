import { combineReducers } from 'redux';
import searchReducer from './';
export default combineReducers({
  search: searchReducer
});

// This is the root reducer
