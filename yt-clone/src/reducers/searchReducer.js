import {
  SEARCH_VIDEOS,
  SEARCH_ERROR,
  LOADING_FALSE,
  LOADING_TRUE,
} from '../actions/types';

const initialState = {
  results: [],
  loading: true,
  isError: false,
  nextPageToken: '',
};

//
export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ERROR: {
      return {
        ...state,
        loading: false,
        isError: true,
      };
    }
    case SEARCH_VIDEOS: {
      return {
        ...state,
        nextPageToken: action.payload.nextPageToken,
        results: action.payload.items,
      };
    }
    case LOADING_FALSE: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOADING_TRUE: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};
