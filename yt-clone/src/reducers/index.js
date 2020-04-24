import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
  search: searchReducer,
});

// This is the root reducer
