import { SEARCH } from '../actions/types';

const initialState = {
  results: [],
  loading: true
};

//
export default (state = initialState, action) => {
  switch (action.type) {
    // reducer actions here
    default: {
      return state;
    }
  }
};
