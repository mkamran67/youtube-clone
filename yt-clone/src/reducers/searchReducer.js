import { SEARCH_VIDEOS, SEARCH_ERROR } from '../actions/types';

const initialState = {
  results: [],
  loading: false,
  isError: false,
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
        loading: false,
        isError: false,
        results: [1, 2, 3, 4, 5],
      };
    }
    default: {
      return state;
    }
  }
};
